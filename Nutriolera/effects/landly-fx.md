# Библиотека анимаций Landly

Эффекты для лендингов на чистом CSS и JavaScript: без сети, каждый вставляется
в страницу целиком. Написаны для Landly с нуля, часть идей — из открытых
библиотек Magic UI и Motion Primitives (MIT). Шейдерные фоны собраны из Paper
Shaders (Apache-2.0), глобус — из COBE (MIT); их код лежит отдельными файлами
рядом со страницей. В разделе «Движки» — рецепты на anime.js и Motion (MIT).

## Правила — прочитай до того, как выбирать

1. **Один громкий эффект на страницу.** Громкие — это фоны и анимация главного
   заголовка. Всё остальное — тихие микровзаимодействия: кнопки, карточки,
   счётчики. Если на странице уже есть живой фон, заголовок оставь спокойным.
2. **Эффект должен что-то значить для продукта.** Волны из точек — для
   музыки, звука, данных; сетка-пол — для игр и событий; зерно — для
   плёночной фотографии и крафта. Нет связи с продуктом — не ставь.
3. **Не анимируй каждую секцию.** Появление при прокрутке — только для
   сеток и списков, где элементы правда идут друг за другом.
4. **Строгим сферам — тихие эффекты или ни одного.** Юристы, клиники, банки,
   госуслуги: максимум счётчик и кнопка с откликом.
5. **Всё уже учитывает `prefers-reduced-motion`**: в этом режиме эффекты
   показывают финальное состояние. Не удаляй эти проверки.
6. **Страница читается и без JavaScript.** Эффекты только украшают готовый
   текст: не прячь контент до срабатывания скрипта.
7. **Цвета бери из палитры страницы.** В каждом эффекте цвета вынесены в
   CSS-переменные или `data-`атрибуты — подставь свои, а не оставляй примерные.
8. Живой фон кладётся внутрь секции с `position: relative; overflow: hidden`,
   контент секции — с `position: relative; z-index: 1`.
   Canvas-фонам с классом `fx-bg` нужен общий CSS из начала раздела «Фоны»
   (найди его через Grep по `.fx-bg{`), его берут один раз на страницу.
9. **Файлы рядом со страницей** — `landly-shaders.js`, `landly-globe.js`,
   `anime.min.js`, `motion.min.js` — подключай только если используешь их
   эффект. Неподключённые файлы Landly сам уберёт из выгрузки.
10. Код эффекта копируй целиком: блок `<style>` — в `<head>` или рядом,
   разметку — на место, `<script>` — перед `</body>`. Если используешь два
   эффекта одной категории, общие классы не дублируй.

## Каталог

| id | Категория | Что делает | Подходит |
|---|---|---|---|
| gradient-text | текст | перелив цвета по буквам | ИИ, креатив, события |
| shiny-text | текст | блик пробегает по надписи | премиум, подписи, бейджи |
| split-reveal | текст | слова заголовка поднимаются или проявляются из размытия | почти везде, для hero |
| rotating-words | текст | сменяющееся слово в заголовке | сервисы для разных аудиторий |
| typewriter | текст | печать строк с курсором | ИИ, разработчики, чаты |
| scramble | текст | символы «расшифровываются» | техника, безопасность, данные |
| count-up | текст | число набирается при появлении | статистика, цены, результаты |
| circular-text | текст | надпись вращается по кругу | кафе, мастерские, бейджи |
| glitch-text | текст | цифровой сбой | игры, музыка, ночные события |
| scroll-words | текст | абзац загорается по словам при прокрутке | манифест, миссия, одна сильная мысль |
| morph-words | текст | слово перетекает в следующее, как капля | креатив, красота, ИИ |
| sparkles | текст | вокруг слова вспыхивают звёздочки | праздники, дети, подарки, косметика |
| highlight | текст | маркер, подчёркивание или обводка от руки | выгода, цена, главное слово абзаца |
| velocity-text | текст | бегущие строки разгоняются от прокрутки | еда, мода, спорт, события |
| shape-waves | фон | поле фигур, по которому идут волны | звук, данные, технологии |
| line-waves | фон | пучок текущих линий | финансы, ИИ, спокойные продукты |
| dot-grid | фон | сетка точек тянется к курсору | SaaS, инструменты |
| particles | фон | созвездие частиц с линиями | ИИ, наука, сети |
| aurora | фон | мягкие дрейфующие пятна цвета | медитация, ИИ, ночные темы |
| grain | фон | плёночное зерно поверх секции | фото, крафт, мода |
| beams | фон | световые капли падают по вертикалям | разработчики, инфраструктура |
| grid-floor | фон | уходящий в перспективу неоновый пол | игры, конференции, музыка |
| meteors | фон | метеоры с хвостом летят по диагонали | космос, ночь, запуски, ИИ |
| flicker-grid | фон | сетка пикселей тихо мерцает | технологии, данные, безопасность |
| ripple-rings | фон | концентрические круги дышат вокруг центра | связь, приложения, спокойствие |
| shader-mesh | шейдер | живые перетекающие цветовые пятна (WebGL) | hero для ИИ, финтеха, моды, креатива |
| shader-grain | шейдер | градиент-форма с плёночным зерном (WebGL) | музыка, мода, премиум, ночные темы |
| shader-dither | шейдер | пиксельный дизеринг в два цвета (WebGL) | ретро, игры, техно, редакционный стиль |
| marquee | блок | бесконечная лента логотипов или текста | клиенты, партнёры, анонсы |
| tilt-card | блок | карточка наклоняется за курсором | товары, тарифы, кейсы |
| spotlight-card | блок | световое пятно под курсором | фичи, тарифы в тёмных темах |
| border-glow | блок | по рамке бежит свечение | главный тариф, акцентная карточка |
| scroll-reveal | блок | элементы списка появляются по очереди | сетки фич, шаги |
| scroll-stack | блок | карточки ложатся стопкой при прокрутке | шаги, кейсы, программа курса |
| orbit | блок | иконки вращаются вокруг центра | интеграции, экосистема |
| accordion-gallery | блок | полосы фото раскрываются при наведении | галереи, направления, туры |
| globe | блок | вращающийся глобус с метками и маршрутами (WebGL) | доставка, логистика, туризм, международное |
| beam-network | блок | импульсы бегут по линиям между иконками | интеграции, автоматизация |
| notify-list | блок | уведомления появляются лентой | заказы, оплаты, записи, SaaS |
| compare | блок | шторка «до и после» | ремонт, клининг, косметология |
| progressive-blur | блок | край блока уходит в размытие | ленты, галереи, фото |
| terminal | блок | команды печатаются в окне терминала | разработчики, API, хостинг |
| device-frame | блок | рамки браузера и телефона | приложения, онлайн-сервисы, кейсы |
| dock | блок | иконки увеличиваются под курсором | приложения, наборы инструментов |
| scroll-progress | блок | полоса прочитанного вверху | длинные страницы, программы курсов |
| lens | блок | лупа показывает фактуру фото | товары: ткань, ювелирка, керамика |
| magnetic | кнопка | кнопка тянется за курсором | главный CTA |
| glare | кнопка | блик по кнопке при наведении | премиум, покупка |
| slide-arrow | кнопка | стрелка уезжает и возвращается | «Смотреть кейсы», «Далее» |
| fill-hover | кнопка | заливка растекается от курсора | контурные кнопки |
| ripple | кнопка | волна от точки клика | приложения, формы |
| shimmer | кнопка | по кнопке бежит отблеск | CTA в тёмных темах |
| confirm | кнопка | кнопка превращается в «Готово» | запись, подписка, заявки |
| pulse | кнопка | от кнопки расходится волна | одна главная кнопка записи или звонка |
| confetti | кнопка | салют из конфетти после нажатия | праздники, подарки, регистрация |
| anime-draw | движок | SVG-линии рисуются при появлении | маршруты, схемы, контур предмета |
| anime-text | движок | буквы заголовка выезжают волной | главный заголовок с характером |
| anime-grid | движок | поле точек, волна от клика | данные, звук, сенсоры, игры |
| motion-parallax | движок | слои едут с разной скоростью | редакционные, туризм, недвижимость |
| motion-spring | движок | пружинный отклик на наведение и нажатие | тарифы, товары, карточки |

---

## Текст

### gradient-text
Перелив цвета по буквам. Ставь на всю короткую фразу, число или название —
не на одно слово внутри длинного заголовка.

```html
<style>
  .fx-gradient-text{
    background:linear-gradient(90deg,#6d5dfc,#e05cf5,#ff9a5c,#6d5dfc);
    background-size:200% auto;
    -webkit-background-clip:text;background-clip:text;color:transparent;
    animation:fx-gradient-pan 6s linear infinite;
  }
  @keyframes fx-gradient-pan{to{background-position:200% center}}
  @media (prefers-reduced-motion:reduce){.fx-gradient-text{animation:none}}
</style>

<h1 class="fx-gradient-text">Сайт за один вечер</h1>
```

### shiny-text
Блик пробегает по приглушённой надписи. Хорошо на подписях под заголовком,
бейджах, ссылках вроде «Новая версия».

```html
<style>
  .fx-shiny-text{
    --fx-base:rgba(255,255,255,.45);--fx-glint:#fff;
    background:linear-gradient(110deg,var(--fx-base) 42%,var(--fx-glint) 50%,var(--fx-base) 58%);
    background-size:300% 100%;
    -webkit-background-clip:text;background-clip:text;color:transparent;
    animation:fx-glint 3.5s linear infinite;
  }
  @keyframes fx-glint{from{background-position:100% 0}to{background-position:0 0}}
  @media (prefers-reduced-motion:reduce){.fx-shiny-text{animation:none;background:none;color:var(--fx-glint)}}
</style>

<p class="fx-shiny-text">Новая версия уже доступна</p>
```

### split-reveal
Слова заголовка собираются при загрузке. Режим `rise` — поднимаются из-под
строки, `blur` — проявляются из размытия. `<br>` внутри заголовка сохраняется,
неразрывные пробелы тоже — поэтому на телефоне проверь, что связка «предлог +
длинное слово» помещается в строку, и уменьши кегль, если нет.

```html
<style>
  [data-fx="split-reveal"] .fx-word{display:inline-block;vertical-align:top}
  [data-fx="split-reveal"][data-mode="rise"] .fx-word{overflow:hidden;padding-bottom:.12em;margin-bottom:-.12em}
  [data-fx="split-reveal"] .fx-word>span{display:inline-block;transition:transform .9s cubic-bezier(.2,.75,.25,1),opacity .9s ease,filter .9s ease;transition-delay:calc(var(--i)*65ms)}
  [data-fx="split-reveal"][data-mode="rise"] .fx-word>span{transform:translateY(110%)}
  [data-fx="split-reveal"][data-mode="blur"] .fx-word>span{opacity:0;filter:blur(12px);transform:translateY(.2em)}
  [data-fx="split-reveal"].fx-in .fx-word>span{transform:none;opacity:1;filter:none}
  .fx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
</style>

<h1 data-fx="split-reveal" data-mode="rise">Заголовок собирается<br>по словам</h1>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var esc=function(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  document.querySelectorAll('[data-fx="split-reveal"]').forEach(function(el){
    var tmp=document.createElement('div');
    tmp.innerHTML=el.innerHTML.replace(/<br\s*\/?>/gi,' ⏎ ');
    var text=tmp.textContent.trim();
    var i=0;
    var html=text.split(/[ \t\n]+/).map(function(w){
      return w==='⏎'?'<br>':'<span class="fx-word" aria-hidden="true"><span style="--i:'+(i++)+'">'+esc(w)+'</span></span>';
    }).join(' ');
    el.innerHTML='<span class="fx-sr">'+esc(text.replace(/ ⏎ /g,' '))+'</span>'+html;
    var io=new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting){el.classList.add('fx-in');io.disconnect();}
    },{threshold:.2});
    requestAnimationFrame(function(){io.observe(el)});
  });
})();
</script>
```

### rotating-words
Одно слово в заголовке сменяется по кругу. Список — в `data-words` через `|`,
первое слово стоит в разметке, чтобы без скрипта заголовок был полным.

