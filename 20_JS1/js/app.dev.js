"use strict";

// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
var userName = prompt('Як вас звуть?');
alert('Привіт, ' + userName + "!"); // Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

var userAge = prompt('Вкажіть свій рік народження?');
var userAgeConvert = parseFloat(userAge);
var year = 2022;
alert("\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0434\u0438\u0432\u0438\u043C\u043E\u0441\u044C \u043F\u0440\u0430\u0432\u0434\u0456 \u0432 \u043E\u0447\u0456, \u0412\u0430\u043C:  ".concat(year - userAge) + " \u0440\u0456\u043A (\u0440\u043E\u0447\u043A\u0438) :)"); // Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

var sideLenght = prompt('Вкажіть довжину сторони квадрату?');
alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ".concat(sideLenght * 4)); // Запитай у користувача радіус кола і виведи площу такої окружності.

var circleRadius = prompt('Вкажіть радіус кола?');
var circleRadiusConvert = parseFloat(circleRadius);

if (circleRadius > 0) {
  var circleSquare = Math.PI * Math.pow(circleRadiusConvert, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454: ".concat(circleSquare));
}
/* Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно. */


var distance = prompt('Вкажіть відстань в кілометрах між двома містами?');
var distanceConvert = parseFloat(distance);
var time = prompt('Вкажіть за скільки годин хочете дістатися до кінцевого пункту?');
var timeConvert = parseFloat(time);

if (distanceConvert > 0) {
  var result = distanceConvert / timeConvert;
  alert("\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E: ".concat(result) + "\u043A\u043C/\u0433\u043E\u0434. \u0410\u043B\u0435 \u043F\u0430\u043C'\u044F\u0442\u0430\u0439\u0442\u0435, \u043D\u0435\u0449\u043E\u0434\u0430\u0432\u043D\u043E \u0437\u0431\u0456\u043B\u044C\u0448\u0438\u0432\u0441\u044F \u0448\u0442\u0440\u0430\u0444 \u0437\u0430 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0435\u043D\u043D\u044F \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456, \u0442\u043E\u0436 \u043D\u0435 \u043F\u0435\u0440\u0435\u0432\u0438\u0449\u0443\u0439\u0442\u0435!");
} // Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.


var amountDollar = prompt('Вкажіть кількість долларів, які хочете обміняти?');
var amountDollarConvert = parseFloat(amountDollar);
var exchangeRateD_E = 1.004;

if (amountDollarConvert > 0) {
  var resultExchangeRate = amountDollarConvert * exchangeRateD_E;
  alert("\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435: ".concat(resultExchangeRate) + "\u0435\u0432\u0440\u043E.");
}

alert("\u041D\u0430 \u0446\u044C\u043E\u043C\u0443 \u0432\u0441\u0435, \u043F\u0440\u0438\u0445\u043E\u0434\u044C\u0442\u0435 \u0449\u0435! \u0421\u043B\u0430\u0432\u0430 \u0423\u043A\u0440\u0430\u0457\u043D\u0456!");