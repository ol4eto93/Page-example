 /* quote.push();*/

 function addQuote() {
     /*var quote = document.querySelector('quote') = inner.HTML(p);*/
     var quote = document.getElementById('randomQuote');
     var newQuote = document.createElement('p'); // Създаваме 
     var promptValue = prompt('Enter new quote', 'New quote'); // Потребителя въвежда цитат
     newQuote.innerHTML = promptValue; // Добавяме въведената информация към p-то
     quote.appendChild(newQuote); // Добавяме създаденото p към списъка
 }
 // функция за предишен и следващ цитат
 var changeKey = 0;

 function changeButton(prevNext) {
     // Деклариране на празен масив
     var quote = ['Цитат първи', 'Цитат втори', 'Трети цитат', 'Четвърти цитат'];
     var change = document.getElementById('quote');
     if (prevNext == 'prev') {
         changeKey--;
         if (changeKey < 0) {
             changeKey = quote.length - 1;
         }
     } else {
         changeKey++;
         if (changeKey > quote.length - 1) {
             changeKey = 0;
         }
     }
     console.log(changeKey);
     console.log(change);
     change.innerHTML = quote[changeKey];
 }
 /*var randomQuoteDiv = document.getElementById('randomQuote');
 var testDiv = document.getElementById('test');

 function getRandomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 //console.log(getRandomNumber(0, 100));
 function getRandomQuote() {
     var firstQuote = getRandomNumber('Purvi citat');
     var secondQuote = getRandomNumber('Vtori');
     var tirdQuote = getRandomNumber('Treti');
     var quote = '"' + firstQuote,
         secondQuote, tirdQuote + '"';
     //console.log();
     return quote;
 }*/

 /* function addQuote() {
      var quote = document.getElementById('quote');
  }*/

 function addOption(id) {
     var select = document.getElementById('countedOptions');
     var newOption = document.createElement('option');
     var promptValue = prompt('Enter new city');
     newOption.innerHTML = promptValue;
     select.appendChild(newOption);
 }