```html
<style>
  .fx-rotate{display:inline-grid;vertical-align:bottom;overflow:hidden;transition:width .45s cubic-bezier(.2,.75,.25,1)}
  .fx-rotate>span{grid-area:1/1;justify-self:start;white-space:nowrap;transition:transform .55s cubic-bezier(.2,.75,.25,1),opacity .4s ease}
  .fx-rotate>span.is-out{transform:translateY(-100%);opacity:0}
  .fx-rotate>span.is-next{transform:translateY(100%);opacity:0}
</style>

<h2>Сайт для <span class="fx-rotate" data-fx="rotating-words" data-words="кофейни|клиники|школы|студии йоги">кофейни</span></h2>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="rotating-words"]').forEach(function(el){
    var words=(el.dataset.words||'').split('|').filter(Boolean);
    if(words.length<2) return;
    el.textContent='';
    var spans=words.map(function(w,n){
      var s=document.createElement('span');s.textContent=w;if(n)s.className='is-next';el.appendChild(s);return s;
    });
    var i=0;
    var fit=function(){el.style.width=spans[i].getBoundingClientRect().width+'px'};
    fit();
    setInterval(function(){
      var cur=spans[i];i=(i+1)%spans.length;var next=spans[i];
      cur.className='is-out';next.className='';fit();
      setTimeout(function(){cur.className='is-next'},600);
    },+(el.dataset.interval||2400));
  });
})();
</script>
```

### typewriter
Строки печатаются и стираются по очереди. Для экранного диктора текст
лежит целиком в скрытом `span`.

```html
<style>
  .fx-type-live::after{content:"";display:inline-block;width:.08em;height:1em;margin-left:.06em;background:currentColor;vertical-align:-.12em;animation:fx-caret 1s steps(1) infinite}
  @keyframes fx-caret{50%{opacity:0}}
  .fx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
</style>

<p data-fx="typewriter" data-lines="Опишите идею|Получите лендинг|Опубликуйте за минуту">Опишите идею</p>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-fx="typewriter"]').forEach(function(el){
    var lines=(el.dataset.lines||el.textContent).split('|');
    if(reduce) return;
    el.innerHTML='<span class="fx-sr"></span><span class="fx-type-live" aria-hidden="true"></span>';
    el.firstChild.textContent=lines.join('. ');
    var live=el.lastChild,li=0,ci=0,deleting=false;
    (function tick(){
      var line=lines[li];
      ci+=deleting?-1:1;
      live.textContent=line.slice(0,ci);
      var wait=deleting?28:55;
      if(!deleting&&ci===line.length){deleting=true;wait=1500;}
      else if(deleting&&ci===0){deleting=false;li=(li+1)%lines.length;wait=350;}
      setTimeout(tick,wait);
    })();
  });
})();
</script>
```

### scramble
Символы перебираются и «расшифровываются» в финальный текст — при
появлении на экране и при наведении, если задан `data-hover`. Лучше всего
смотрится на коротких надписях моноширинным шрифтом.

```html
<h2 data-fx="scramble" data-hover="1">Доступ открыт</h2>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var glyphs='АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ0123456789#%&*+=<>/';
  document.querySelectorAll('[data-fx="scramble"]').forEach(function(el){
    var final=el.textContent,busy=false;
    el.setAttribute('aria-label',final);
    var run=function(){
      if(busy) return;busy=true;
      var start=performance.now(),dur=+(el.dataset.duration||1100);
      (function frame(now){
        var p=Math.min(1,(now-start)/dur),out='';
        for(var i=0;i<final.length;i++){
          var ch=final[i];
          out+=(/\s/.test(ch)||i/final.length<p)?ch:glyphs[(Math.random()*glyphs.length)|0];
        }
        el.textContent=out;
        if(p<1)requestAnimationFrame(frame);else busy=false;
      })(start);
    };
    new IntersectionObserver(function(entries,io){
      if(entries[0].isIntersecting){run();io.disconnect();}
    },{threshold:.5}).observe(el);
    if(el.dataset.hover)el.addEventListener('mouseenter',run);
  });
})();
</script>
```

### count-up
Число набирается от нуля, когда блок появляется на экране. В разметке сразу
стоит итоговое значение — оно и останется без скрипта. Числу нужен
`font-variant-numeric: tabular-nums`, иначе строка будет дрожать.

```html
<style>[data-fx="count-up"]{font-variant-numeric:tabular-nums}</style>

<strong data-fx="count-up" data-to="12400" data-suffix=" ₽">12 400 ₽</strong>
<strong data-fx="count-up" data-to="4.9" data-decimals="1">4,9</strong>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="count-up"]').forEach(function(el){
    var to=parseFloat(el.dataset.to),d=+(el.dataset.decimals||0),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'';
    if(isNaN(to)) return;
    var fmt=function(n){return pre+n.toLocaleString('ru-RU',{minimumFractionDigits:d,maximumFractionDigits:d})+suf};
    new IntersectionObserver(function(entries,io){
      if(!entries[0].isIntersecting) return;
      io.disconnect();
      var start=performance.now(),dur=+(el.dataset.duration||1600);
      (function frame(now){
        var p=Math.min(1,(now-start)/dur);
        el.textContent=fmt(to*(1-Math.pow(1-p,3)));
        if(p<1)requestAnimationFrame(frame);
      })(start);
    },{threshold:.4}).observe(el);
  });
})();
</script>
```

### circular-text
Надпись по кругу медленно вращается вокруг значка — как печать или штамп.
Текст повтори так, чтобы он занял весь круг; `textLength` растягивает его
ровно на окружность.

```html
<style>
  .fx-circle{position:relative;width:132px;height:132px;display:grid;place-items:center}
  .fx-circle svg{position:absolute;inset:0;width:100%;height:100%;animation:fx-spin-text 18s linear infinite}
  .fx-circle text{font:600 11.5px/1 system-ui,sans-serif;letter-spacing:.14em;fill:currentColor}
  @keyframes fx-spin-text{to{transform:rotate(360deg)}}
  @media (prefers-reduced-motion:reduce){.fx-circle svg{animation:none}}
</style>

<div class="fx-circle" role="img" aria-label="Свежая выпечка с семи утра">
  <svg viewBox="0 0 132 132" aria-hidden="true">
    <defs><path id="fx-circle-path" d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"/></defs>
    <text><textPath href="#fx-circle-path" textLength="326">СВЕЖАЯ ВЫПЕЧКА • С СЕМИ УТРА • КАЖДЫЙ ДЕНЬ •</textPath></text>
  </svg>
  <span aria-hidden="true">✺</span>
</div>
```

### glitch-text
Короткие цифровые сбои: смещённые красный и голубой слои. Только для
коротких заголовков в играх, музыке, ночных событиях.

```html
<style>
  .fx-glitch{position:relative;display:inline-block}
  .fx-glitch::before,.fx-glitch::after{content:attr(data-text);position:absolute;inset:0;pointer-events:none}
  .fx-glitch::before{color:#ff3d7f;animation:fx-glitch-a 3s infinite steps(1)}
  .fx-glitch::after{color:#3de0ff;animation:fx-glitch-b 3s infinite steps(1)}
  @keyframes fx-glitch-a{0%,86%,100%{clip-path:inset(0 0 100% 0);transform:none}88%{clip-path:inset(20% 0 55% 0);transform:translate(-4px,1px)}92%{clip-path:inset(60% 0 12% 0);transform:translate(3px,-1px)}}
  @keyframes fx-glitch-b{0%,88%,100%{clip-path:inset(0 0 100% 0);transform:none}90%{clip-path:inset(40% 0 35% 0);transform:translate(4px,0)}94%{clip-path:inset(8% 0 70% 0);transform:translate(-3px,1px)}}
  @media (prefers-reduced-motion:reduce){.fx-glitch::before,.fx-glitch::after{animation:none;clip-path:inset(0 0 100% 0)}}
</style>

<h1 class="fx-glitch" data-text="НОЧНОЙ РЕЙД">НОЧНОЙ РЕЙД</h1>
```

### scroll-words
Абзац «загорается» по словам, пока его прокручивают. Для манифеста, миссии,
одной сильной мысли крупным кеглем — не для обычного текста. Неразрывные
пробелы сохраняются: связка «и&nbsp;отвечаем» горит одним словом.

```html
<style>
  .fx-scroll-words .fx-w{opacity:var(--fx-dim,.2);transition:opacity .3s linear}
  .fx-scroll-words .fx-w.on{opacity:1}
</style>

<p class="fx-scroll-words" data-fx="scroll-words">Мы не продаём курсы. Мы сидим рядом, пока вы делаете первый проект, и&nbsp;отвечаем на&nbsp;вопросы в&nbsp;тот же день.</p>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var blocks=[];
  document.querySelectorAll('[data-fx="scroll-words"]').forEach(function(el){
    var walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nodes=[],words=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      var frag=document.createDocumentFragment();
      node.textContent.split(/([ \t\n]+)/).forEach(function(part){
        if(!part) return;
        if(/^[ \t\n]+$/.test(part)){frag.append(part);return}
        var s=document.createElement('span');s.className='fx-w';s.textContent=part;words.push(s);frag.append(s);
      });
      node.replaceWith(frag);
    });
    blocks.push({el:el,words:words});
  });
  var queued=false;
  function update(){
    queued=false;
    var vh=innerHeight;
    blocks.forEach(function(b){
      var r=b.el.getBoundingClientRect();
      var p=Math.min(1,Math.max(0,(vh*.85-r.top)/(r.height+vh*.35)));
      var lit=Math.round(p*b.words.length);
      b.words.forEach(function(w,i){w.classList.toggle('on',i<lit)});
    });
  }
  function queue(){if(!queued){queued=true;requestAnimationFrame(update)}}
  addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue);update();
})();
</script>
```

### morph-words
Слово в заголовке перетекает в следующее, как капля. Мягче, чем
`rotating-words`: для креатива, красоты, ИИ. Ширина плавно подстраивается
под слово — ставь его в конец строки или отдельной строкой.

```html
<style>
  .fx-morph{display:inline-grid;justify-items:start;vertical-align:bottom}
  .fx-morph>span{grid-area:1/1;white-space:nowrap}
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="fx-morph-filter"><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"/></filter></svg>

<h2>Сайт для <span class="fx-morph" data-fx="morph" data-words="кофейни|клиники|школы|студии йоги">кофейни</span></h2>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="morph"]').forEach(function(el){
    var words=(el.dataset.words||'').split('|').filter(Boolean);
    if(words.length<2) return;
    el.setAttribute('aria-label',words.join(', '));
    el.textContent='';
    var spans=words.map(function(w,i){
      var s=document.createElement('span');s.textContent=w;s.setAttribute('aria-hidden','true');
      s.style.opacity=i?0:1;el.append(s);return s;
    });
    var cur=0,MORPH=1000,HOLD=+(el.dataset.hold||2200),start=0,visible=true;
    el.style.transition='width .6s cubic-bezier(.3,.7,.3,1)';
    el.style.width=spans[0].offsetWidth+'px';
    new IntersectionObserver(function(e){visible=e[0].isIntersecting}).observe(el);
    function set(s,v){s.style.opacity=Math.pow(v,.4);s.style.filter=v>=1?'none':'blur('+Math.min(8/Math.max(v,.001)-8,100)+'px)'}
    function frame(t){
      requestAnimationFrame(frame);
      if(!start) start=t;
      if(!visible) {start=t;return}
      var e=t-start;
      if(e<HOLD) return;
      var next=(cur+1)%spans.length,f=Math.min(1,(e-HOLD)/MORPH);
      if(el.style.filter!=='url(#fx-morph-filter)'){el.style.filter='url(#fx-morph-filter)';el.style.width=spans[next].offsetWidth+'px'}
      set(spans[cur],1-f);set(spans[next],f);
      if(f>=1){cur=next;start=t;el.style.filter='none'}
    }
    requestAnimationFrame(frame);
  });
})();
</script>
```

### sparkles
Вокруг слова вспыхивают и гаснут звёздочки. Для праздников, детских товаров,
косметики, подарков. Цвета — в `data-colors`, ставь на 1–3 слова.

```html
<style>
  .fx-sparkles{position:relative;display:inline-block}
  .fx-sparkles .fx-spark{position:absolute;width:var(--s);height:var(--s);pointer-events:none;background:var(--fx-sparkle,#ffcf40);
    clip-path:polygon(50% 0,61% 39%,100% 50%,61% 61%,50% 100%,39% 61%,0 50%,39% 39%);animation:fx-spark 1.5s ease-in-out forwards}
  @keyframes fx-spark{0%{transform:scale(0) rotate(0)}50%{transform:scale(1) rotate(90deg)}100%{transform:scale(0) rotate(180deg)}}
</style>

<h1>Праздник <span class="fx-sparkles" data-fx="sparkles" data-colors="#ffcf40,#ff7ab6">без хлопот</span></h1>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="sparkles"]').forEach(function(el){
    var colors=(el.dataset.colors||'').split(',').filter(Boolean),visible=false;
    new IntersectionObserver(function(e){visible=e[0].isIntersecting}).observe(el);
    setInterval(function(){
      if(!visible||document.hidden) return;
      var s=document.createElement('i'),size=8+Math.random()*12;
      s.className='fx-spark';s.setAttribute('aria-hidden','true');
      s.style.cssText='--s:'+size+'px;left:'+(Math.random()*110-5)+'%;top:'+(Math.random()*110-5)+'%;margin:'+(-size/2)+'px 0 0 '+(-size/2)+'px'+(colors.length?';background:'+colors[Math.random()*colors.length|0]:'');
      el.append(s);
      s.addEventListener('animationend',function(){s.remove()});
    },320);
  });
})();
</script>
```

