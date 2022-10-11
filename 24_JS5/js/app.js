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
    printInformation: function() {
        console.log(`Інформація про автомобіль: ${this.manufacturer} ${this.model} ${this.year} ${this.averageSpeed} ${this.fuelTank} ${this.fuelConsumption} ${this.drivers}`);
        return this;
    },
    addDriver: function(driverName) {
        if (this.checkDriver(driverName) === false) {
            this.drivers.push(driverName);
        }
        return this;
    },
    checkDriver: function(driverName) {
        return this.drivers.includes(driverName);
    },
    calculateTrip: function(distance) {
        let time = 0;
        let fuel = 0; 
        time = (distance / this.averageSpeed);
        if (time > 4) {
           time += parseInt(time / 4);
        }
        fuel = (distance * this.fuelConsumption) / 100; 
        console.log(`Для подолання дистанції у ${distance} км потрібно ${fuel} літрів палива та ${time} годин`);
    }
}
car.printInformation().addDriver("Oleg").addDriver("Oleg").printInformation();
console.log(car.checkDriver("Pavlo"));
car.calculateTrip(1000);

// Норма
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// 1. Для виведення часу на екран.
// 2. Зміни часу на передану кількість секунд.
// 3. Зміни часу на передану кількість хвилин.
// 4. Зміни часу на передану кількість годин.
// 5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    
    printTime: function() {
        console.log(`Заданий час складає: ${this.hours} годин ${this.minutes} хвилин ${this.seconds} секунд.`);
        return this;
    },
    setHours: function(addHours) {
        this.hours += addHours;

        if(this.hours > 24) {
            this.hours = this.hours % 24;
        }
        return this;
    },
    setMinutes: function(addedMinutes) {
        this.minutes += addedMinutes;

        if(this.minutes > 59) {
            this.setHours(Math.trunc(this.minutes / 60));
            this.minutes = this.minutes % 60;
        }
        return this;
    },
    setSeconds: function(addedSeconds) {
        this.seconds += addedSeconds;

        if(this.seconds > 59) {
            this.setMinutes(Math.trunc(this.seconds / 60));
            this.seconds = this.seconds % 60;
        }
        return this;
    },
}

time.printTime();
time.setSeconds(18250).printTime();
time.setMinutes(50).printTime();
time.setHours(40).printTime();

// Максимум
// Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// 1. Складання 2-х об'єктів-дробів.
// 2. Віднімання 2-х об'єктів-дробів.
// 3. Множення 2-х об'єктів-дробів.
// 4. Ділення 2-х об'єктів-дробів.
// 5. Скорочення об'єкта-дробу.
// (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

const operations = {
    gcd: function(x, y) {
        return !y ? x : this.gcd(y, x % y);
    },

    lcm: function(x, y) {
        return (x * y) / this.gcd(x, y);
    },
    
    addFraction: function(fractionOne, fractionTwo) {
        const result = {
            numerator: 0,
            denominator: 1
        };

        if (fractionOne.denominator == fractionTwo.denominator) {
            result.denominator = fractionOne.denominator;
            result.numerator = fractionOne.numerator + fractionTwo.numerator;
        }

        else {
            const lmd = this.lcm(fractionOne.denominator, fractionTwo.denominator);
            result.denominator = lmd;
            result.numerator = ((lmd / fractionOne.denominator) * fractionOne.numerator) + ((lmd / fractionTwo.denominator) * fractionTwo.numerator);
        }
        return this.compactFraction(result);
    },

    substractFraction: function(fractionOne, fractionTwo) {
        const result = {
            numerator: 0,
            denominator: 1
        };

        if (fractionOne.denominator == fractionTwo.denominator) {
            result.denominator = fractionOne.denominator;
            result.numerator = fractionOne.numerator - fractionTwo.numerator;
        }

        else {
            const lmd = this.lcm(fractionOne.denominator, fractionTwo.denominator);
            result.denominator = lmd;
            result.numerator = ((lmd / fractionOne.denominator) * fractionOne.numerator) - ((lmd / fractionTwo.denominator) * fractionTwo.numerator);
        }
        return this.compactFraction(result);
    },

    multiplyFraction: function(fractionOne, fractionTwo) {
        const result = {
            numerator: fractionOne.numerator * fractionTwo.numerator,
            denominator: fractionOne.denominator * fractionTwo.denominator
        };
        return this.compactFraction(result);
    },

    divisionFraction: function(fractionOne, fractionTwo) {
        const result = {
            numerator: fractionOne.numerator * fractionTwo.denominator,
            denominator: fractionOne.denominator * fractionTwo.numerator
        };
        return this.compactFraction(result);
    },

    compactFraction: function(fraction){
        const gcd = this.gcd(fraction.numerator, fraction.denominator);

        return {
            numerator: fraction.numerator / gcd,
            denominator: fraction.denominator / gcd
        }
    }
}
const fractionOne = { 
    numerator: 8,
    denominator: 12
};

const fractionTwo = { 
    numerator: 2,
    denominator: 4
};

console.log(`дріб перший ${fractionOne.numerator}/${fractionOne.denominator}`);
console.log(`дріб другий ${fractionTwo.numerator}/${fractionTwo.denominator}`);
console.log(operations.addFraction(fractionOne, fractionTwo));
console.log(operations.substractFraction(fractionOne, fractionTwo));
console.log(operations.multiplyFraction(fractionOne, fractionTwo));
console.log(operations.divisionFraction(fractionOne, fractionTwo));