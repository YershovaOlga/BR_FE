"use strict";

// Мінімум
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
var age = parseInt(prompt('Вкажіть ваш вік'));

if (isNaN(age) || age < 0 || age > 100) {
  alert('Неправильно введені дані!');
} else {
  if (age >= 0 && age <= 11) {
    alert('Дитина');
  }

  if (age >= 12 && age <= 17) {
    alert('Підліток');
  }

  if (age >= 18 && age <= 59) {
    alert('Дорослий');
  }

  if (age >= 60) {
    alert('Пенсіонер');
  }
} // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


var userNumber = parseInt(prompt('Вкажіть число від 0 до 9'));
var specialSymbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
  alert('Неправильно введені дані!');
} else {
  alert("\u0421\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B \u0434\u043B\u044F \u0447\u0438\u0441\u043B\u0430 ".concat(userNumber, " = ").concat(specialSymbols[userNumber]));
} // Підрахуй суму всіх чисел в заданому користувачем діапазоні.


var userNumFrom = parseInt(prompt('Вкажіть початкове число'));
var userNumTo = parseInt(prompt('Вкажіть кінцеве число'));
var sum = 0;

if (isNaN(userNumFrom) || isNaN(userNumTo) || userNumFrom > userNumTo || userNumFrom == 0 && userNumTo == 0) {
  alert('Неправильно введені дані!');
} else {
  for (var index = userNumFrom; index <= userNumTo; index++) {
    sum = sum + index;
  }

  alert("\u0421\u0443\u043C\u0430 \u0447\u0438\u0441\u0435\u043B \u0432\u0456\u0434 ".concat(userNumFrom, " \u0434\u043E ").concat(userNumTo, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(sum, "."));
} // Запитай у користувача 2 числа і знайди найбільший спільний дільник.


var userNumFirst = parseInt(prompt('Вкажіть перше число'));
var userNumSecond = parseInt(prompt('Вкажіть друге число'));

if (isNaN(userNumFirst) || isNaN(userNumSecond)) {
  alert('Неправильно введені дані!');
} else {
  var first = Math.abs(userNumFirst);
  var second = Math.abs(userNumSecond);

  while (second) {
    var temp = second;
    second = first % second;
    first = temp;
  }

  alert("\u041D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0441\u043F\u0456\u043B\u044C\u043D\u0438\u0439 \u0434\u0456\u043B\u044C\u043D\u0438\u043A \u0434\u043B\u044F \u0447\u0438\u0441\u0435\u043B ".concat(userNumFirst, " \u0442\u0430 ").concat(userNumSecond, " = ").concat(first));
} // Запитай у користувача число і виведи всі дільники цього числа.


var userNum = parseInt(prompt('Вкажіть число'));
var divisors = [];

if (isNaN(userNum)) {
  alert('Неправильно введені дані!');
} else {
  for (var i = 2; i * i <= userNum; ++i) {
    if (userNum % i == 0) {
      divisors.push(i);

      if (i != userNum / i) {
        divisors.push(userNum / i);
      }
    }
  }

  alert("\u0412\u0441\u0456 \u0434\u0456\u043B\u044C\u043D\u0438\u043A\u0438 ".concat(userNum, ": ").concat(divisors));
} // Норма
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


var userNumFive = parseInt(prompt('Вкажіть п’ятирозрядне число'));

if (isNaN(userNumFive) || userNumFive < 10000 || userNumFive > 99999) {
  alert('Неправильно введені дані!');
} else {
  var userNumConv = Array.from(String(userNumFive), Number);

  if (userNumConv[0] === userNumConv[4] && userNumConv[1] === userNumConv[3]) {
    alert("".concat(userNumFive, " - \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C."));
  } else {
    alert("".concat(userNumFive, " - \u043D\u0435 \u043F\u0430\u043B\u0456\u043D\u0434\u0440\u043E\u043C."));
  }
} // Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


var purchaseAmount = prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0432\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0434\u043B\u044F \u0440\u043E\u0437\u0440\u0430\u0445\u0443\u043D\u043A\u0443 \u0437\u043D\u0438\u0436\u043A\u0438");

if (isNaN(purchaseAmount)) {
  alert('Неправильно введені дані! Введіть лише цифри!');
} else {
  if (purchaseAmount <= 199) {
    alert("".concat(purchaseAmount, " \u0433\u0440\u043D. - \u0441\u0443\u043C\u0430 \u0432\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438"));
  } else {
    if (purchaseAmount >= 200 && purchaseAmount <= 299) {
      alert("\u0421\u0443\u043C\u0430 \u0432\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 3% = ".concat((purchaseAmount * 97 / 100).toFixed(2), " \u0433\u0440\u043D."));
    }

    if (purchaseAmount >= 300 && purchaseAmount <= 499) {
      alert("\u0421\u0443\u043C\u0430 \u0432\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 5% = ".concat((purchaseAmount * 95 / 100).toFixed(2), " \u0433\u0440\u043D."));
    }

    if (purchaseAmount >= 500) {
      alert("\u0421\u0443\u043C\u0430 \u0432\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0437\u043D\u0438\u0436\u043A\u0438 7% = ".concat((purchaseAmount * 93 / 100).toFixed(2), " \u0433\u0440\u043D."));
    }
  }
} // Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


var userNumTen = prompt('Вкажіть 10 чисел, розділених комою:'); // 2,10,5,3,9,7,-3,0,85,100

var userNumTenArray = JSON.parse("[" + userNumTen + "]");

if (userNumTenArray.length != 10) {
  alert('Неправильно введені дані!');
} else {
  var positive, negative, zeros, even, odd;
  positive = negative = zeros = even = odd = 0;

  for (var _index = 0; _index < userNumTenArray.length; _index++) {
    var element = userNumTenArray[_index];

    if (element > 0) {
      positive++;
    } else if (element < 0) {
      negative++;
    } else {
      zeros++;
    }

    if (element % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  alert("\u0406\u0437 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u0432\u0430\u043C\u0438 \u0434\u0430\u043D\u0438\u0445 \u043C\u043E\u0436\u0435\u043C\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u0438, \u0449\u043E \u0432\u0438 \u0432\u0432\u0435\u043B\u0438: \r\n \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B:  ".concat(positive, " \r\n \u0432\u0456\u0434\u2019\u0454\u043C\u043D\u0438\u0445:  ").concat(negative, " \r\n \u043D\u0443\u043B\u0456\u0432:  ").concat(zeros, "  \r\n \u043F\u0430\u0440\u043D\u0438\u0445:  ").concat(even, "  \r\n \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445:  ").concat(odd));
} // Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


var dayOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
var currentDay = 0;

while (confirm("".concat(dayOfWeek[currentDay], ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
  if (currentDay >= dayOfWeek.length - 1) {
    currentDay = 0;
  } else {
    currentDay++;
  }
} // Максимум
// // Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: 
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». 
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. 
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
// const firstValue = 0;
// const lastValue = 100;
// const data = Array.from(Array(lastValue).keys())
// console.log('array 0:100', data);
// let predictedValue = 0;
// const getAValue = (array, firstValue, lastValue, target = 0) => {
//     const middleValue = Math.floor((firstValue + (lastValue - firstValue)) / 2) 
//     console.log('middleValue', middleValue); 
//     return array[0]
// }
// getAValue(data, firstValue, lastValue);
// function binarySearch(arr, val, start = 0, end = arr.length - 1) {
//     const mid = Math.floor((start + end) / 2);
//     let result 
//     console.log('endValue', end);
//     if (val === arr[mid]) {
//         result = mid
//         console.log('result', result)
//       return result;
//     }
//     if (start >= end) {
//         result = -1
//         console.log('result', result)
//       return result;
//     }
//         result = val < arr[mid]
//         ? binarySearch(arr, val, start, mid - 1)
//         : binarySearch(arr, val, mid + 1, end)
//         console.log('result', result)
//       return result;
//     // return val < arr[mid]
//     //   ? binarySearch(arr, val, start, mid - 1)
//     //   : binarySearch(arr, val, mid + 1, end);
//   }
// const inputValue = prompt('Вкажіть число...');
// console.log('inputValue', inputValue);
// binarySearch(data, inputValue)
// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


var output = "Таблиця множення \n\r";

for (var _i = 2; _i <= 9; _i++) {
  output += "\u0414\u043B\u044F \u0447\u0438\u0441\u043B\u0430 ".concat(_i, " \n\r");

  for (var j = 1; j <= 10; j++) {
    output += "".concat(_i, " * ").concat(j, " = ").concat(_i * j, "\n\r");
  }
}

console.log(output); // Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
///* Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */

var num = prompt("\u0426\u0435 \u0437\u0430\u0434\u0430\u0447\u043A\u0430 \u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0457 \u0434\u043E\u043C\u0430\u0448\u043A\u0438, \u044F\u043A\u0430 \u0431\u0443\u043B\u0430 \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u0430 \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u0437\u0430\u0433\u0443\u0433\u043B\u0435\u043D\u043D\u044F. \u041F\u0440\u043E\u0448\u0443 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0447\u0438 \u0442\u0430\u043A\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435? :) \n\r \u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0442\u0440\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E:"); //32.1

var firstnum = String(num % 10); //1

var secondNum = String(Math.floor(num % 100 / 10));
var thirdNum = String(Math.floor(num / 100));
alert(firstnum + secondNum + thirdNum);