### highlight
Пометка от руки, которая рисуется, когда текст появляется на экране:
`marker` — текстовыделитель (работает и на нескольких строках),
`underline` — двойное подчёркивание, `circle` — обводка. Подчёркивание и
обводка — для 1–3 слов или числа. Одна-две пометки на страницу.

```html
<style>
  .fx-mark{--fx-mark:#ffd84d;position:relative;background:none;color:inherit}
  .fx-mark[data-mode="marker"]{padding:0 .12em;border-radius:.2em .5em .3em .6em;
    background-image:linear-gradient(100deg,transparent .5%,color-mix(in srgb,var(--fx-mark) 90%,transparent) 2%,color-mix(in srgb,var(--fx-mark) 70%,transparent) 94%,transparent 99%);
    background-repeat:no-repeat;background-position:0 75%;background-size:0% 62%;-webkit-box-decoration-break:clone;box-decoration-break:clone;
    transition:background-size 1.1s cubic-bezier(.6,.05,.2,1)}
  .fx-mark[data-mode="marker"].on{background-size:100% 62%}
  .fx-mark[data-mode="underline"],.fx-mark[data-mode="circle"]{display:inline-block;white-space:nowrap}
  .fx-mark svg{position:absolute;pointer-events:none;overflow:visible;fill:none;stroke:var(--fx-mark);stroke-linecap:round;stroke-width:var(--fx-mark-w,3px)}
  .fx-mark svg path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset .9s cubic-bezier(.6,.05,.2,1)}
  .fx-mark svg path+path{transition-delay:.35s}
  .fx-mark.on svg path{stroke-dashoffset:0}
  @media (prefers-reduced-motion:reduce){.fx-mark,.fx-mark svg path{transition:none!important}}
</style>

<p>Первый урок <mark class="fx-mark" data-fx="highlight" data-mode="marker">бесплатно и без карты</mark>.</p>
<h2>Вы экономите <span class="fx-mark" data-fx="highlight" data-mode="circle" style="--fx-mark:#f4442e">40%</span></h2>
<h2>Работаем <span class="fx-mark" data-fx="highlight" data-mode="underline">без предоплаты</span></h2>

<script>
(function(){
  var NS='http://www.w3.org/2000/svg';
  function draw(el){
    var mode=el.dataset.mode;
    if(mode!=='underline'&&mode!=='circle') return;
    var w=el.offsetWidth,h=el.offsetHeight,px=mode==='circle'?w*.12+10:4,py=mode==='circle'?h*.28:8;
    var W=w+px*2,H=h+py*2,svg=el.querySelector(':scope>svg');
    if(!svg){svg=document.createElementNS(NS,'svg');svg.setAttribute('aria-hidden','true');el.append(svg)}
    svg.setAttribute('viewBox','0 0 '+W+' '+H);
    svg.style.cssText='left:'+(-px)+'px;top:'+(-py)+'px;width:'+W+'px;height:'+H+'px';
    var d;
    if(mode==='underline'){
      var y=py+h*.96;
      d=['M'+(px-2)+' '+y+' C'+(px+w*.3)+' '+(y-4)+' '+(px+w*.7)+' '+(y+3)+' '+(px+w+2)+' '+(y-2),
         'M'+(px+w*.08)+' '+(y+6)+' C'+(px+w*.4)+' '+(y+3)+' '+(px+w*.7)+' '+(y+8)+' '+(px+w*.95)+' '+(y+5)];
    }else{
      var cx=W/2,cy=H/2,rx=W/2-3,ry=H/2-3;
      d=['M'+(cx+rx*.3)+' '+(cy-ry*1.02)+' C'+(cx+rx*1.05)+' '+(cy-ry*.95)+' '+(cx+rx*1.08)+' '+(cy+ry*.7)+' '+(cx+rx*.2)+' '+(cy+ry)+
         ' C'+(cx-rx*.7)+' '+(cy+ry*1.1)+' '+(cx-rx*1.1)+' '+(cy+ry*.3)+' '+(cx-rx*.95)+' '+(cy-ry*.35)+
         ' C'+(cx-rx*.8)+' '+(cy-ry*1.05)+' '+(cx-rx*.1)+' '+(cy-ry*1.08)+' '+(cx+rx*.55)+' '+(cy-ry*.88)];
    }
    svg.innerHTML=d.map(function(p){return '<path pathLength="1" d="'+p+'"/>'}).join('');
  }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}});
  },{threshold:.8});
  var els=document.querySelectorAll('[data-fx="highlight"]');
  els.forEach(function(el){draw(el);io.observe(el)});
  addEventListener('resize',function(){els.forEach(draw)});
  if(document.fonts) document.fonts.ready.then(function(){els.forEach(draw)});
})();
</script>
```

### velocity-text
Две строки крупного текста бегут навстречу друг другу и разгоняются, когда
страницу прокручивают быстрее. Для еды, моды, спорта, событий — как
разделитель между блоками. Текст держи коротким и без точек.

```html
<style>
  .fx-velocity{overflow:hidden;white-space:nowrap}
  .fx-velocity-row{display:flex;width:max-content;will-change:transform}
  .fx-velocity-row>span{padding-right:.5em}
</style>

<div class="fx-velocity" data-fx="velocity" role="img" aria-label="Свежий хлеб каждое утро. Печём с шести утра">
  <div class="fx-velocity-row" aria-hidden="true"><span>Свежий хлеб каждое утро ✦</span></div>
  <div class="fx-velocity-row" data-dir="-1" aria-hidden="true"><span>Печём с шести утра ✦</span></div>
</div>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="velocity"]').forEach(function(box){
    var rows=[].slice.call(box.querySelectorAll('.fx-velocity-row')).map(function(row){
      var unit=row.firstElementChild,w=unit.offsetWidth||1;
      while(row.scrollWidth<box.clientWidth+w*2) row.append(unit.cloneNode(true));
      return {row:row,w:w,x:0,dir:+(row.dataset.dir||1)};
    });
    var speed=+(box.dataset.speed||60),lastY=scrollY,lastT=performance.now(),boost=1,sign=1,visible=true;
    new IntersectionObserver(function(e){visible=e[0].isIntersecting}).observe(box);
    function tick(t){
      requestAnimationFrame(tick);
      var dt=Math.min(.05,(t-lastT)/1000);lastT=t;
      var v=(scrollY-lastY)/Math.max(dt,.001);lastY=scrollY;
      if(v) sign=v>0?1:-1;
      boost+=((1+Math.min(Math.abs(v)/300,5))-boost)*.1;
      if(!visible) return;
      rows.forEach(function(r){
        r.x-=r.dir*sign*speed*boost*dt;
        r.x=((r.x%r.w)-r.w)%r.w;
        r.row.style.transform='translateX('+r.x+'px)';
      });
    }
    requestAnimationFrame(tick);
  });
})();
</script>
```

---

## Фоны

Все фоны кладутся в секцию с `position: relative; overflow: hidden`. `place-self: stretch` в их стилях не убирай: без него в секции-гриде с `place-items: center` фон ужимается до узкой полосы. Canvas-фоны
сами подстраиваются под размер секции, засыпают, когда секция вне экрана,
и рисуют один неподвижный кадр в режиме уменьшенного движения.

Общий CSS для canvas-фонов — один раз на страницу:

```html
<style>
  .fx-bg{position:absolute;inset:0;z-index:0;pointer-events:none;place-self:stretch}
  .fx-bg canvas{display:block;width:100%;height:100%}
</style>
```

### shape-waves
Поле мелких фигур, по которому катятся волны: фигуры растут, светлеют и
покачиваются. `data-shape`: `circle`, `square` или `triangle`.

```html
<section style="position:relative;overflow:hidden;min-height:420px;background:#0e0b22">
  <div class="fx-bg" data-fx="shape-waves" data-color="#8b7bff" data-shape="circle" data-gap="26"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-fx="shape-waves"]').forEach(function(host){
    var c=document.createElement('canvas'),ctx=c.getContext('2d');host.appendChild(c);
    var color=host.dataset.color||'#8b7bff',shape=host.dataset.shape||'circle';
    var gap=+(host.dataset.gap||26),amp=+(host.dataset.amp||12),speed=+(host.dataset.speed||1);
    var w=0,h=0,t=0,raf=0;
    function size(){
      var dpr=Math.min(2,devicePixelRatio||1);w=host.clientWidth;h=host.clientHeight;
      c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw();
    }
    function draw(){
      ctx.clearRect(0,0,w,h);ctx.fillStyle=color;
      for(var y=gap/2;y<h+gap;y+=gap)for(var x=gap/2;x<w+gap;x+=gap){
        var s=(Math.sin(x*.012+t)+Math.sin(y*.018-t*.8)*.6+1.6)/3.2;
        var r=1+s*gap*.22,cy=y+Math.sin(x*.01+y*.004+t*1.2)*amp;
        ctx.globalAlpha=.12+s*.78;ctx.beginPath();
        if(shape==='square')ctx.rect(x-r,cy-r,r*2,r*2);
        else if(shape==='triangle'){ctx.moveTo(x,cy-r);ctx.lineTo(x+r,cy+r);ctx.lineTo(x-r,cy+r);}
        else ctx.arc(x,cy,r,0,6.2832);
        ctx.fill();
      }
      ctx.globalAlpha=1;
    }
    function loop(){t+=.012*speed;draw();raf=requestAnimationFrame(loop)}
    new ResizeObserver(size).observe(host);
    if(reduce) return;
    new IntersectionObserver(function(e){
      if(e[0].isIntersecting&&!raf)raf=requestAnimationFrame(loop);
      if(!e[0].isIntersecting&&raf){cancelAnimationFrame(raf);raf=0}
    }).observe(host);
  });
})();
</script>
```

### line-waves
Пучок тонких линий плавно течёт через секцию, цвет переходит от первого ко
второму. Спокойный фон для финансов, аналитики, ИИ.

```html
<section style="position:relative;overflow:hidden;min-height:420px;background:#07121f">
  <div class="fx-bg" data-fx="line-waves" data-colors="#2dd4bf,#6366f1" data-lines="28"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hex=function(v){v=v.replace('#','');return[0,2,4].map(function(i){return parseInt(v.slice(i,i+2),16)})};
  document.querySelectorAll('[data-fx="line-waves"]').forEach(function(host){
    var c=document.createElement('canvas'),ctx=c.getContext('2d');host.appendChild(c);
    var cols=(host.dataset.colors||'#2dd4bf,#6366f1').split(',').map(hex);
    var n=+(host.dataset.lines||28),w=0,h=0,t=0,raf=0;
    function size(){
      var dpr=Math.min(2,devicePixelRatio||1);w=host.clientWidth;h=host.clientHeight;
      c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw();
    }
    function draw(){
      ctx.clearRect(0,0,w,h);ctx.lineWidth=1.2;
      for(var i=0;i<n;i++){
        var p=i/(n-1),a=cols[0],b=cols[1];
        ctx.strokeStyle='rgb('+Math.round(a[0]+(b[0]-a[0])*p)+','+Math.round(a[1]+(b[1]-a[1])*p)+','+Math.round(a[2]+(b[2]-a[2])*p)+')';
        ctx.globalAlpha=.12+.55*(1-Math.abs(p-.5)*2);
        ctx.beginPath();
        for(var x=0;x<=w+8;x+=8){
          var y=h*.55+Math.sin(x*.0035+t+p*2.4)*h*.16*(.5+p)+Math.sin(x*.011-t*.7+p*5)*14;
          x?ctx.lineTo(x,y):ctx.moveTo(x,y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha=1;
    }
    function loop(){t+=.006*(+(host.dataset.speed||1));draw();raf=requestAnimationFrame(loop)}
    new ResizeObserver(size).observe(host);
    if(reduce) return;
    new IntersectionObserver(function(e){
      if(e[0].isIntersecting&&!raf)raf=requestAnimationFrame(loop);
      if(!e[0].isIntersecting&&raf){cancelAnimationFrame(raf);raf=0}
    }).observe(host);
  });
})();
</script>
```

