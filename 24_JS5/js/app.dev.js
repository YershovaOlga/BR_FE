"use strict";

// Мінімум
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії),
//  і наступні методи для роботи з цим об'єктом:
// 1. Метод, який виводить на екран інформацію про автомобіль.
// 2. Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
car = {
  manufacturer: "audi",
  model: "a5",
  year: 2015,
  averageSpeed: 80,
  fuelTank: 60,
  fuelConsumption: 10,
  drivers: [],
  printInformation: function printInformation() {
    console.log("\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C: ".concat(this.manufacturer, " ").concat(this.model, " ").concat(this.year, " ").concat(this.averageSpeed, " ").concat(this.fuelTank, " ").concat(this.fuelConsumption, " ").concat(this.drivers));
    return this;
  },
  addDriver: function addDriver(driverName) {
    if (this.checkDriver(driverName) === false) {
      this.drivers.push(driverName);
    }

    return this;
  },
  checkDriver: function checkDriver(driverName) {
    return this.drivers.includes(driverName);
  },
  calculateTrip: function calculateTrip(distance) {
    var time = 0;
    var fuel = 0;
    time = distance / this.averageSpeed;

    if (time > 4) {
      time += parseInt(time / 4);
    }

    fuel = distance * this.fuelConsumption / 100;
    console.log("\u0414\u043B\u044F \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0456\u0457 \u0443 ".concat(distance, " \u043A\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E ").concat(fuel, " \u043B\u0456\u0442\u0440\u0456\u0432 \u043F\u0430\u043B\u0438\u0432\u0430 \u0442\u0430 ").concat(time, " \u0433\u043E\u0434\u0438\u043D"));
  }
};
car.printInformation().addDriver("Oleg").addDriver("Oleg").printInformation();
console.log(car.checkDriver("Pavlo"));
car.calculateTrip(1000); // Норма
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1. Для виведення часу на екран.
// 2. Зміни часу на передану кількість секунд.
// 3. Зміни часу на передану кількість хвилин.
// 4. Зміни часу на передану кількість годин.
// 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  printTime: function printTime() {
    console.log("\u0417\u0430\u0434\u0430\u043D\u0438\u0439 \u0447\u0430\u0441 \u0441\u043A\u043B\u0430\u0434\u0430\u0454: ".concat(this.hours, " \u0433\u043E\u0434\u0438\u043D ").concat(this.minutes, " \u0445\u0432\u0438\u043B\u0438\u043D ").concat(this.seconds, " \u0441\u0435\u043A\u0443\u043D\u0434."));
    return this;
  },
  setHours: function setHours(addHours) {
    this.hours += addHours;

    if (this.hours > 24) {
      this.hours = this.hours % 24;
    }

    return this;
  },
  setMinutes: function setMinutes(addedMinutes) {
    this.minutes += addedMinutes;

    if (this.minutes > 59) {
      this.setHours(Math.trunc(this.minutes / 60));
      this.minutes = this.minutes % 60;
    }

    return this;
  },
  setSeconds: function setSeconds(addedSeconds) {
    this.seconds += addedSeconds;

    if (this.seconds > 59) {
      this.setMinutes(Math.trunc(this.seconds / 60));
      this.seconds = this.seconds % 60;
    }

    return this;
  }
};
time.printTime();
time.setSeconds(18250).printTime();
time.setMinutes(50).printTime();
time.setHours(40).printTime(); // Максимум
// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1. Складання 2-х об'єктів-дробів.
// 2. Віднімання 2-х об'єктів-дробів.
// 3. Множення 2-х об'єктів-дробів.
// 4. Ділення 2-х об'єктів-дробів.
// 5. Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

var operations = {
  gcd: function gcd(x, y) {
    return !y ? x : this.gcd(y, x % y);
  },
  lcm: function lcm(x, y) {
    return x * y / this.gcd(x, y);
  },
  addFraction: function addFraction(fractionOne, fractionTwo) {
    var result = {
      numerator: 0,
      denominator: 1
    };

    if (fractionOne.denominator == fractionTwo.denominator) {
      result.denominator = fractionOne.denominator;
      result.numerator = fractionOne.numerator + fractionTwo.numerator;
    } else {
      var lmd = this.lcm(fractionOne.denominator, fractionTwo.denominator);
      result.denominator = lmd;
      result.numerator = lmd / fractionOne.denominator * fractionOne.numerator + lmd / fractionTwo.denominator * fractionTwo.numerator;
    }

    return this.compactFraction(result);
  },
  substractFraction: function substractFraction(fractionOne, fractionTwo) {
    var result = {
      numerator: 0,
      denominator: 1
    };

    if (fractionOne.denominator == fractionTwo.denominator) {
      result.denominator = fractionOne.denominator;
      result.numerator = fractionOne.numerator - fractionTwo.numerator;
    } else {
      var lmd = this.lcm(fractionOne.denominator, fractionTwo.denominator);
      result.denominator = lmd;
      result.numerator = lmd / fractionOne.denominator * fractionOne.numerator - lmd / fractionTwo.denominator * fractionTwo.numerator;
    }

    return this.compactFraction(result);
  },
  multiplyFraction: function multiplyFraction(fractionOne, fractionTwo) {
    var result = {
      numerator: fractionOne.numerator * fractionTwo.numerator,
      denominator: fractionOne.denominator * fractionTwo.denominator
    };
    return this.compactFraction(result);
  },
  divisionFraction: function divisionFraction(fractionOne, fractionTwo) {
    var result = {
      numerator: fractionOne.numerator * fractionTwo.denominator,
      denominator: fractionOne.denominator * fractionTwo.numerator
    };
    return this.compactFraction(result);
  },
  compactFraction: function compactFraction(fraction) {
    var gcd = this.gcd(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / gcd,
      denominator: fraction.denominator / gcd
    };
  }
};
var fractionOne = {
  numerator: 8,
  denominator: 12
};
var fractionTwo = {
  numerator: 2,
  denominator: 4
};
console.log("\u0434\u0440\u0456\u0431 \u043F\u0435\u0440\u0448\u0438\u0439 ".concat(fractionOne.numerator, "/").concat(fractionOne.denominator));
console.log("\u0434\u0440\u0456\u0431 \u0434\u0440\u0443\u0433\u0438\u0439 ".concat(fractionTwo.numerator, "/").concat(fractionTwo.denominator));
console.log(operations.addFraction(fractionOne, fractionTwo));
console.log(operations.substractFraction(fractionOne, fractionTwo));
console.log(operations.multiplyFraction(fractionOne, fractionTwo));
console.log(operations.divisionFraction(fractionOne, fractionTwo));