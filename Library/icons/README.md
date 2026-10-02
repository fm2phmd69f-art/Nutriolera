# Библиотека Landly

Ресурсы, которыми пользуется агент. Страница их не грузит по сети: иконки и
элементы агент вставляет в код, а движки анимации лежат файлом рядом со страницей.

| Папка | Что там | Откуда | Лицензия |
|---|---|---|---|
| `icons/` | 18 наборов, ~33 тыс. иконок, одна строка — одна иконка | Lucide, Tabler, Phosphor, MingCute, Remix Icon, Hugeicons, Iconoir, Heroicons, Fluent Emoji (через Iconify JSON) | ISC, MIT, Apache-2.0 |
| `runtime/` | `anime.min.js`, `motion.min.js` | anime.js, Motion | MIT |
| `ui/` | 128 отобранных элементов интерфейса | Uiverse.io (galaxy) | MIT, см. `ui/LICENSE-uiverse.txt` |

`icons/*.txt` и `runtime/*` собираются из npm-пакетов: `npm run library:build`
(иконки в git не хранятся — 26 МБ). `ui/` лежит в репозитории как есть:
классы переименованы с префиксом `uv-имя-`, стили на голые теги привязаны к
обёртке, надписи и цвета агент меняет под страницу.

Справочник для агента по иконкам — `guides/icons.md`, по элементам —
`ui/INDEX.md`. Глобус (COBE, MIT) и шейдеры (Paper Shaders, Apache-2.0) лежат
в `effects/` рядом с библиотекой анимаций.
