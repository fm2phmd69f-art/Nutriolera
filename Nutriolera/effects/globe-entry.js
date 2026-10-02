/**
 * Глобус для лендингов Landly на основе cobe (MIT). Собирается в
 * effects/landly-globe.js: npm run globe:build.
 *
 * Разметка:
 *   <div class="fx-globe" data-globe
 *        data-markers="55.75,37.62;59.93,30.34"
 *        data-arcs="55.75,37.62>43.24,76.95"
 *        data-base="#ffffff" data-marker="#f4442e" data-glow="#dfe6ff"
 *        data-dark="0" data-speed="0.4" data-phi="1.2" data-theta="0.25"></div>
 *
 * Глобус крутится сам, его можно тянуть мышью или пальцем; вне экрана
 * засыпает, в режиме уменьшенного движения стоит неподвижно.
 */
import createGlobe from "cobe";

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function rgb(hex, fallback) {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec((hex || "").trim());
  if (!m) return fallback;
  let h = m[1];
  if (h.length === 3) h = h.replace(/./g, (c) => c + c);
  const n = parseInt(h, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

const num = (v, d) => (v === undefined || v === "" || Number.isNaN(Number(v)) ? d : Number(v));

function points(value) {
  return (value || "")
    .split(";")
    .map((p) => p.split(",").map(Number))
    .filter((p) => p.length === 2 && p.every((x) => Number.isFinite(x)));
}

function mount(el) {
  const d = el.dataset;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = "width:100%;height:100%;display:block;cursor:grab;contain:layout paint size;opacity:0;transition:opacity .8s";
  el.append(canvas);

  const markerColor = rgb(d.marker, [0.96, 0.27, 0.18]);
  const markers = points(d.markers).map((location) => ({ location, size: num(d.markerSize, 0.06) }));
  const arcs = (d.arcs || "")
    .split(";")
    .map((a) => a.split(">").map((p) => p.split(",").map(Number)))
    .filter((a) => a.length === 2 && a.every((p) => p.length === 2 && p.every(Number.isFinite)))
    .map(([from, to]) => ({ from, to }));

  let phi = num(d.phi, 0);
  let theta = num(d.theta, 0.25);
  const speed = reduce ? 0 : num(d.speed, 0.4) / 100;
  let width = 0;
  let drag = null;
  let visible = true;

  const size = () => {
    width = el.clientWidth;
    return Math.max(1, width);
  };
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const globe = createGlobe(canvas, {
    devicePixelRatio: dpr,
    width: size() * dpr,
    height: size() * dpr,
    phi,
    theta,
    dark: num(d.dark, 0),
    diffuse: num(d.diffuse, 1.2),
    mapSamples: num(d.samples, 16000),
    mapBrightness: num(d.brightness, 6),
    baseColor: rgb(d.base, [1, 1, 1]),
    markerColor,
    glowColor: rgb(d.glow, [1, 1, 1]),
    markers,
    arcs,
    arcColor: rgb(d.arc, markerColor),
    arcWidth: num(d.arcWidth, 0.5),
    arcHeight: num(d.arcHeight, 0.3),
    opacity: num(d.opacity, 1),
  });
  requestAnimationFrame(() => (canvas.style.opacity = "1"));

  canvas.addEventListener("pointerdown", (e) => {
    drag = { x: e.clientX, y: e.clientY, phi, theta };
    canvas.setPointerCapture(e.pointerId);
    canvas.style.cursor = "grabbing";
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drag) return;
    phi = drag.phi + (e.clientX - drag.x) / 200;
    theta = Math.max(-0.6, Math.min(0.6, drag.theta + (e.clientY - drag.y) / 400));
  });
  const release = () => {
    drag = null;
    canvas.style.cursor = "grab";
  };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);

  new ResizeObserver(() => globe.update({ width: size() * dpr, height: size() * dpr })).observe(el);
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(el);

  const tick = () => {
    if (visible) {
      if (!drag) phi += speed;
      globe.update({ phi, theta });
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function init() {
  document.querySelectorAll("[data-globe]").forEach((el) => {
    if (el.dataset.globeReady) return;
    el.dataset.globeReady = "1";
    try {
      mount(el);
    } catch (error) {
      /* Нет WebGL — остаётся фон контейнера. */
      console.warn("landly-globe:", error);
    }
  });
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