### dot-grid
Сетка точек: рядом с курсором точки крупнеют и окрашиваются в акцент, в
покое по сетке медленно проходит волна. Для SaaS и инструментов.

```html
<section style="position:relative;overflow:hidden;min-height:420px;background:#0b0d12">
  <div class="fx-bg" data-fx="dot-grid" data-color="#3b4254" data-accent="#7dd3fc" data-gap="22"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-fx="dot-grid"]').forEach(function(host){
    var c=document.createElement('canvas'),ctx=c.getContext('2d');host.appendChild(c);
    var base=host.dataset.color||'#3b4254',accent=host.dataset.accent||'#7dd3fc',gap=+(host.dataset.gap||22);
    var w=0,h=0,t=0,raf=0,mx=-999,my=-999;
    function size(){
      var dpr=Math.min(2,devicePixelRatio||1);w=host.clientWidth;h=host.clientHeight;
      c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);draw();
    }
    function draw(){
      ctx.clearRect(0,0,w,h);
      for(var y=gap/2;y<h;y+=gap)for(var x=gap/2;x<w;x+=gap){
        var d=Math.hypot(x-mx,y-my),near=Math.max(0,1-d/140);
        var wave=(Math.sin(x*.02+y*.01-t)+1)/2;
        ctx.globalAlpha=.35+near*.65;
        ctx.fillStyle=near>.05?accent:base;
        ctx.beginPath();ctx.arc(x,y,1.1+near*2.6+wave*.5,0,6.2832);ctx.fill();
      }
      ctx.globalAlpha=1;
    }
    function loop(){t+=.02;draw();raf=requestAnimationFrame(loop)}
    new ResizeObserver(size).observe(host);
    if(reduce) return;
    addEventListener('pointermove',function(e){var r=host.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top},{passive:true});
    new IntersectionObserver(function(e){
      if(e[0].isIntersecting&&!raf)raf=requestAnimationFrame(loop);
      if(!e[0].isIntersecting&&raf){cancelAnimationFrame(raf);raf=0}
    }).observe(host);
  });
})();
</script>
```

### particles
Созвездие: точки медленно дрейфуют, близкие соединяются линиями, курсор
слегка притягивает. Для ИИ, науки, сетей и сообществ. `data-colors` — несколько
цветов через запятую: точки получат их по очереди, линии — первый.

```html
<section style="position:relative;overflow:hidden;min-height:420px;background:#050814">
  <div class="fx-bg" data-fx="particles" data-colors="#a5b4fc,#ffb829" data-density="1"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-fx="particles"]').forEach(function(host){
    var c=document.createElement('canvas'),ctx=c.getContext('2d');host.appendChild(c);
    var colors=(host.dataset.colors||host.dataset.color||'#a5b4fc').split(','),density=+(host.dataset.density||1);
    var w=0,h=0,pts=[],raf=0,mx=-999,my=-999;
    function size(){
      var dpr=Math.min(2,devicePixelRatio||1);w=host.clientWidth;h=host.clientHeight;
      c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      var n=Math.round(w*h/9000*density);
      pts=[];for(var i=0;i<n;i++)pts.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,c:colors[i%colors.length]});
      draw();
    }
    function draw(){
      ctx.clearRect(0,0,w,h);ctx.strokeStyle=colors[0];
      for(var i=0;i<pts.length;i++){
        var a=pts[i];
        for(var j=i+1;j<pts.length;j++){
          var b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
          if(d<110){ctx.globalAlpha=(1-d/110)*.35;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
        }
        ctx.globalAlpha=.85;ctx.fillStyle=a.c;ctx.beginPath();ctx.arc(a.x,a.y,1.6,0,6.2832);ctx.fill();
      }
      ctx.globalAlpha=1;
    }
    function step(){
      pts.forEach(function(p){
        var d=Math.hypot(p.x-mx,p.y-my);
        if(d<160){p.vx+=(mx-p.x)/d*.012;p.vy+=(my-p.y)/d*.012;}
        p.vx*=.99;p.vy*=.99;p.x+=p.vx;p.y+=p.vy;
        if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
      });
      draw();raf=requestAnimationFrame(step);
    }
    new ResizeObserver(size).observe(host);
    if(reduce) return;
    addEventListener('pointermove',function(e){var r=host.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top},{passive:true});
    new IntersectionObserver(function(e){
      if(e[0].isIntersecting&&!raf)raf=requestAnimationFrame(step);
      if(!e[0].isIntersecting&&raf){cancelAnimationFrame(raf);raf=0}
    }).observe(host);
  });
})();
</script>
```

### aurora
Три размытых пятна цвета медленно дрейфуют. Мягкий фон для медитации,
сна, ИИ. Не ставь по умолчанию: цветные разводы — самый затёртый приём.

```html
<style>
  .fx-aurora{position:absolute;inset:-20%;z-index:0;pointer-events:none;place-self:stretch;filter:blur(70px);opacity:.75}
  .fx-aurora i{position:absolute;width:48%;aspect-ratio:1;border-radius:50%}
  .fx-aurora i:nth-child(1){background:var(--fx-a1,#4f7cff);left:4%;top:8%;animation:fx-drift-a 19s ease-in-out infinite alternate}
  .fx-aurora i:nth-child(2){background:var(--fx-a2,#b44bff);right:6%;top:18%;animation:fx-drift-b 23s ease-in-out infinite alternate}
  .fx-aurora i:nth-child(3){background:var(--fx-a3,#20c9a6);left:28%;bottom:0;animation:fx-drift-c 27s ease-in-out infinite alternate}
  @keyframes fx-drift-a{to{transform:translate(18%,22%) scale(1.15)}}
  @keyframes fx-drift-b{to{transform:translate(-22%,18%) scale(.9)}}
  @keyframes fx-drift-c{to{transform:translate(12%,-24%) scale(1.1)}}
  @media (prefers-reduced-motion:reduce){.fx-aurora i{animation:none}}
</style>

<section style="position:relative;overflow:hidden;min-height:420px;background:#0a0a18">
  <div class="fx-aurora" aria-hidden="true"><i></i><i></i><i></i></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>
```

### grain
Плёночное зерно поверх секции или всей страницы. Для фотографии, крафта,
моды, винтажа. На светлом фоне поставь `opacity` около .06, на тёмном — .1.

```html
<style>
  .fx-grain{position:absolute;inset:-50%;z-index:2;pointer-events:none;place-self:stretch;opacity:.09;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
    animation:fx-grain 1s steps(6) infinite}
  @keyframes fx-grain{0%{transform:translate(0,0)}20%{transform:translate(-5%,4%)}40%{transform:translate(4%,-3%)}60%{transform:translate(-3%,-5%)}80%{transform:translate(5%,3%)}100%{transform:translate(0,0)}}
  @media (prefers-reduced-motion:reduce){.fx-grain{animation:none}}
</style>

<section style="position:relative;overflow:hidden">
  <div class="fx-grain" aria-hidden="true"></div>
  …
</section>
```

### beams
Тонкие вертикальные линии, по которым падают световые капли. Для
инфраструктуры, разработчиков, серверов. Позиции и задержки — в `--x`, `--d`.

```html
<style>
  .fx-beams{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;place-self:stretch}
  .fx-beams i{position:absolute;top:0;bottom:0;left:var(--x);width:1px;background:linear-gradient(transparent,var(--fx-line,rgba(255,255,255,.08)) 15%,var(--fx-line,rgba(255,255,255,.08)) 85%,transparent)}
  .fx-beams i::after{content:"";position:absolute;left:-1px;top:-140px;width:3px;height:140px;border-radius:2px;background:linear-gradient(transparent,var(--fx-beam,#7aa2ff));animation:fx-fall var(--t,6s) linear infinite;animation-delay:var(--d)}
  @keyframes fx-fall{to{top:100%}}
  @media (prefers-reduced-motion:reduce){.fx-beams i::after{animation:none;top:35%}}
</style>

<div class="fx-beams" aria-hidden="true">
  <i style="--x:8%;--d:-1s"></i><i style="--x:21%;--d:-4s;--t:8s"></i><i style="--x:36%;--d:-2.5s"></i>
  <i style="--x:52%;--d:-5s;--t:7s"></i><i style="--x:67%;--d:-.5s"></i><i style="--x:81%;--d:-3.2s;--t:9s"></i><i style="--x:93%;--d:-6s"></i>
</div>
```

### grid-floor
Неоновый пол уходит в перспективу и едет навстречу. Для игр, киберспорта,
конференций, электронной музыки.

```html
<style>
  .fx-grid-floor{position:absolute;left:0;right:0;bottom:0;height:55%;z-index:0;perspective:420px;overflow:hidden;pointer-events:none;place-self:stretch;
    -webkit-mask-image:linear-gradient(transparent,#000 45%);mask-image:linear-gradient(transparent,#000 45%)}
  .fx-grid-floor div{position:absolute;inset:-100% -60% 0;transform:rotateX(64deg);transform-origin:bottom;
    background-image:linear-gradient(var(--fx-grid,rgba(140,120,255,.55)) 1px,transparent 1px),linear-gradient(90deg,var(--fx-grid,rgba(140,120,255,.55)) 1px,transparent 1px);
    background-size:52px 52px;animation:fx-floor 1.6s linear infinite}
  @keyframes fx-floor{to{background-position:0 52px}}
  @media (prefers-reduced-motion:reduce){.fx-grid-floor div{animation:none}}
</style>

<div class="fx-grid-floor" aria-hidden="true"><div></div></div>
```

### meteors
Редкие метеоры с хвостом пролетают по диагонали. Для тёмных страниц про
космос, ночь, запуски, ИИ. Количество — `data-count`, цвет — `--fx-meteor`.

```html
<style>
  .fx-meteors{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;place-self:stretch}
  .fx-meteors i{position:absolute;top:var(--y);left:var(--x);width:2px;height:2px;border-radius:50%;background:var(--fx-meteor,#cbd5ff);
    transform:rotate(215deg);opacity:0;animation:fx-meteor var(--t,6s) linear var(--d,0s) infinite}
  .fx-meteors i::after{content:"";position:absolute;top:50%;width:var(--l,90px);height:1px;transform:translateY(-50%);background:linear-gradient(90deg,var(--fx-meteor,#cbd5ff),transparent)}
  @keyframes fx-meteor{0%{transform:rotate(215deg) translateX(0);opacity:0}6%,70%{opacity:1}100%{transform:rotate(215deg) translateX(-900px);opacity:0}}
  @media (prefers-reduced-motion:reduce){.fx-meteors{display:none}}
</style>

<div class="fx-meteors" data-fx="meteors" data-count="16" aria-hidden="true"></div>

<script>
(function(){
  document.querySelectorAll('[data-fx="meteors"]').forEach(function(el){
    for(var i=0,n=+el.dataset.count||16;i<n;i++){
      var m=document.createElement('i');
      m.style.cssText='--x:'+(Math.random()*110).toFixed(1)+'%;--y:'+(Math.random()*40-10).toFixed(1)+'%;--d:'+(-Math.random()*8).toFixed(2)+'s;--t:'+(4+Math.random()*6).toFixed(2)+'s;--l:'+(60+Math.random()*80|0)+'px';
      el.append(m);
    }
  });
})();
</script>
```

### flicker-grid
Сетка мелких квадратов, которые тихо мерцают, как пиксели экрана. Для
технологий, данных, безопасности. Края удобно растворить маской:
`style="mask-image:radial-gradient(circle at 50% 40%,#000,transparent 75%)"`.
`data-size` и `data-gap` — размер квадрата и шаг, `data-max` — яркость.

```html
<div class="fx-bg" data-fx="flicker-grid" data-color="#6d5dfc" data-size="4" data-gap="6" data-max="0.35" aria-hidden="true"></div>

<script>
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-fx="flicker-grid"]').forEach(function(host){
    var c=document.createElement('canvas'),ctx=c.getContext('2d');host.append(c);
    var size=+host.dataset.size||4,gap=+host.dataset.gap||6,max=+host.dataset.max||.3,chance=+host.dataset.chance||.6;
    var color=host.dataset.color||'#6d5dfc',cols=0,rows=0,cells=new Float32Array(0),dpr=Math.min(2,devicePixelRatio||1),visible=true,last=0;
    function draw(){
      ctx.clearRect(0,0,c.width,c.height);ctx.fillStyle=color;
      for(var y=0;y<rows;y++)for(var x=0;x<cols;x++){ctx.globalAlpha=cells[y*cols+x];ctx.fillRect(x*(size+gap)*dpr,y*(size+gap)*dpr,size*dpr,size*dpr)}
      ctx.globalAlpha=1;
    }
    function resize(){
      var w=host.clientWidth,h=host.clientHeight;c.width=w*dpr;c.height=h*dpr;
      cols=Math.ceil(w/(size+gap));rows=Math.ceil(h/(size+gap));cells=new Float32Array(cols*rows);
      for(var i=0;i<cells.length;i++) cells[i]=Math.random()*max;
      draw();
    }
    function tick(t){
      requestAnimationFrame(tick);
      if(!visible||t-last<60) return;
      var dt=Math.min(.2,(t-last)/1000);last=t;
      for(var i=0;i<cells.length;i++) if(Math.random()<chance*dt) cells[i]=Math.random()*max;
      draw();
    }
    new ResizeObserver(resize).observe(host);
    new IntersectionObserver(function(e){visible=e[0].isIntersecting}).observe(host);
    if(!reduce) requestAnimationFrame(tick);
  });
})();
</script>
```

