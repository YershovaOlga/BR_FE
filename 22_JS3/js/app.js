// Мінімум
// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const age = parseInt(prompt('Вкажіть ваш вік'));
if (isNaN(age) || age < 0 || age > 100) {
    alert('Неправильно введені дані!');
} 
else {
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
}


// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const userNumber = parseInt(prompt('Вкажіть число від 0 до 9'));
const specialSymbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
    alert('Неправильно введені дані!');
} 
else {
    alert(`Спецсимвол для числа ${userNumber} = ${specialSymbols[userNumber]}`);
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const userNumFrom = parseInt(prompt('Вкажіть початкове число'));
const userNumTo = parseInt(prompt('Вкажіть кінцеве число'));
let sum = 0;
if (isNaN(userNumFrom) || isNaN(userNumTo) || userNumFrom > userNumTo || (userNumFrom == 0 && userNumTo == 0)) {
    alert('Неправильно введені дані!');
}
else {
    for (let index = userNumFrom; index <= userNumTo; index++) {
        sum = sum + index;
    }
    alert(`Сума чисел від ${userNumFrom} до ${userNumTo} дорівнює ${sum}.`);
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const userNumFirst = parseInt(prompt('Вкажіть перше число'));
const userNumSecond = parseInt(prompt('Вкажіть друге число'));
if (isNaN(userNumFirst) || isNaN(userNumSecond)) {
    alert('Неправильно введені дані!');
}
else {
    let first = Math.abs(userNumFirst);
    let second = Math.abs(userNumSecond);
    while(second) {
        let temp = second;
        second = first % second;
        first = temp;
    }
    alert(`Найбільший спільний дільник для чисел ${userNumFirst} та ${userNumSecond} = ${first}`);
}

// Запитай у користувача число і виведи всі дільники цього числа.
const userNum = parseInt(prompt('Вкажіть число'));
let divisors = [];
if (isNaN(userNum)) {
    alert('Неправильно введені дані!');
}
else {
    for (let i = 2; i * i <= userNum; ++i)
        if (userNum % i == 0) {
            divisors.push(i);
            if (i != (userNum / i)) {
                divisors.push(userNum / i); 
            }
        }
        alert(`Всі дільники ${userNum}: ${divisors}`);
}

// Норма
// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const userNumFive = parseInt(prompt('Вкажіть п’ятирозрядне число'));

if (isNaN(userNumFive) || userNumFive < 10000 || userNumFive > 99999) {
    alert('Неправильно введені дані!');
}
else {
    const userNumConv = Array.from(String(userNumFive), Number);
    if (userNumConv[0] === userNumConv[4] && userNumConv[1] === userNumConv[3]) {
        alert(`${userNumFive} - паліндром.`);
    }
    else {
        alert(`${userNumFive} - не паліндром.`);
    }
}

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const purchaseAmount = prompt(`Вкажіть суму вашої покупки для розрахунку знижки`)
if (isNaN(purchaseAmount)) {
    alert('Неправильно введені дані! Введіть лише цифри!');
}
else {
    if (purchaseAmount <= 199) {
        alert(`${purchaseAmount} грн. - сума вашої покупки`);
    }
    else {
        if (purchaseAmount >= 200 && purchaseAmount <= 299) {
            alert(`Сума вашої покупки з урахуванням знижки 3% = ${(purchaseAmount * 97 / 100).toFixed(2)} грн.`)
        }
        if (purchaseAmount >= 300 && purchaseAmount <= 499) {
            alert(`Сума вашої покупки з урахуванням знижки 5% = ${(purchaseAmount * 95 / 100).toFixed(2)} грн.`)
        }
        if (purchaseAmount >= 500) {
            alert(`Сума вашої покупки з урахуванням знижки 7% = ${(purchaseAmount * 93 / 100).toFixed(2)} грн.`)
        }
    }
}

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
const userNumTen = prompt('Вкажіть 10 чисел, розділених комою:'); // 2,10,5,3,9,7,-3,0,85,100
const userNumTenArray = JSON.parse("[" + userNumTen + "]");
if (userNumTenArray.length != 10) {
    alert('Неправильно введені дані!');
}
else {
    let positive, negative, zeros, even, odd;
    positive = negative = zeros = even = odd = 0;
    for (let index = 0; index < userNumTenArray.length; index++) {
        const element = userNumTenArray[index];
        if (element > 0) {
            positive++;
        }
        else if (element < 0) {
             negative++;
        }
        else {
            zeros++;
        }

        if (element % 2 == 0) {
            even++;
        }
        else {
            odd++;
        }
    }
    alert(`Із введених вами даних можемо сказати, що ви ввели: \r\n додатніх чисел:  ${positive} \r\n від’ємних:  ${negative} \r\n нулів:  ${zeros}  \r\n парних:  ${even}  \r\n непарних:  ${odd}`);
}


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const dayOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let currentDay = 0;
while (confirm(`${dayOfWeek[currentDay]}. Хочеш побачити наступний день?`)) {
    if (currentDay >= dayOfWeek.length - 1) {
        currentDay = 0;
    }
    else {
        currentDay++;
    }
}

// Максимум
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
let output = "Таблиця множення \n\r";
for (let i = 2; i <= 9; i++) {
    output += `Для числа ${i} \n\r`;
    for (let j = 1; j <= 10; j++) {
        output += `${i} * ${j} = ${i*j}\n\r`;
    }
}
console.log(output);

// Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


///* Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення). */
let num = prompt(`Це задачка з попередньої домашки, яка була вирішена методом загуглення. Прошу перевірити чи таке рішення правильне? :) \n\r Вкажіть тризначне число:`); //32.1
let firstnum = (String(num % 10)); //1
let secondNum = (String(Math.floor(num % 100 / 10)));
let thirdNum = (String(Math.floor(num / 100)));
alert(firstnum + secondNum + thirdNum);