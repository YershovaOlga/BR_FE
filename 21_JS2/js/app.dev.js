"use strict";

/* Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.*/
var firstNumber = '0,1';
var secondNumber = '0,2';
var parsedFirstNumber = parseFloat(firstNumber.replace(',', '.'));
var parsedSecondNumber = Number(secondNumber.replace(',', '.'));
var summary = parsedFirstNumber + parsedSecondNumber;
var trimmedSummary = summary.toFixed(1);
alert("\u0421\u0443\u043C\u0430 \u0434\u0432\u043E\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C 0,1 \u0442\u0430 0,2 = ".concat(trimmedSummary));
/* Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді. */

var firstNumberStr = '1';
var firstNumberInt = Number(firstNumberStr);
var secondNumberInt = 2;
var summary2 = firstNumberInt + secondNumberInt;
alert("\u0421\u0443\u043C\u0430 \u0434\u0432\u043E\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u044C '1' \u0442\u0430 2 = ".concat(summary2));
/* Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку. */

var volumeInGb = prompt('Вкажіть обсяг флешки в Гб');
var mbCapacityInGb = 1024;
var volumeInMb = Number(volumeInGb) * mbCapacityInGb;
var fileCapacity = 820;
var filesInMemoryStick = volumeInMb / fileCapacity;
var roundedValueOfFiles = Math.round(filesInMemoryStick);
alert("".concat(roundedValueOfFiles, "  \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0432 820 \u041C\u0431 \u043F\u043E\u043C\u0456\u0449\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0444\u043B\u0435\u0448\u043A\u0443."));
/* Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться. */

var summaryInWallet = prompt('Вкажіть суму грошей в вашому гаманці:');
var summaryInWalletConvert = parseFloat(summaryInWallet);
var priceOfChocolate = prompt('Вкажіть ціну однієї шоколадки:');
var priceOfChocolateConvert = parseFloat(priceOfChocolate);
var amountOfChocolate = summaryInWalletConvert / priceOfChocolate;
var roundingAmountOfChocolate = Math.floor(amountOfChocolate);
var change = summaryInWalletConvert % priceOfChocolate;
var changeCut = change.toFixed(2);
alert("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A: ".concat(roundingAmountOfChocolate, " \u0442\u0430 \u0440\u0435\u0448\u0442\u0430 ").concat(changeCut, " \u0433\u0440\u043D."));
/* Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */

var threeDigitNumber = prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0442\u0440\u0438\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E:");
var randomReverse = Array.from(threeDigitNumber).reverse().join('');
alert("\u0427\u0438\u0441\u043B\u043E \u0437\u0430\u0434\u043E\u043C \u043D\u0430\u043F\u0435\u0440\u0435\u0434: ".concat(randomReverse));
/* Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків. */

var depositAmount = prompt("\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0443, \u044F\u043A\u0443 \u0445\u043E\u0447\u0435\u0442\u0435 \u043F\u043E\u043A\u043B\u0430\u0441\u0442\u0438 \u043D\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442:");
var month = 2;
var interestRate = 5;
var accruedInterestYear = depositAmount / 100 * interestRate;
var accruedInterestMonth = accruedInterestYear / 12 * month;
alert("".concat(accruedInterestMonth.toFixed(2), " - \u0441\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432."));
/* Що повернуть вирази: */

alert("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u0440\u0430\u0437\u0443 \"2 && 0 &&\": ".concat(2 && 0 && 3)); //0

alert("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u0440\u0430\u0437\u0443 \"2 || 0 || 3\": ".concat(2 || 0 || 3)); //2

alert("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u0440\u0430\u0437\u0443 \"2 && 0 || 3\": ".concat(2 && 0 || 3)); //3