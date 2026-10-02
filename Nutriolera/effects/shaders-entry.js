/*
 * Шейдерные фоны Landly на основе Paper Shaders
 * (https://github.com/paper-design/shaders, лицензия Apache-2.0).
 *
 * Собирается в effects/landly-shaders.js командой `npm run shaders:build`.
 * Готовый файл кладётся рядом со страницей, и разметка подключает его так:
 *
 *   <div class="fx-shader" data-shader="mesh-gradient"
 *        data-colors="#e0eaff,#241d9a,#f75092"></div>
 *   <script src="landly-shaders.js" defer></script>
 *
 * Шейдер занимает весь размер контейнера, сам ставится на паузу вне экрана,
 * а при «уменьшении движения» рисует один неподвижный кадр.
 */
import {
  ShaderMount,
  ShaderFitOptions,
  getShaderColorFromString,
  getShaderNoiseTexture,
  meshGradientFragmentShader,
  grainGradientFragmentShader,
  GrainGradientShapes,
  ditheringFragmentShader,
  DitheringShapes,
  DitheringTypes,
} from "@paper-design/shaders";

function sizing(fit, scale) {
  return {
    u_fit: ShaderFitOptions[fit],
    u_scale: scale,
    u_rotation: 0,
    u_offsetX: 0,
    u_offsetY: 0,
    u_originX: 0.5,
    u_originY: 0.5,
    u_worldWidth: 0,
    u_worldHeight: 0,
  };
}

const list = (value, fallback) =>
  (value || fallback).split(",").map((c) => c.trim()).filter(Boolean);
const num = (value, fallback) => (value === undefined || value === "" || isNaN(+value) ? fallback : +value);

const GRAIN_SHAPES = ["corners", "wave", "truchet", "ripple", "sphere"];

const SHADERS = {
  /* Плавные цветовые пятна. Спокойный фон для hero, ИИ, финансов, моды. */
  "mesh-gradient": (d) => {
    const colors = list(d.colors, "#e0eaff,#241d9a,#f75092,#9f50d3").slice(0, 10);
    return {
      shader: meshGradientFragmentShader,
      uniforms: {
        u_colors: colors.map(getShaderColorFromString),
        u_colorsCount: colors.length,
        u_distortion: num(d.distortion, 0.8),
        u_swirl: num(d.swirl, 0.1),
        u_grainMixer: num(d.grain, 0),
        u_grainOverlay: num(d.grain, 0) / 2,
        ...sizing("contain", 1),
      },
      speed: num(d.speed, 0.6),
    };
  },
  /* Градиент с плёночным зерном: волна, пятно, сфера и т. д. */
  "grain-gradient": (d) => {
    const colors = list(d.colors, "#7300ff,#eba8ff,#00bfff,#2a00ff").slice(0, 7);
    return {
      shader: grainGradientFragmentShader,
      uniforms: {
        u_colorBack: getShaderColorFromString(d.back || "#000000"),
        u_colors: colors.map(getShaderColorFromString),
        u_colorsCount: colors.length,
        u_softness: num(d.softness, 0.5),
        u_intensity: num(d.intensity, 0.5),
        u_noise: num(d.noise, 0.25),
        /* dots и blob при таких настройках почти пустые — их не предлагаем */
        u_shape: GRAIN_SHAPES.includes(d.shape) ? GrainGradientShapes[d.shape] : GrainGradientShapes.corners,
        u_noiseTexture: getShaderNoiseTexture(),
        ...sizing("contain", 1),
      },
      speed: num(d.speed, 0.6),
    };
  },
  /* Пиксельный дизеринг в два цвета: ретро, игры, техно, редакционный стиль. */
  dithering: (d) => ({
    shader: ditheringFragmentShader,
    uniforms: {
      u_colorBack: getShaderColorFromString(d.back || "#000000"),
      u_colorFront: getShaderColorFromString(d.front || "#00b2ff"),
      u_shape: DitheringShapes[d.shape] || DitheringShapes.sphere,
      u_type: DitheringTypes[d.type] || DitheringTypes["4x4"],
      u_pxSize: num(d.size, 2),
      ...sizing("none", num(d.scale, 0.6)),
    },
    speed: num(d.speed, 0.6),
  }),
};

function mount(el) {
  if (el.__landlyShader) return;
  const make = SHADERS[el.dataset.shader];
  if (!make) return;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { shader, uniforms, speed } = make(el.dataset);
  el.__landlyShader = true;
  /* Текстуру шума шейдер принимает только полностью загруженной. */
  const images = Object.values(uniforms).filter((v) => v instanceof HTMLImageElement && !v.complete);
  Promise.all(images.map((img) => new Promise((done) => img.addEventListener("load", done, { once: true }))))
    .then(() => {
      el.__landlyShader = new ShaderMount(el, shader, uniforms, undefined, reduce ? 0 : speed, num(el.dataset.frame, 4000));
    })
    .catch((error) => {
      /* WebGL недоступен — остаётся фон, заданный в CSS контейнера */
      console.warn("[landly-shaders]", error);
    });
}

function init() {
  document.querySelectorAll("[data-shader]").forEach(mount);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
window.LandlyShaders = { mount, init };
