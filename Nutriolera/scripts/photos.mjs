/**
 * Фото со стоков в папку сайта — как делает Landly перед генерацией.
 *
 *   npm run photos -- sites/boroda "barbershop interior" 4
 *
 * Источник по ключам из окружения: PEXELS_KEY → PIXABAY_KEY → без ключа Openverse
 * (только CC0 и public domain). Файлы: <сайт>/photos/photo-N.jpg, список с авторами —
 * photos/photos.json. Запрос пиши по-английски.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const [dirArg, query = "", countArg = "4"] = process.argv.slice(2);
if (!dirArg || !query) {
  console.error('использование: npm run photos -- sites/<сайт> "english query" [кол-во]');
  process.exit(1);
}
const dir = join(resolve(dirArg), "photos");
const count = Number(countArg) || 4;

async function json(url, headers = {}) {
  const r = await fetch(url, { headers, signal: AbortSignal.timeout(15000) });
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

async function search() {
  if (process.env.PEXELS_KEY) {
    const d = await json(`https://api.pexels.com/v1/search?${new URLSearchParams({ query, per_page: String(count * 2), orientation: "landscape" })}`, { Authorization: process.env.PEXELS_KEY });
    return d.photos.map((p) => ({ url: p.src.large2x, author: p.photographer, page: p.url, license: "Pexels License" }));
  }
  if (process.env.PIXABAY_KEY) {
    const d = await json(`https://pixabay.com/api/?${new URLSearchParams({ key: process.env.PIXABAY_KEY, q: query, image_type: "photo", per_page: String(Math.max(3, count * 2)) })}`);
    return d.hits.map((h) => ({ url: h.largeImageURL, author: h.user, page: h.pageURL, license: "Pixabay Content License" }));
  }
  const d = await json(`https://api.openverse.org/v1/images/?${new URLSearchParams({ q: query, license: "cc0,pdm", size: "large", mature: "false", page_size: String(count * 3) })}`);
  return d.results.map((r) => ({ url: r.url, author: r.creator ?? "неизвестен", page: r.foreign_landing_url ?? r.url, license: r.license }));
}

await mkdir(dir, { recursive: true });
const saved = [];
for (const item of await search()) {
  if (saved.length >= count) break;
  try {
    const r = await fetch(item.url, { signal: AbortSignal.timeout(15000) });
    if (!r.ok) continue;
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length > 3_000_000) continue;
    const file = `photo-${saved.length + 1}.jpg`;
    await writeFile(join(dir, file), buf);
    saved.push({ file, ...item });
  } catch { /* битая ссылка — берём следующую */ }
}
await writeFile(join(dir, "photos.json"), JSON.stringify({ query, photos: saved }, null, 2));
console.log(saved.length ? saved.map((p) => `photos/${p.file} — ${p.author} (${p.license})`).join("\n") : "ничего не нашлось — попробуй другой запрос");
