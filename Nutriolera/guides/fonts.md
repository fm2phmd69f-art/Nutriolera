# Шрифты для лендингов Landly

Шрифты можно подключать с открытых сервисов — Google Fonts, Fontshare, Bunny Fonts —
обычной ссылкой `<link>` в `<head>`. Другие внешние загрузки по-прежнему запрещены.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=swap" rel="stylesheet">
```

Правила:

1. **Страница на русском — только шрифты с кириллицей.** Шрифт без кириллицы молча
   подменится системным, и вся типографика развалится. Список проверенных ниже.
2. **Одна-две гарнитуры на страницу.** Если две — они должны явно различаться
   (гротеск + антиква, широкий + узкий), а не быть двумя похожими гротесками.
3. **Подключай только нужные начертания** (`wght@400;500;700`), не всё семейство.
4. **Всегда `display=swap` и системный запас в `font-family`:**
   `font-family: "Onest", -apple-system, "Segoe UI", sans-serif;`
5. Не бери шрифт «по умолчанию» (Inter, Montserrat, Roboto) без причины: гарнитура —
   главный носитель характера страницы. Выбирай по предмету и тону брифа.

## С кириллицей (Google Fonts)

**Гротески, спокойные:** Onest, Manrope, Golos Text, Geologica, Commissioner, Wix Madefor
Display, Wix Madefor Text, Mulish, Nunito Sans, Rubik, Jost, Sofia Sans, Roboto Flex
(ось ширины), IBM Plex Sans, Fira Sans, Alegreya Sans, Arsenal, Inter Tight.

**Гротески с характером:** Unbounded (широкий, для заголовков), Montserrat Alternates,
Exo 2, M PLUS Rounded 1c (скруглённый), Comfortaa (геометричный, мягкий), Didact Gothic.

**Узкие и плакатные:** Oswald, Sofia Sans Condensed, Sofia Sans Extra Condensed,
Fira Sans Condensed, Roboto Condensed, Dela Gothic One, Russo One, Rubik Mono One,
Handjet (пиксельный, переменный).

**Антиквы и засечки:** Playfair Display, Cormorant Garamond, EB Garamond, Lora,
Literata, Spectral, PT Serif, Prata, Bona Nova, Old Standard TT, Vollkorn,
Noto Serif Display, Yeseva One, Oranienbaum (узкая дидона), Forum, Alice, Kurale.

**Брусковые:** Roboto Slab, Podkova.

**Тонкие декоративные:** Poiret One, Tenor Sans.

**Моноширинные:** JetBrains Mono, IBM Plex Mono, Martian Mono (ось ширины),
Roboto Mono, Ubuntu Mono, Fira Code.

**Рукописные:** Caveat, Bad Script, Marck Script, Amatic SC, Pangolin.

## Без кириллицы — не для русского текста

Bebas Neue, Anton, Bricolage Grotesque, DM Sans, DM Serif Display, Fraunces,
Instrument Serif, Instrument Sans, Space Grotesk, Syne, Archivo, Sora, Figtree,
Plus Jakarta Sans, Outfit, Epilogue. Шрифты Fontshare (Satoshi, General Sans,
Clash Display, Cabinet Grotesk) — тоже только латиница: их можно брать для
английских слов, цифр и логотипов, но не для русских заголовков.

Tektur формально с кириллицей, но буква «д» в нём похожа на латинскую g — не бери.