### ripple-rings
Концентрические круги мягко дышат вокруг центра секции. Под логотип,
иконку приложения, кнопку записи: связь, сигнал, спокойствие. Только CSS.

```html
<style>
  .fx-rings{position:absolute;inset:0;display:grid;place-items:center;overflow:hidden;pointer-events:none;z-index:0;place-self:stretch;
    -webkit-mask-image:radial-gradient(circle at center,#000 20%,transparent 70%);mask-image:radial-gradient(circle at center,#000 20%,transparent 70%)}
  .fx-rings i{grid-area:1/1;width:calc(var(--fx-ring,210px) + var(--i)*110px);aspect-ratio:1;border-radius:50%;
    border:1px solid var(--fx-ring-line,rgba(120,110,255,.35));background:var(--fx-ring-fill,rgba(120,110,255,.05));
    opacity:calc(1 - var(--i)*.12);animation:fx-ring 3.4s ease-in-out calc(var(--i)*.12s) infinite}
  @keyframes fx-ring{50%{transform:scale(.94)}}
  @media (prefers-reduced-motion:reduce){.fx-rings i{animation:none}}
</style>

<div class="fx-rings" aria-hidden="true"><i style="--i:0"></i><i style="--i:1"></i><i style="--i:2"></i><i style="--i:3"></i><i style="--i:4"></i><i style="--i:5"></i><i style="--i:6"></i></div>
```

---

## Шейдеры

Живые WebGL-фоны на основе Paper Shaders (лицензия Apache-2.0). В отличие от
остальных эффектов, код шейдеров лежит в отдельном файле `landly-shaders.js` —
он уже скопирован рядом с `index.html`, подключи его одной строкой:
`<script src="landly-shaders.js" defer></script>` перед `</body>`. Сеть не нужна.

Шейдер — громкий эффект: максимум один на страницу, и тогда без других живых
фонов. Контейнеру задай фон из палитры (`background`) — он виден, пока шейдер
грузится, и остаётся, если WebGL недоступен. Цвета — только из палитры
страницы. В режиме уменьшенного движения шейдер рисует неподвижный кадр.

### shader-mesh
Перетекающие цветовые пятна, как жидкая краска. Спокойный и дорогой фон для
первого экрана: ИИ, финтех, мода, креативные студии. 2–5 цветов.

```html
<style>
  .fx-shader{position:absolute;inset:0;z-index:0;pointer-events:none;place-self:stretch}
</style>

<section style="position:relative;overflow:hidden;min-height:560px;background:#241d9a">
  <div class="fx-shader" data-shader="mesh-gradient" data-colors="#e0eaff,#241d9a,#f75092,#9f50d3" data-distortion="0.8" data-swirl="0.1" data-speed="0.5" aria-hidden="true"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>
<script src="landly-shaders.js" defer></script>
```

### shader-grain
Мягкая форма из градиента с плёночным зерном. `data-shape`: `corners`,
`wave`, `truchet`, `ripple`, `sphere`. `data-back` — цвет фона.

```html
<style>
  .fx-shader{position:absolute;inset:0;z-index:0;pointer-events:none;place-self:stretch}
</style>

<section style="position:relative;overflow:hidden;min-height:560px;background:#000">
  <div class="fx-shader" data-shader="grain-gradient" data-back="#000000" data-colors="#7300ff,#eba8ff,#00bfff" data-shape="wave" data-softness="0.5" data-intensity="0.5" data-noise="0.25" aria-hidden="true"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>
<script src="landly-shaders.js" defer></script>
```

### shader-dither
Пиксельный дизеринг в два цвета — как экран старого компьютера. `data-shape`:
`sphere`, `simplex`, `warp`, `dots`, `wave`, `ripple`, `swirl`; `data-type`:
`4x4`, `8x8`, `2x2`, `random`; `data-size` — размер пикселя.

```html
<style>
  .fx-shader{position:absolute;inset:0;z-index:0;pointer-events:none;place-self:stretch}
</style>

<section style="position:relative;overflow:hidden;min-height:560px;background:#000">
  <div class="fx-shader" data-shader="dithering" data-back="#000000" data-front="#00b2ff" data-shape="warp" data-type="4x4" data-size="3" aria-hidden="true"></div>
  <div style="position:relative;z-index:1">Контент секции</div>
</section>
<script src="landly-shaders.js" defer></script>
```

---

## Блоки

### marquee
Бесконечная лента: логотипы клиентов, партнёры, короткие анонсы. Скрипт
удваивает содержимое, чтобы шов не был виден. Наведение ставит на паузу.

```html
<style>
  .fx-marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
  .fx-marquee-track{display:flex;align-items:center;width:max-content;animation:fx-marquee var(--fx-speed,32s) linear infinite}
  .fx-marquee-track>*{margin-right:var(--fx-gap,56px);flex-shrink:0}
  .fx-marquee:hover .fx-marquee-track{animation-play-state:paused}
  @keyframes fx-marquee{to{transform:translateX(-50%)}}
  @media (prefers-reduced-motion:reduce){.fx-marquee{-webkit-mask-image:none;mask-image:none}.fx-marquee-track{animation:none;flex-wrap:wrap;justify-content:center;row-gap:14px;width:auto}}
</style>

<div class="fx-marquee" data-fx="marquee">
  <div class="fx-marquee-track"><span>Орбита</span><span>Меридиан</span><span>Самокат</span><span>Ромб</span></div>
</div>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="marquee"] .fx-marquee-track').forEach(function(track){
    Array.from(track.children).forEach(function(item){
      var copy=item.cloneNode(true);copy.setAttribute('aria-hidden','true');track.appendChild(copy);
    });
  });
})();
</script>
```

### tilt-card
Карточка наклоняется за курсором, по ней скользит блик. На сенсорных
экранах эффект выключается сам. Эффект задаёт элементу свои `position` и
`transform`: если у карточки уже есть поворот или абсолютное положение,
вешай `fx-tilt` на внутреннюю обёртку, иначе раскладка сломается.

```html
<style>
  .fx-tilt{position:relative;transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .5s cubic-bezier(.2,.75,.25,1);will-change:transform}
  .fx-tilt.is-active{transition-duration:.08s}
  .fx-tilt::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .3s;
    background:radial-gradient(circle at var(--gx,50%) var(--gy,50%),rgba(255,255,255,.28),transparent 55%)}
  .fx-tilt.is-active::after{opacity:1}
</style>

<article class="fx-tilt" data-fx="tilt">…</article>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
  document.querySelectorAll('[data-fx="tilt"]').forEach(function(el){
    var max=+(el.dataset.max||10);
    el.addEventListener('pointermove',function(e){
      var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      el.classList.add('is-active');
      el.style.setProperty('--ry',((x-.5)*max*2).toFixed(2)+'deg');
      el.style.setProperty('--rx',((.5-y)*max*2).toFixed(2)+'deg');
      el.style.setProperty('--gx',x*100+'%');el.style.setProperty('--gy',y*100+'%');
    });
    el.addEventListener('pointerleave',function(){
      el.classList.remove('is-active');el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg');
    });
  });
})();
</script>
```

### spotlight-card
Под курсором по карточке ползёт мягкое световое пятно. Лучше всего в тёмных
темах: фичи, тарифы, бенто-сетки.

```html
<style>
  .fx-spot{position:relative;isolation:isolate;overflow:hidden}
  .fx-spot::before{content:"";position:absolute;inset:0;z-index:-1;opacity:0;transition:opacity .3s;
    background:radial-gradient(380px circle at var(--mx,50%) var(--my,50%),var(--fx-spot,rgba(255,255,255,.12)),transparent 65%)}
  .fx-spot:hover::before{opacity:1}
</style>

<article class="fx-spot" data-fx="spotlight">…</article>

<script>
(function(){
  document.querySelectorAll('[data-fx="spotlight"]').forEach(function(el){
    el.addEventListener('pointermove',function(e){
      var r=el.getBoundingClientRect();
      el.style.setProperty('--mx',e.clientX-r.left+'px');el.style.setProperty('--my',e.clientY-r.top+'px');
    });
  });
})();
</script>
```

### border-glow
По рамке карточки бежит светящийся отрезок. Для одной главной карточки —
рекомендованного тарифа или ключевого предложения. Не больше одной на экран.

```html
<style>
  @property --fx-angle{syntax:'<angle>';initial-value:0deg;inherits:false}
  .fx-glow-border{position:relative;isolation:isolate;border-radius:18px}
  .fx-glow-border::before{content:"";position:absolute;inset:-1px;z-index:-1;border-radius:inherit;padding:1.5px;
    background:conic-gradient(from var(--fx-angle),transparent 65%,var(--fx-glow,#8b7bff) 85%,transparent);
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;
    animation:fx-border-spin 4s linear infinite}
  @keyframes fx-border-spin{to{--fx-angle:360deg}}
  @media (prefers-reduced-motion:reduce){.fx-glow-border::before{animation:none;--fx-angle:200deg}}
</style>

<article class="fx-glow-border" style="background:#0f0f18">…</article>
```

### scroll-reveal
Элементы списка появляются по очереди, когда блок доходит до экрана. Только
для сеток и списков. То, что уже видно при загрузке, не прячется, а без
скрипта всё видно сразу.

```html
<style>
  [data-fx="reveal"].fx-armed>*{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.75,.25,1);transition-delay:calc(var(--i,0)*90ms)}
  [data-fx="reveal"].fx-armed.fx-in>*{opacity:1;transform:none}
</style>

<ul data-fx="reveal">
  <li>Первый пункт</li><li>Второй пункт</li><li>Третий пункт</li>
</ul>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="reveal"]').forEach(function(el){
    if(el.getBoundingClientRect().top<innerHeight*.9) return;
    Array.from(el.children).forEach(function(c,i){c.style.setProperty('--i',i)});
    el.classList.add('fx-armed');
    new IntersectionObserver(function(entries,io){
      if(entries[0].isIntersecting){el.classList.add('fx-in');io.disconnect();}
    },{threshold:.15}).observe(el);
  });
})();
</script>
```

### scroll-stack
Карточки при прокрутке прилипают к верху и ложатся стопкой, каждая чуть ниже
предыдущей. Только CSS. Карточкам нужен непрозрачный фон.

```html
<style>
  .fx-stack>*{position:sticky;top:calc(var(--fx-top,88px) + var(--i,0)*18px)}
  .fx-stack>*+*{margin-top:48px}
</style>

<div class="fx-stack">
  <article style="--i:0">Шаг первый</article>
  <article style="--i:1">Шаг второй</article>
  <article style="--i:2">Шаг третий</article>
</div>
```

### orbit
Иконки медленно вращаются вокруг центрального знака и остаются
вертикальными. Для интеграций, экосистемы, команды вокруг продукта.

```html
<style>
  .fx-orbit{--fx-size:320px;position:relative;width:var(--fx-size);max-width:100%;aspect-ratio:1;display:grid;place-items:center}
  .fx-orbit ul{position:absolute;inset:0;margin:0;padding:0;list-style:none;border:1px dashed currentColor;border-radius:50%;opacity:.9;animation:fx-orbit 40s linear infinite}
  .fx-orbit li{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(var(--a)) translateX(calc(var(--fx-size)/2)) rotate(calc(-1*var(--a)))}
  .fx-orbit li>*{display:block;animation:fx-orbit 40s linear infinite reverse}
  @keyframes fx-orbit{to{transform:rotate(360deg)}}
  @media (prefers-reduced-motion:reduce){.fx-orbit ul,.fx-orbit li>*{animation:none}}
</style>

<div class="fx-orbit">
  <strong>Ядро</strong>
  <ul>
    <li style="--a:0deg"><span>1С</span></li><li style="--a:72deg"><span>CRM</span></li>
    <li style="--a:144deg"><span>Почта</span></li><li style="--a:216deg"><span>Касса</span></li><li style="--a:288deg"><span>Склад</span></li>
  </ul>
</div>
```

