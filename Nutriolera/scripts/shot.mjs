/**
 * Скриншоты и проверки страницы — то же, что делает Landly после каждого раунда.
 *
 *   npm run shot -- sites/boroda
 *
 * Кладёт в папку сайта shots/desktop.png (1440×900, первый экран и страница
 * до 5000 px) и shots/mobile.png (390 px), печатает проблемы: горизонтальная
 * прокрутка на телефоне, внешние загрузки (кроме открытых сервисов шрифтов),
 * ошибки скриптов, вес файла.
 */
import { mkdir, readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const dir = resolve(process.argv[2] ?? ".");
const page = join(dir, "index.html");
const FONT_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "api.fontshare.com", "cdn.fontshare.com", "fonts.bunny.net"];
const MAX_HEIGHT = 5000;

const html = await readFile(page, "utf8");
const issues = [];
const bytes = (await stat(page)).size;
if (bytes > 400_000) issues.push(`файл ${Math.round(bytes / 1024)} КБ — больше 400 КБ`);
if (!/<meta[^>]+name=["']viewport/i.test(html)) issues.push("нет meta viewport");

await mkdir(join(dir, "shots"), { recursive: true });
const browser = await chromium.launch();
const errors = [];
const external = new Set();

async function shoot(name, width, height, mobile) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: mobile ? 2 : 1, isMobile: mobile, hasTouch: mobile });
  const tab = await ctx.newPage();
  tab.on("pageerror", (e) => errors.push(`${name}: ${e.message}`));
  tab.on("request", (r) => {
    const u = new URL(r.url());
    if (/^https?:$/.test(u.protocol) && !FONT_HOSTS.includes(u.hostname)) external.add(r.url());
  });
  await tab.goto(pathToFileURL(page).href, { waitUntil: "networkidle" });
  await tab.evaluate(() => document.fonts.ready);
  await tab.waitForTimeout(700);
  if (mobile) {
    const overflow = await tab.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    if (overflow) issues.push("на телефоне есть горизонтальная прокрутка");
  }
  const full = Math.min(MAX_HEIGHT, await tab.evaluate(() => document.documentElement.scrollHeight));
  await tab.screenshot({ path: join(dir, "shots", `${name}-hero.png`) });
  await tab.setViewportSize({ width, height: mobile ? height : full });
  await tab.waitForTimeout(300);
  await tab.screenshot({ path: join(dir, "shots", `${name}.png`), fullPage: mobile, clip: mobile ? undefined : { x: 0, y: 0, width, height: full } });
  await ctx.close();
}

await shoot("desktop", 1440, 900, false);
await shoot("mobile", 390, 844, true);
await browser.close();

for (const u of external) issues.push(`внешняя загрузка: ${u}`);
for (const e of errors) issues.push(`ошибка скрипта — ${e}`);

console.log(`скриншоты: ${join(dir, "shots")}/desktop.png, desktop-hero.png, mobile.png, mobile-hero.png`);
console.log(issues.length ? `проблемы:\n- ${issues.join("\n- ")}` : "проблем не найдено");
