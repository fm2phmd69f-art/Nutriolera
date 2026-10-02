# Процедурная графика для лендингов Landly

Главный образ страницы можно не рисовать руками, а **генерировать скриптом прямо на
странице**: тысячи прядей, линии потока, рельеф, созвездия. Так получается графика
уровня арт-объекта, а не десяток ручных линий. Внешние библиотеки не нужны.

## Правила

1. **Фиксированное зерно.** Случайность — только через генератор с seed ниже:
   картинка одинаковая при каждой загрузке и на скриншотах.
2. **Образ из предмета брифа.** «Борода» → пряди; «навигация, туризм» → рельеф и
   изолинии; «данные, ИИ» → поток частиц; «звук» → волны; «кофе» → пар и зёрна.
   Абстрактный градиент «ни о чём» — не процедурная графика.
3. **Рисуй один раз, двигай мягко.** Сгенерируй геометрию при загрузке; анимация —
   медленная (покачивание, дрейф) и выключается при `prefers-reduced-motion`.
4. **Производительность:** SVG — до 1 500 элементов, иначе canvas; canvas —
   с `devicePixelRatio` не больше 2, перерисовка на resize с задержкой.
5. **Текст поверх графики должен читаться:** маска-затухание, полупрозрачная
   подложка или графика в стороне от текста. Контраст проверяй на скриншоте.
6. Контейнер задаёт размер, графика его заполняет (`position:absolute; inset:0`
   внутри `position:relative`).

## Генератор случайных чисел с зерном и шум

```js
function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
/* Гладкий 2D-шум для потоков и рельефа */
function noise2(seed){var r=rng(seed),p=new Uint8Array(512),g=[];for(var i=0;i<256;i++){p[i]=i;var a=r()*Math.PI*2;g[i]=[Math.cos(a),Math.sin(a)]}for(i=255;i>0;i--){var j=r()*(i+1)|0,t=p[i];p[i]=p[j];p[j]=t}for(i=0;i<256;i++)p[i+256]=p[i];
  function d(h,x,y){var v=g[h&255];return v[0]*x+v[1]*y}function f(t){return t*t*t*(t*(t*6-15)+10)}
  return function(x,y){var X=Math.floor(x)&255,Y=Math.floor(y)&255;x-=Math.floor(x);y-=Math.floor(y);var u=f(x),v=f(y),a=p[X]+Y,b=p[X+1]+Y;
    return (1-v)*((1-u)*d(p[a],x,y)+u*d(p[b],x-1,y))+v*((1-u)*d(p[a+1],x,y-1)+u*d(p[b+1],x-1,y-1))}}
```

## Рецепт 1. Пряди, волокна, волосы (SVG)

Кривые Безье от общего корня с разбросом: борода, трава, кисть, пламя, водоросли.

```html
<svg class="strands" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMin slice" aria-hidden="true"></svg>
<script>
(function(){
  var svg=document.querySelector('.strands'),r=rng(7),ns='http://www.w3.org/2000/svg',html='';
  for(var i=0;i<900;i++){
    var x0=500+(r()-.5)*520, y0=180+r()*60;             /* корень пряди */
    var len=420+r()*420, sway=(r()-.5)*260;             /* длина и изгиб */
    var x3=x0+sway*(.6+r()*.8), y3=y0+len;
    var c1x=x0+sway*.2, c1y=y0+len*.35, c2x=x3-sway*.3, c2y=y0+len*.7;
    var tone=200+r()*55|0, w=(.6+r()*1.4).toFixed(2), o=(.35+r()*.6).toFixed(2);
    html+='<path d="M'+x0.toFixed(1)+' '+y0.toFixed(1)+'C'+c1x.toFixed(1)+' '+c1y.toFixed(1)+' '+c2x.toFixed(1)+' '+c2y.toFixed(1)+' '+x3.toFixed(1)+' '+y3.toFixed(1)+'" stroke="rgb('+tone+','+(tone-12)+','+(tone-30)+')" stroke-width="'+w+'" stroke-opacity="'+o+'" fill="none" stroke-linecap="round"/>';
  }
  svg.innerHTML=html;
})();
</script>
<style>
  .strands{position:absolute;inset:0;width:100%;height:100%;
    -webkit-mask-image:radial-gradient(ellipse at 50% 30%,#000 45%,transparent 80%);mask-image:radial-gradient(ellipse at 50% 30%,#000 45%,transparent 80%)}
  @media (prefers-reduced-motion:no-preference){.strands{animation:sway 9s ease-in-out infinite alternate;transform-origin:50% 20%}}
  @keyframes sway{to{transform:rotate(1.2deg)}}
</style>
```

## Рецепт 2. Линии потока (canvas)

Сотни линий следуют полю шума: ветер, течение, данные, движение.

```html
<canvas class="flow" aria-hidden="true"></canvas>
<script>
(function(){
  var c=document.querySelector('.flow'),ctx=c.getContext('2d'),n=noise2(11);
  function draw(){
    var dpr=Math.min(2,devicePixelRatio||1),w=c.clientWidth,h=c.clientHeight,r=rng(3);
    c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
    ctx.lineWidth=1;ctx.strokeStyle='rgba(120,200,255,.35)';
    for(var i=0;i<700;i++){
      var x=r()*w,y=r()*h;ctx.beginPath();ctx.moveTo(x,y);
      for(var s=0;s<60;s++){var a=n(x*.0025,y*.0025)*Math.PI*2.5;x+=Math.cos(a)*3;y+=Math.sin(a)*3;ctx.lineTo(x,y)}
      ctx.stroke();
    }
  }
  var t;addEventListener('resize',function(){clearTimeout(t);t=setTimeout(draw,150)});draw();
})();
</script>
<style>.flow{position:absolute;inset:0;width:100%;height:100%}</style>
```

## Рецепт 3. Рельеф и изолинии (SVG)

Концентрические искажённые контуры: горы, карты, туризм, геология, «глубина».

```html
<svg class="contours" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg>
<script>
(function(){
  var svg=document.querySelector('.contours'),n=noise2(5),html='';
  for(var k=0;k<34;k++){
    var base=40+k*16,d='';
    for(var a=0;a<=360;a+=4){
      var rad=a*Math.PI/180,rr=base*(1+.45*n(Math.cos(rad)*1.6+k*.05,Math.sin(rad)*1.6));
      d+=(a?'L':'M')+(620+Math.cos(rad)*rr*1.5).toFixed(1)+' '+(420+Math.sin(rad)*rr).toFixed(1);
    }
    html+='<path d="'+d+'Z" fill="none" stroke="currentColor" stroke-opacity="'+(k%5?0.25:0.6)+'" stroke-width="'+(k%5?1:1.6)+'"/>';
  }
  svg.innerHTML=html;
})();
</script>
<style>.contours{position:absolute;inset:0;width:100%;height:100%;color:#c8b27a}</style>
```

## Рецепт 4. Поле точек-полутонов (canvas)

Точки разного размера по шуму: печать, фото, текстиль, «пиксельный» характер.

```js
/* внутри draw(): шаг сетки 14px, радиус точки из шума */
for(var y=0;y<h;y+=14)for(var x=0;x<w;x+=14){var v=(n(x*.004,y*.004)+1)/2;ctx.beginPath();ctx.arc(x,y,v*6,0,7);ctx.fill()}
```

Эти рецепты — отправная точка: меняй плотность, цвета, форму под предмет брифа.
Две разные страницы не должны получить один и тот же рецепт с теми же числами.