### accordion-gallery
Полосы-фотографии: при наведении одна раскрывается, соседние сжимаются.
Для туров, направлений, портфолио. Без наведения раскрыта первая.

```html
<style>
  .fx-accordion{display:flex;gap:10px;height:440px}
  .fx-accordion>*{position:relative;flex:1;min-width:0;margin:0;overflow:hidden;border-radius:18px;background:#222 center/cover;transition:flex .6s cubic-bezier(.2,.75,.25,1)}
  .fx-accordion:not(:hover)>*:first-child,.fx-accordion>*:hover,.fx-accordion>*:focus-within{flex:4}
  .fx-accordion figcaption{position:absolute;left:18px;right:18px;bottom:16px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  @media (max-width:700px){.fx-accordion{flex-direction:column;height:560px}}
</style>

<div class="fx-accordion">
  <figure style="background-image:url(photos/one.jpg)"><figcaption>Исландия</figcaption></figure>
  <figure style="background-image:url(photos/two.jpg)"><figcaption>Португалия</figcaption></figure>
  <figure style="background-image:url(photos/three.jpg)"><figcaption>Марокко</figcaption></figure>
</div>
```

### globe
Вращающийся точечный глобус с метками городов и дугами маршрутов (WebGL,
на основе COBE, MIT). Его можно крутить мышью или пальцем. Для доставки,
логистики, туризма, международных сервисов — как главный образ первого экрана.
Код лежит в файле `landly-globe.js` рядом со страницей. Метки —
`data-markers="широта,долгота;…"`, дуги — `data-arcs="шир,долг>шир,долг;…"`.
Цвета — `data-base` (суша), `data-marker`, `data-glow` (свечение края),
`data-dark="1"` — для тёмного фона. Контейнеру нужен размер: ширина и
`aspect-ratio:1`.

```html
<style>
  .fx-globe{width:min(560px,100%);aspect-ratio:1;margin-inline:auto}
</style>

<div class="fx-globe" data-globe data-base="#ffffff" data-marker="#f4442e" data-glow="#e8ecff" data-dark="0" data-markers="55.75,37.62;59.93,30.34;56.84,60.6;43.24,76.95" data-arcs="55.75,37.62>56.84,60.6;55.75,37.62>43.24,76.95" data-phi="4.2" data-theta="0.3" aria-hidden="true"></div>
<script src="landly-globe.js" defer></script>
```

### beam-network
Световые импульсы бегут по линиям между иконками: данные текут из сервисов
в продукт. Для интеграций, автоматизации, «всё в одном месте». Расставь узлы
своей разметкой (сетка или флекс) с `data-node="имя"`, а связи перечисли в
`data-links="откуда>куда, …"`. `data-curve` — изгиб линий в пикселях.

```html
<style>
  .fx-beam-net{position:relative}
  .fx-beam-net>svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:0}
  .fx-beam-net [data-node]{position:relative;z-index:1}
  .fx-beam-net .fx-beam-base{fill:none;stroke:var(--fx-beam-base,rgba(128,128,160,.25));stroke-width:2}
  .fx-beam-net .fx-beam-run{fill:none;stroke:var(--fx-beam,#6d5dfc);stroke-width:2.5;stroke-linecap:round;stroke-dasharray:18 200;stroke-dashoffset:18;
    filter:drop-shadow(0 0 4px var(--fx-beam,#6d5dfc));animation:fx-beam 2.6s cubic-bezier(.5,0,.5,1) var(--d,0s) infinite}
  @keyframes fx-beam{to{stroke-dashoffset:-100}}
  @media (prefers-reduced-motion:reduce){.fx-beam-net .fx-beam-run{display:none}}
</style>

<div class="fx-beam-net" data-fx="beams" data-links="crm>hub, mail>hub, shop>hub, hub>team" data-curve="30"
     style="display:grid;grid-template-columns:1fr 1fr 1fr;align-items:center;gap:40px">
  <div style="display:grid;gap:28px">
    <span data-node="crm">CRM</span>
    <span data-node="mail">Почта</span>
    <span data-node="shop">Магазин</span>
  </div>
  <strong data-node="hub">Продукт</strong>
  <span data-node="team">Команда</span>
</div>

<script>
(function(){
  var NS='http://www.w3.org/2000/svg';
  document.querySelectorAll('[data-fx="beams"]').forEach(function(net){
    var svg=document.createElementNS(NS,'svg');svg.setAttribute('aria-hidden','true');net.prepend(svg);
    var links=(net.dataset.links||'').split(',').map(function(l){return l.trim().split('>')}).filter(function(l){return l.length===2});
    function center(name,box){
      var n=net.querySelector('[data-node="'+name.trim()+'"]');
      if(!n) return null;
      var r=n.getBoundingClientRect();
      return {x:r.left+r.width/2-box.left,y:r.top+r.height/2-box.top};
    }
    function build(){
      var box=net.getBoundingClientRect(),curve=+(net.dataset.curve||0),html='';
      links.forEach(function(l,i){
        var a=center(l[0],box),b=center(l[1],box);
        if(!a||!b) return;
        var d='M'+a.x+' '+a.y+' Q'+((a.x+b.x)/2)+' '+((a.y+b.y)/2-curve)+' '+b.x+' '+b.y;
        html+='<path class="fx-beam-base" d="'+d+'"/><path class="fx-beam-run" pathLength="100" style="--d:'+(i*.45).toFixed(2)+'s" d="'+d+'"/>';
      });
      svg.innerHTML=html;
    }
    new ResizeObserver(build).observe(net);
    if(document.fonts) document.fonts.ready.then(build);
  });
})();
</script>
```

### notify-list
Уведомления по одному появляются сверху и сдвигают остальные вниз — живая
лента заказов, оплат, записей. Для SaaS, магазинов, сервисов записи. Карточки —
своей разметкой в `<li>`; `data-max` — сколько видно одновременно.
Без JavaScript видна вся лента.

```html
<style>
  .fx-notify{list-style:none;margin:0;padding:0;display:grid;gap:10px;align-content:start;max-width:380px}
  .fx-notify>li{transform-origin:top center}
  .fx-notify>li.fx-in{animation:fx-notify-in .6s cubic-bezier(.2,.9,.3,1.15)}
  @keyframes fx-notify-in{from{opacity:0;transform:translateY(-14px) scale(.94)}}
</style>

<ul class="fx-notify" data-fx="notify" data-max="4" data-interval="2200">
  <li>Новая запись: стрижка, пятница 18:00</li>
  <li>Оплата 2 400 ₽ получена</li>
  <li>Отзыв: «Лучший барбер в районе»</li>
  <li>Напоминание отправлено клиенту</li>
  <li>Новая запись: борода, суббота 12:30</li>
</ul>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="notify"]').forEach(function(list){
    var items=[].slice.call(list.children),max=+(list.dataset.max||4),every=+(list.dataset.interval||2200);
    if(items.length<2) return;
    list.style.minHeight=list.getBoundingClientRect().height*Math.min(1,max/items.length)+'px';
    items.forEach(function(it){it.remove()});
    var i=0,visible=true;
    new IntersectionObserver(function(e){visible=e[0].isIntersecting}).observe(list);
    function push(){
      var it=items[i++%items.length].cloneNode(true);
      it.classList.add('fx-in');list.prepend(it);
      while(list.children.length>max) list.lastElementChild.remove();
    }
    push();
    setInterval(function(){if(visible&&!document.hidden) push()},every);
  });
})();
</script>
```

### compare
Слайдер «до и после»: шторка между двумя фотографиями, её тянут мышью,
пальцем или стрелками с клавиатуры. Для ремонта, клининга, косметологии,
ретуши, реставрации. Обе картинки — одного размера и ракурса.

```html
<style>
  .fx-compare{--pos:50%;position:relative;overflow:hidden;border-radius:18px;aspect-ratio:4/3;user-select:none;touch-action:pan-y}
  .fx-compare img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}
  .fx-compare .fx-before{clip-path:inset(0 calc(100% - var(--pos)) 0 0)}
  .fx-compare::after{content:"";position:absolute;top:0;bottom:0;left:var(--pos);width:2px;margin-left:-1px;background:#fff;box-shadow:0 0 12px rgba(0,0,0,.35);pointer-events:none}
  .fx-compare-knob{position:absolute;top:50%;left:var(--pos);width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#fff;color:#111;display:grid;place-items:center;box-shadow:0 4px 16px rgba(0,0,0,.25);pointer-events:none;z-index:2}
  .fx-compare input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:ew-resize;z-index:3}
  .fx-compare input:focus-visible~.fx-compare-knob{outline:3px solid var(--fx-focus,#6d5dfc);outline-offset:3px}
  .fx-compare-label{position:absolute;bottom:14px;z-index:1;padding:6px 12px;border-radius:999px;background:rgba(0,0,0,.55);color:#fff;font-size:14px}
</style>

<div class="fx-compare" data-fx="compare">
  <img src="photos/after.jpg" alt="Кухня после ремонта" width="1200" height="900">
  <img class="fx-before" src="photos/before.jpg" alt="Кухня до ремонта" width="1200" height="900">
  <span class="fx-compare-label" style="left:14px">До</span>
  <span class="fx-compare-label" style="right:14px">После</span>
  <input type="range" min="0" max="100" value="50" aria-label="Сравнить: до и после">
  <span class="fx-compare-knob" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6-6 6 6 6M15 6l6 6-6 6"/></svg></span>
</div>

<script>
(function(){
  document.querySelectorAll('[data-fx="compare"]').forEach(function(el){
    var range=el.querySelector('input');
    function set(){el.style.setProperty('--pos',range.value+'%')}
    range.addEventListener('input',set);set();
  });
})();
</script>
```

### progressive-blur
Край секции плавно уходит в размытие, как в интерфейсах Apple: под ним
прокручивается лента, галерея, длинный список или низ фотографии.
Ставь внутрь блока с `position:relative`; класс `top` — размытие сверху.
Высота — `--fx-pblur-h`.

```html
<style>
  .fx-pblur{position:absolute;left:0;right:0;bottom:0;height:var(--fx-pblur-h,34%);pointer-events:none;z-index:2}
  .fx-pblur.top{top:0;bottom:auto}
  .fx-pblur i{position:absolute;inset:0;-webkit-backdrop-filter:blur(var(--b));backdrop-filter:blur(var(--b));
    -webkit-mask-image:linear-gradient(to bottom,transparent var(--from),#000 var(--to));mask-image:linear-gradient(to bottom,transparent var(--from),#000 var(--to))}
  .fx-pblur.top i{-webkit-mask-image:linear-gradient(to top,transparent var(--from),#000 var(--to));mask-image:linear-gradient(to top,transparent var(--from),#000 var(--to))}
</style>

<div class="fx-pblur" aria-hidden="true">
  <i style="--b:1px;--from:0%;--to:20%"></i><i style="--b:2px;--from:15%;--to:40%"></i><i style="--b:4px;--from:35%;--to:60%"></i><i style="--b:8px;--from:55%;--to:80%"></i><i style="--b:16px;--from:75%;--to:100%"></i>
</div>
```

### terminal
Окно терминала: команды печатаются по буквам, ответы появляются строками.
Для сервисов для разработчиков, API, CLI, хостинга. Команда — `data-cmd`,
ответ — `data-out`. Играет один раз, когда окно появляется на экране; без
JavaScript видно всё сразу.

