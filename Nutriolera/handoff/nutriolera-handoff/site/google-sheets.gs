/**
 * Приём ответов теста nutriolera в Google-таблицу.
 *
 * 1. Создайте пустую Google-таблицу.
 * 2. Расширения → Apps Script, удалите всё и вставьте этот код, сохраните.
 * 3. Начать развёртывание → Новое развёртывание → тип «Веб-приложение»:
 *    «Запуск от имени» — от себя, «У кого есть доступ» — «Все». Разрешите доступ.
 * 4. Скопируйте адрес веб-приложения (https://script.google.com/macros/s/…/exec)
 *    и вставьте его в index.html: var SHEET_URL = '…';
 *
 * Каждое прохождение — новая строка. Колонки создаются сами по первому ответу:
 * дата, имя, контакт, почта, проценты по 6 зонам, основная зона и ответы Q1–Q50.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    var keys = Object.keys(data);
    if (sheet.getLastRow() === 0) sheet.appendRow(keys);
    var head = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    keys.forEach(function (k) {
      if (head.indexOf(k) === -1) { head.push(k); sheet.getRange(1, head.length).setValue(k); }
    });
    sheet.appendRow(head.map(function (k) { return data[k] !== undefined ? data[k] : ''; }));
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}
