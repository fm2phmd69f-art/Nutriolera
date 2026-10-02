#!/bin/sh
# Чистая сборка и деплой на Vercel (проект nutriolera). Нужен `npx vercel login` один раз.
set -e
cd "$(dirname "$0")/.."
rm -rf .deploy && mkdir -p .deploy/photos
cp site/index.html .deploy/
for f in $(grep -oE 'photos/[a-z0-9-]+\.jpg' site/index.html | sort -u) $(for d in 1 2 3; do for m in 1 2 3; do echo photos/meal-$d-$m.jpg; done; done); do cp "site/$f" ".deploy/$f"; done
cd .deploy && npx -y vercel@60 deploy --prod --yes --name nutriolera