```html
<style>
  .fx-term{background:var(--fx-term-bg,#0f1117);color:var(--fx-term-fg,#d7dae0);border-radius:14px;overflow:hidden;text-align:left;
    font:14px/1.65 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;box-shadow:0 20px 50px rgba(0,0,0,.25)}
  .fx-term-bar{display:flex;gap:7px;padding:12px 14px;background:rgba(255,255,255,.04)}
  .fx-term-bar i{width:11px;height:11px;border-radius:50%;background:rgba(255,255,255,.18)}
  .fx-term-body{padding:16px 18px 20px}
  .fx-term-body>span{display:block;white-space:pre-wrap;word-break:break-word;min-height:1.65em}
  .fx-term [data-cmd]::before{content:"$ ";color:var(--fx-term-accent,#7ee787)}
  .fx-term [data-out]{color:var(--fx-term-dim,#8b93a1)}
  .fx-term .fx-caret{display:inline-block;width:.55em;height:1.1em;vertical-align:-.2em;background:currentColor;animation:fx-caret 1s steps(1) infinite}
  @keyframes fx-caret{50%{opacity:0}}
</style>

<div class="fx-term" data-fx="terminal">
  <div class="fx-term-bar" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="fx-term-body">
    <span data-cmd>npx pochta send --to клиенты.csv</span>
    <span data-out>Проверяем адреса: 1 204 из 1 210 в порядке</span>
    <span data-out>Отправлено за 38 секунд</span>
  </div>
</div>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="terminal"]').forEach(function(term){
    var body=term.querySelector('.fx-term-body'),lines=[].slice.call(body.children);
    body.style.minHeight=body.offsetHeight+'px';
    var texts=lines.map(function(l){return l.textContent});
    lines.forEach(function(l){l.textContent='';l.hidden=true});
    var caret=document.createElement('i');caret.className='fx-caret';caret.setAttribute('aria-hidden','true');
    function play(i){
      if(i>=lines.length){caret.remove();return}
      var line=lines[i];line.hidden=false;
      if(!line.hasAttribute('data-cmd')){line.textContent=texts[i];setTimeout(function(){play(i+1)},350);return}
      var n=0;line.append(caret);
      (function type(){
        caret.before(texts[i].charAt(n++));
        if(n<texts[i].length) setTimeout(type,28+Math.random()*40);
        else setTimeout(function(){play(i+1)},450);
      })();
    }
    var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){io.disconnect();setTimeout(function(){play(0)},300)}},{threshold:.5});
    io.observe(term);
  });
})();
</script>
```

### device-frame
Рамки устройств без картинок: окно браузера и телефон. Внутрь кладётся
скриншот продукта, фото или живая разметка интерфейса. Для приложений,
онлайн-сервисов, кейсов студий. Статичные — движение добавляй другими
эффектами.

```html
<style>
  .fx-browser{margin:0;border-radius:14px;overflow:hidden;background:var(--fx-frame,#fff);border:1px solid rgba(0,0,0,.08);box-shadow:0 24px 60px rgba(20,20,40,.18)}
  .fx-browser-bar{display:flex;align-items:center;gap:7px;padding:10px 14px;border-bottom:1px solid rgba(0,0,0,.07);background:var(--fx-frame-bar,#f4f4f6)}
  .fx-browser-bar i{width:11px;height:11px;border-radius:50%;background:#dcdce2;flex:none}
  .fx-browser-bar span{flex:1;max-width:340px;margin:0 auto;padding:4px 12px;border-radius:8px;background:rgba(0,0,0,.05);font:12.5px/1.4 system-ui,sans-serif;color:#6b6b76;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .fx-browser-screen{display:block;aspect-ratio:16/10;overflow:hidden}
  .fx-browser-screen>img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
  .fx-phone{margin:0;width:min(300px,100%);aspect-ratio:9/19.5;padding:11px;border-radius:48px;background:var(--fx-phone,#16161a);position:relative;box-sizing:border-box;
    box-shadow:inset 0 0 0 2px rgba(255,255,255,.08),0 30px 70px rgba(20,20,40,.3)}
  .fx-phone::before{content:"";position:absolute;top:21px;left:50%;width:30%;height:24px;margin-left:-15%;border-radius:999px;background:#000;z-index:2}
  .fx-phone-screen{height:100%;border-radius:38px;overflow:hidden;background:#fff;position:relative}
  .fx-phone-screen>img{width:100%;height:100%;object-fit:cover;display:block}
</style>

<figure class="fx-browser">
  <div class="fx-browser-bar" aria-hidden="true"><i></i><i></i><i></i><span>app.pochta.ru</span></div>
  <div class="fx-browser-screen"><img src="photos/screen.jpg" alt="Экран рассылки" width="1600" height="1000"></div>
</figure>

<figure class="fx-phone">
  <div class="fx-phone-screen"><img src="photos/app.jpg" alt="Приложение на телефоне" width="780" height="1690"></div>
</figure>
```

### dock
Ряд иконок, которые увеличиваются под курсором, как док macOS. Для
приложений и наборов инструментов: «всё, что умеет сервис». На телефоне —
обычный ряд иконок. Ссылкам без текста нужна `aria-label`.

```html
<style>
  .fx-dock{display:inline-flex;align-items:flex-end;gap:10px;padding:10px 12px;border-radius:22px;box-sizing:border-box;height:calc(var(--fx-dock-size,48px) + 20px);
    background:var(--fx-dock-bg,rgba(255,255,255,.6));border:1px solid rgba(0,0,0,.06);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px)}
  .fx-dock>*{--s:1;flex:none;width:calc(var(--fx-dock-size,48px)*var(--s));height:calc(var(--fx-dock-size,48px)*var(--s));display:grid;place-items:center;border-radius:28%;
    transition:width .12s ease-out,height .12s ease-out}
  .fx-dock>* svg{width:55%;height:55%}
</style>

<nav class="fx-dock" data-fx="dock" aria-label="Возможности">
  <a href="#calendar" aria-label="Календарь" style="background:#fff">…svg…</a>
  <a href="#chat" aria-label="Чат" style="background:#fff">…svg…</a>
  <a href="#pay" aria-label="Оплата" style="background:#fff">…svg…</a>
</nav>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!matchMedia('(hover:hover)').matches) return;
  document.querySelectorAll('[data-fx="dock"]').forEach(function(dock){
    var items=[].slice.call(dock.children),max=+(dock.dataset.scale||1.6),range=+(dock.dataset.range||140);
    dock.addEventListener('pointermove',function(e){
      items.forEach(function(it){
        var r=it.getBoundingClientRect(),d=Math.abs(e.clientX-(r.left+r.width/2));
        it.style.setProperty('--s',1+(max-1)*Math.max(0,1-d/range));
      });
    });
    dock.addEventListener('pointerleave',function(){items.forEach(function(it){it.style.setProperty('--s',1)})});
  });
})();
</script>
```

### scroll-progress
Тонкая полоса сверху показывает, сколько страницы прочитано. Для длинных
страниц: программа курса, статья, подробный продукт. На короткой — не нужна.

```html
<style>
  .fx-progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:100;background:var(--fx-progress,#6d5dfc);transform-origin:0 50%;transform:scaleX(0);pointer-events:none}
  @supports (animation-timeline:scroll()){.fx-progress{animation:fx-progress linear both;animation-timeline:scroll(root)}}
  @keyframes fx-progress{to{transform:scaleX(1)}}
</style>

<div class="fx-progress" data-fx="progress" aria-hidden="true"></div>

<script>
(function(){
  if(window.CSS&&CSS.supports('animation-timeline','scroll()')) return;
  document.querySelectorAll('[data-fx="progress"]').forEach(function(bar){
    function update(){var h=document.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?scrollY/h:0)+')'}
    addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
  });
})();
</script>
```

### lens
Круглая лупа под курсором показывает фотографию крупнее. Для товаров с
фактурой: ткань, ювелирка, керамика, мебель. На телефоне не включается.

```html
<style>
  .fx-lens{position:relative;overflow:hidden;cursor:zoom-in}
  .fx-lens img{display:block;width:100%;height:auto}
  .fx-lens-glass{position:absolute;width:var(--fx-lens,170px);height:var(--fx-lens,170px);border-radius:50%;pointer-events:none;transform:translate(-50%,-50%);
    background-repeat:no-repeat;box-shadow:0 0 0 3px #fff,0 10px 30px rgba(0,0,0,.3);opacity:0;transition:opacity .2s}
  .fx-lens:hover .fx-lens-glass{opacity:1}
</style>

<div class="fx-lens" data-fx="lens" data-zoom="2.5"><img src="photos/vase.jpg" alt="Ваза ручной работы, глазурь крупным планом" width="1200" height="900"></div>

<script>
(function(){
  if(!matchMedia('(hover:hover)').matches) return;
  document.querySelectorAll('[data-fx="lens"]').forEach(function(el){
    var img=el.querySelector('img'),zoom=+(el.dataset.zoom||2.5),glass=document.createElement('span');
    glass.className='fx-lens-glass';glass.setAttribute('aria-hidden','true');el.append(glass);
    el.addEventListener('pointermove',function(e){
      var r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top,half=glass.offsetWidth/2;
      glass.style.left=x+'px';glass.style.top=y+'px';
      glass.style.backgroundImage='url("'+(img.currentSrc||img.src)+'")';
      glass.style.backgroundSize=(r.width*zoom)+'px '+(r.height*zoom)+'px';
      glass.style.backgroundPosition=(half-x*zoom)+'px '+(half-y*zoom)+'px';
    });
  });
})();
</script>
```

---

## Кнопки

Эффекты кнопок не меняют их цвет и форму — только добавляют отклик. Сама
кнопка остаётся в стиле страницы.

### magnetic
Кнопка чуть тянется за курсором, подпись — ещё немного сильнее. Для одного
главного CTA на экране.

```html
<style>.fx-magnet{display:inline-block;transition:transform .4s cubic-bezier(.2,.75,.25,1)}.fx-magnet>span{display:inline-block;transition:transform .4s cubic-bezier(.2,.75,.25,1)}</style>

<a class="fx-magnet" data-fx="magnetic" href="#"><span>Записаться</span></a>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
  document.querySelectorAll('[data-fx="magnetic"]').forEach(function(el){
    var label=el.firstElementChild;
    el.addEventListener('pointermove',function(e){
      var r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      el.style.transform='translate('+x*.28+'px,'+y*.35+'px)';
      if(label)label.style.transform='translate('+x*.12+'px,'+y*.15+'px)';
    });
    el.addEventListener('pointerleave',function(){el.style.transform='';if(label)label.style.transform=''});
  });
})();
</script>
```

### glare
При наведении по кнопке проходит светлый блик. Для покупки и премиальных
предложений.

```html
<style>
  .fx-glare{position:relative;overflow:hidden;isolation:isolate}
  .fx-glare::after{content:"";position:absolute;inset:0;pointer-events:none;transform:translateX(-120%);transition:transform .75s ease;
    background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%)}
  .fx-glare:hover::after{transform:translateX(120%)}
</style>

<a class="fx-glare" href="#">Купить за 24 990 ₽</a>
```

### slide-arrow
Стрелка уезжает вправо и тут же возвращается слева. Одна-две кнопки на
странице, не каждая ссылка.

```html
<style>
  .fx-arrow{display:inline-flex;align-items:center;gap:.5em}
  .fx-arrow-icon{display:inline-grid;overflow:hidden;width:1em;height:1em}
  .fx-arrow-icon svg{grid-area:1/1;width:1em;height:1em;transition:transform .35s cubic-bezier(.2,.75,.25,1)}
  .fx-arrow-icon svg+svg{transform:translateX(-120%)}
  .fx-arrow:hover .fx-arrow-icon svg:first-child{transform:translateX(120%)}
  .fx-arrow:hover .fx-arrow-icon svg+svg{transform:none}
</style>

<a class="fx-arrow" href="#">Смотреть кейсы
  <span class="fx-arrow-icon" aria-hidden="true">
    <svg viewBox="0 0 16 16" fill="none"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <svg viewBox="0 0 16 16" fill="none"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </span>
</a>
```

### fill-hover
Заливка растекается от точки, где курсор вошёл в кнопку, и уходит туда, где
вышел. Для контурных кнопок. Цвета — в `--fx-fill` и `--fx-fill-text`.

```html
<style>
  .fx-fill{position:relative;overflow:hidden;isolation:isolate;transition:color .35s ease}
  .fx-fill::before{content:"";position:absolute;left:var(--x,50%);top:var(--y,50%);z-index:-1;width:0;aspect-ratio:1;border-radius:50%;
    background:var(--fx-fill,#111);transform:translate(-50%,-50%);transition:width .5s cubic-bezier(.2,.75,.25,1)}
  .fx-fill:hover{color:var(--fx-fill-text,#fff)}
  .fx-fill:hover::before{width:260%}
</style>

<a class="fx-fill" data-fx="fill-hover" href="#">Оставить заявку</a>

<script>
(function(){
  document.querySelectorAll('[data-fx="fill-hover"]').forEach(function(el){
    var at=function(e){var r=el.getBoundingClientRect();el.style.setProperty('--x',e.clientX-r.left+'px');el.style.setProperty('--y',e.clientY-r.top+'px')};
    el.addEventListener('pointerenter',at);el.addEventListener('pointerleave',at);
  });
})();
</script>
```

### ripple
От точки клика расходится волна. Для приложений и форм: подтверждает, что
нажатие принято.

