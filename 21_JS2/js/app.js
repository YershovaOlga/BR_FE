// /* Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.*/
const firstNumber = '0,1';
const secondNumber = '0,2';
const parsedFirstNumber = parseFloat(firstNumber.replace(',', '.'))
const parsedSecondNumber = Number(secondNumber.replace(',', '.'))
const summary = parsedFirstNumber + parsedSecondNumber
const trimmedSummary = summary.toFixed(1) 
alert(`Сума двох значень 0,1 та 0,2 = ${trimmedSummary}`);

// /* Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді. */
const firstNumberStr = '1'
const firstNumberInt = Number(firstNumberStr)
const secondNumberInt = 2
const summary2 = firstNumberInt + secondNumberInt
alert(`Сума двох значень '1' та 2 = ${summary2}`)

// /* Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку. */
const volumeInGb = prompt('Вкажіть обсяг флешки в Гб')
const mbCapacityInGb = 1024
const volumeInMb = Number(volumeInGb) * mbCapacityInGb
const fileCapacity = 820
const filesInMemoryStick = volumeInMb / fileCapacity
const roundedValueOfFiles = Math.round(filesInMemoryStick)
alert (`${roundedValueOfFiles}  файлів розміром в 820 Мб поміщається на флешку.`)

// /* Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться. */
const summaryInWallet = prompt('Вкажіть суму грошей в вашому гаманці:')
const summaryInWalletConvert = parseFloat(summaryInWallet)
const priceOfChocolate = prompt('Вкажіть ціну однієї шоколадки:')
const priceOfChocolateConvert = parseFloat(priceOfChocolate)
const amountOfChocolate = summaryInWalletConvert / priceOfChocolate
const roundingAmountOfChocolate = Math.floor(amountOfChocolate)
const change = summaryInWalletConvert % priceOfChocolate
const changeCut = change.toFixed(2)
alert (`Кількість шоколадок: ${roundingAmountOfChocolate} та решта ${changeCut} грн.`)

/* Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */
let num = prompt(`Вкажіть тризначне число:`); //32.1
let firstnum = (String(num % 10)); //1
let secondNum = (String(Math.floor(num % 100 / 10)));
let thirdNum = (String(Math.floor(num / 100)));
alert(firstnum + secondNum + thirdNum);
// let rev = 0;
// let lastDigit;
// while(num != 0){
// 	lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// Array.from(threeDigitNumber).reverse().join('');
// alert(`Число задом наперед: ${randomReverse}`)


/* Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків. */
const depositAmount = prompt(`Вкажіть суму, яку хочете покласти на депозит:`)
const month = 2
const interestRate = 5
const accruedInterestYear = (depositAmount / 100) * interestRate
const accruedInterestMonth = (accruedInterestYear / 12) * month
alert(`${accruedInterestMonth.toFixed(2)} - сума нарахованих відсотків.`)

// /* Що повернуть вирази: */
alert(`Значення виразу "2 && 0 &&": ${2 && 0 && 3}`) //0
alert(`Значення виразу "2 || 0 || 3": ${2 || 0 || 3}`) //2
alert(`Значення виразу "2 && 0 || 3": ${2 && 0 || 3}`) //3