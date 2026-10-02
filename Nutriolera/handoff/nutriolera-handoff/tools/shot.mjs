// Скриншоты лендинга (десктоп 1440 и телефон 390) и полное прохождение теста.
// node shot.mjs  → ../shots-new/
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { join, dirname } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const page = pathToFileURL(join(here, "../site/index.html")).href;
const out = join(here, "../shots-new"); await mkdir(out, { recursive: true });
const b = await chromium.launch(); const errs = [];
for (const w of [1440, 390]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 500, hasTouch: w < 500 });
  const p = await ctx.newPage(); p.on("pageerror", e => errs.push(w + ": " + e.message));
  await p.goto(page, { waitUntil: "networkidle" }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(2500);
  if (w < 500 && await p.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)) errs.push("390: горизонтальная прокрутка");
  const h = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0, i = 0; y < h; y += 3000, i++) { await p.setViewportSize({ width: w, height: Math.min(3000, h - y) }); await p.evaluate(v => scrollTo(0, v), y); await p.waitForTimeout(400); await p.screenshot({ path: `${out}/page-${w}-${i}.png` }); }
  // тест
  await p.setViewportSize({ width: w, height: 900 }); await p.evaluate(() => scrollTo(0, 0));
  await p.click('a[href="#test"] >> nth=1'); await p.click('[data-go="0"]'); await p.waitForTimeout(300);
  for (let i = 0; i < 45; i++) { const o = await p.$$(".t-opt"); await o[(i % 3) % o.length].click(); await p.waitForTimeout(320); }
  for (let i = 0; i < 5; i++) { await p.click("[data-next]"); await p.waitForTimeout(120); }
  await p.fill("#cName", "Тест"); await p.fill("#cContact", "@test"); await p.click("button[type=submit]"); await p.waitForTimeout(2000);
  const th = await p.evaluate(() => document.getElementById("test").scrollHeight);
  for (let y = 0, i = 0; y < th; y += 2400, i++) { await p.setViewportSize({ width: w, height: Math.min(2400, th - y) }); await p.evaluate(v => document.getElementById("test").scrollTo(0, v), y); await p.waitForTimeout(300); await p.screenshot({ path: `${out}/result-${w}-${i}.png` }); }
  if (w === 1440) { await p.emulateMedia({ media: "print" }); await p.pdf({ path: `${out}/report.pdf`, format: "A4", printBackground: true }); }
  await ctx.close();
}
await b.close();
console.log(errs.length ? "проблемы:\n" + errs.join("\n") : "проблем не найдено", "\n→", out);