```html
<style>
  .fx-ripple{position:relative;overflow:hidden;isolation:isolate}
  .fx-ripple-wave{position:absolute;z-index:-1;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:currentColor;opacity:.3;pointer-events:none;animation:fx-ripple .6s ease-out forwards}
  @keyframes fx-ripple{to{transform:scale(30);opacity:0}}
</style>

<button class="fx-ripple" data-fx="ripple">Добавить в корзину</button>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-fx="ripple"]').forEach(function(el){
    el.addEventListener('pointerdown',function(e){
      var r=el.getBoundingClientRect(),w=document.createElement('span');
      w.className='fx-ripple-wave';w.style.left=e.clientX-r.left+'px';w.style.top=e.clientY-r.top+'px';
      el.appendChild(w);setTimeout(function(){w.remove()},650);
    });
  });
})();
</script>
```

### shimmer
По кнопке раз в пару секунд пробегает отблеск — привлекает взгляд к главному
действию. Одна кнопка на странице, лучше в тёмной теме.

```html
<style>
  .fx-shimmer{position:relative;overflow:hidden;isolation:isolate}
  .fx-shimmer::after{content:"";position:absolute;inset:-50% -20%;pointer-events:none;transform:translateX(-100%);
    background:linear-gradient(100deg,transparent 40%,rgba(255,255,255,.35) 50%,transparent 60%);animation:fx-shimmer 3s ease-in-out infinite}
  @keyframes fx-shimmer{55%,100%{transform:translateX(100%)}}
  @media (prefers-reduced-motion:reduce){.fx-shimmer::after{animation:none;opacity:0}}
</style>

<a class="fx-shimmer" href="#">Попробовать бесплатно</a>
```

### confirm
Кнопка после нажатия плавно меняет ширину и превращается в «✓ Готово».
Для записи, подписки, заявок. Текст успеха — в `data-done`. В форме срабатывает
только если поля заполнены правильно.

```html
<style>
  .fx-confirm{white-space:nowrap;transition:background-color .3s ease,color .3s ease,width .35s cubic-bezier(.2,.75,.25,1)}
  .fx-confirm.is-done[data-fx]{background:var(--fx-done,#1f9d55);color:#fff}
</style>

<button class="fx-confirm" data-fx="confirm" data-done="Вы записаны">Записаться</button>

<script>
(function(){
  document.querySelectorAll('[data-fx="confirm"]').forEach(function(btn){
    btn.addEventListener('click',function(e){
      var form=btn.form;
      if(form){ if(!form.checkValidity()) return; e.preventDefault(); }
      if(btn.classList.contains('is-done')) return;
      var from=btn.getBoundingClientRect().width;
      btn.style.width=from+'px';
      btn.textContent='✓ '+(btn.dataset.done||'Готово');
      btn.classList.add('is-done');
      btn.style.width='auto';
      var to=btn.getBoundingClientRect().width;
      btn.style.width=from+'px';
      requestAnimationFrame(function(){requestAnimationFrame(function(){btn.style.width=to+'px'})});
    });
  });
})();
</script>
```

### pulse
От кнопки расходится мягкая волна, как пульс. Для одной главной кнопки
записи или звонка — не для нескольких сразу. Цвет волны `--fx-pulse` —
цвет кнопки с прозрачностью.

```html
<style>
  .fx-pulse{animation:fx-pulse 2.2s cubic-bezier(.2,.6,.3,1) infinite}
  @keyframes fx-pulse{0%{box-shadow:0 0 0 0 var(--fx-pulse,rgba(109,93,252,.5))}70%,100%{box-shadow:0 0 0 18px transparent}}
  @media (prefers-reduced-motion:reduce){.fx-pulse{animation:none}}
</style>

<a class="fx-pulse" href="#booking" style="--fx-pulse:rgba(22,21,26,.35)">Записаться</a>
```

### confetti
Салют из конфетти от кнопки после нажатия. Только для радостного действия:
запись на праздник, подарок, регистрация на событие. В форме срабатывает,
если поля заполнены правильно. Цвета — в `data-colors`.

```html
<button class="btn" data-fx="confetti" data-colors="#6d5dfc,#ffcf40,#ff6b8b,#2dd4bf">Забронировать праздник</button>

<script>
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function burst(x,y,colors){
    var c=document.createElement('canvas'),ctx=c.getContext('2d'),dpr=Math.min(2,devicePixelRatio||1),W=innerWidth,H=innerHeight;
    c.setAttribute('aria-hidden','true');
    c.style.cssText='position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999';
    c.width=W*dpr;c.height=H*dpr;ctx.scale(dpr,dpr);document.body.append(c);
    var parts=[];
    for(var i=0;i<110;i++){
      var a=-Math.PI/2+(Math.random()-.5)*Math.PI*.9,v=6+Math.random()*9;
      parts.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.3,w:6+Math.random()*6,h:4+Math.random()*6,c:colors[i%colors.length]});
    }
    var t0=performance.now();
    (function frame(t){
      var k=(t-t0)/1000;ctx.clearRect(0,0,W,H);
      parts.forEach(function(p){
        p.vy+=.28;p.vx*=.985;p.vy*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;
        ctx.save();ctx.globalAlpha=Math.max(0,1-k/2.2);ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;
        ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h*Math.abs(Math.cos(p.r*2)));ctx.restore();
      });
      if(k<2.3) requestAnimationFrame(frame); else c.remove();
    })(t0);
  }
  document.querySelectorAll('[data-fx="confetti"]').forEach(function(btn){
    btn.addEventListener('click',function(){
      if(btn.form&&!btn.form.checkValidity()) return;
      var r=btn.getBoundingClientRect();
      burst(r.left+r.width/2,r.top+r.height/2,(btn.dataset.colors||'#6d5dfc,#ffcf40,#ff6b8b,#2dd4bf').split(','));
    });
  });
})();
</script>
```

---

## Движки

Для анимаций, которые сложно написать с нуля, рядом со страницей лежат две
библиотеки (обе MIT, сеть не нужна):

- `anime.min.js` — [anime.js](https://animejs.com) 4: таймлайны, `stagger`
  (задержки волной, в том числе по сетке), рисование SVG-линий
  (`svg.createDrawable`), разбивка текста (`splitText`), запуск по прокрутке
  (`onScroll`). Глобальный объект `anime`.
- `motion.min.js` — [Motion](https://motion.dev): пружины (`spring`),
  анимации, привязанные к прокрутке (`scroll`), появление (`inView`),
  отклик на наведение и нажатие (`hover`, `press`). Глобальный объект `Motion`.

Правила: **не больше одной библиотеки на страницу** и только если эффект
из каталога выше задачу не решает. Подключай перед `</body>` с `defer`,
а свой код запускай на `DOMContentLoaded` — к этому моменту библиотека уже
загружена. Всегда проверяй `window.anime` / `window.Motion` и
`prefers-reduced-motion`: контент должен быть виден и без анимации.
Весит библиотека 115–145 КБ, в лимит `index.html` она не входит.

### anime-draw
Линии SVG рисуются сами, когда рисунок появляется на экране: маршрут на
карте, схема, подпись, контур предмета из брифа. Годится любой свой SVG с
`stroke` — фигуры рисуются по очереди.

```html
<svg class="fx-draw" data-fx="anime-draw" viewBox="0 0 400 160" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
  <path d="M10 130 C 80 20, 160 20, 200 90 S 320 150, 390 30"/>
  <circle cx="200" cy="90" r="8"/>
  <circle cx="390" cy="30" r="5"/>
</svg>

<script src="anime.min.js" defer></script>
<script>
addEventListener('DOMContentLoaded',function(){
  if(!window.anime||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var A=window.anime;
  document.querySelectorAll('[data-fx="anime-draw"]').forEach(function(el){
    A.animate(A.svg.createDrawable(el.querySelectorAll('path,line,polyline,polygon,circle,ellipse,rect')),{
      draw:['0 0','0 1'],ease:'inOutQuad',duration:+(el.dataset.duration||1800),delay:A.stagger(160),
      autoplay:A.onScroll({target:el,enter:'bottom-=10% top'})
    });
  });
});
</script>
```

### anime-text
Буквы заголовка выезжают из-под строки волной. Для одного главного
заголовка первого экрана, когда нужен характерный вход. Строки и неразрывные
пробелы сохраняются.

```html
<style>
  [data-fx="anime-text"]{overflow-wrap:normal}
</style>

<h1 data-fx="anime-text">Печём хлеб, который помнят</h1>

<script src="anime.min.js" defer></script>
<script>
addEventListener('DOMContentLoaded',function(){
  if(!window.anime||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var A=window.anime;
  document.querySelectorAll('[data-fx="anime-text"]').forEach(function(el){
    var split=A.splitText(el,{words:{wrap:'clip'},chars:true});
    A.animate(split.chars,{y:['110%','0%'],duration:800,ease:'out(3)',delay:A.stagger(16)});
  });
});
</script>
```

### anime-grid
Поле точек, по которому от клика расходится волна, а иногда она запускается
сама. Интерактивная игрушка для первого экрана сервисов про данные, звук,
сенсоры. Размер поля — `data-cols` и `data-rows`.

```html
<style>
  .fx-dotgrid{display:grid;grid-template-columns:repeat(var(--cols),auto);gap:clamp(8px,2.2vw,14px);width:max-content;max-width:100%;margin-inline:auto;cursor:pointer}
  .fx-dotgrid i{width:var(--fx-dot,8px);height:var(--fx-dot,8px);border-radius:50%;background:var(--fx-dot-color,currentColor);opacity:.35}
</style>

<div class="fx-dotgrid" data-fx="anime-grid" data-cols="17" data-rows="9" aria-hidden="true"></div>

<script src="anime.min.js" defer></script>
<script>
addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('[data-fx="anime-grid"]').forEach(function(el){
    var cols=+(el.dataset.cols||17),rows=+(el.dataset.rows||9);
    el.style.setProperty('--cols',cols);
    for(var i=0;i<cols*rows;i++) el.append(document.createElement('i'));
    if(!window.anime||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var A=window.anime,dots=el.children;
    function wave(from){
      A.animate(dots,{
        scale:[{to:[1,2.2],duration:260},{to:1,duration:600}],
        opacity:[{to:1,duration:260},{to:.35,duration:600}],
        delay:A.stagger(45,{grid:[cols,rows],from:from}),ease:'inOutQuad'
      });
    }
    el.addEventListener('click',function(e){var i=[].indexOf.call(dots,e.target);if(i>=0) wave(i)});
    wave('center');
    setInterval(function(){if(!document.hidden) wave(Math.random()*dots.length|0)},4200);
  });
});
</script>
```

### motion-parallax
Слои секции едут с разной скоростью при прокрутке: фотография медленнее
текста, декоративная фигура быстрее. Для редакционных страниц, туризма,
недвижимости. Сила — `data-depth` у слоя (от −0.4 до 0.4).

```html
<style>
  .fx-parallax{position:relative;overflow:hidden}
  .fx-parallax [data-depth]{will-change:transform}
</style>

<section class="fx-parallax" data-fx="parallax">
  <img data-depth="-0.2" src="photos/lake.jpg" alt="Озеро на рассвете" width="1600" height="1000">
  <h2 data-depth="0.15">Тишина в двух часах от города</h2>
</section>

<script src="motion.min.js" defer></script>
<script>
addEventListener('DOMContentLoaded',function(){
  if(!window.Motion||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var M=window.Motion;
  document.querySelectorAll('[data-fx="parallax"]').forEach(function(section){
    section.querySelectorAll('[data-depth]').forEach(function(layer){
      var shift=(parseFloat(layer.dataset.depth)||.2)*section.offsetHeight;
      M.scroll(M.animate(layer,{y:[-shift,shift]},{ease:'linear'}),{target:section,offset:['start end','end start']});
    });
  });
});
</script>
```

### motion-spring
Карточки и кнопки откликаются на наведение и нажатие пружиной — чуть
приподнимаются и пружинят. Живее, чем CSS-переход. Для тарифов, товаров,
карточек приложений. Ставь `data-fx="spring"` на нужные элементы.

```html
<article class="card" data-fx="spring">Тариф «Команда»</article>

<script src="motion.min.js" defer></script>
<script>
addEventListener('DOMContentLoaded',function(){
  if(!window.Motion||matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var M=window.Motion,soft={type:M.spring,stiffness:320,damping:20};
  M.hover('[data-fx="spring"]',function(el){
    M.animate(el,{scale:1.03,y:-4},soft);
    return function(){M.animate(el,{scale:1,y:0},soft)};
  });
  M.press('[data-fx="spring"]',function(el){
    M.animate(el,{scale:.97},{type:M.spring,stiffness:600,damping:30});
    return function(){M.animate(el,{scale:1},soft)};
  });
});
</script>
```
