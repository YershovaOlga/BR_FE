// Мінімум

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
alert (`Привіт! Вся моя домашка в консолі, тому натискай  F12 та дивись там :)`)

function argumentsCount() {
    console.log(`Кількість аргументів, переданих до функції: ${arguments.length}`);
}
argumentsCount();
argumentsCount(1, 2);
argumentsCount("hjf", 0, 12);
argumentsCount("jhj");


// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
function compareNumbers(numOne, numTwo) {
    if (isNaN(numOne) || isNaN(numTwo)) {
        alert('я можу порівнювати тільки числа!! Введіть правильне значення!')
        return;
    }
    if (numOne < numTwo) {
        return -1;
    }
    if (numOne > numTwo) {
        return 1;
    }
    return 0;
}
console.log(`порівняння чисел -30 та 3 = ${compareNumbers(-30, 3)}`);
console.log(`порівняння чисел 0 та 3 = ${compareNumbers(0, 3)}`);
console.log(`порівняння чисел 30 та -3 = ${compareNumbers(30, -3)}`);
console.log(`порівняння чисел 1000 та 1000 = ${compareNumbers(1000, 1000)}`);


// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    if (n === 1) {
      return 1;
    }
    
    return n * factorial(n - 1);
  }
  
console.log(factorial(1));
console.log(factorial(10));  
console.log(factorial(2));
console.log(factorial(6));
console.log(factorial(3));

function factorialCycle(x) { // 3
    let result = 1;
    if (x === 1) {
        return result; 
    }
    for (let index = 2; index <= x; index++) {
        result = result * index;
    }
    return result; 
}
console.log(factorialCycle(1));
console.log(factorialCycle(10));  
console.log(factorialCycle(2));
console.log(factorialCycle(6));
console.log(factorialCycle(3));

// // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function convertNumbers(hundreds, tens, ones) {
    return (hundreds * 100) + (tens * 10) + ones;
}
console.log(convertNumbers(1, 4, 9));
console.log(convertNumbers(9, 9, 9));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function square(length) {
    if (arguments.length > 2) {
        alert('Не можу обчислити площу');
        return;
    }
    if (arguments.length === 2) {
        return length * arguments[1];
    }
    return length * length;
}

console.log(square(9, 5));
console.log(square(9));
// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(inputNumber) {
    let sum = 0;
    for (var i = 1; i < inputNumber; i++) {
  
      if (inputNumber % i == 0) {
        sum += i;
      }
    }
  
    if (sum == inputNumber) {
      return true;
    }
 
    return false;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(7));

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findPerfectNumbers(minNumber, maxNumber) {
    const result = [];
    if (isNaN(minNumber) || isNaN(maxNumber) || maxNumber < minNumber) {
        alert('Не правильно вказаний діапазон!');
        return result;
    }
    
    for (let index = minNumber; index <= maxNumber; index++) {
        if (isPerfectNumber(index)) {
           result.push(index); 
        }
    }
    return result;
}

console.log(`Досконалi числa у заданому вами діапазоні = ${findPerfectNumbers(1, 1000).join(", ")}`);