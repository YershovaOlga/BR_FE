// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt('Як вас звуть?');
alert('Привіт, ' + userName + "!");

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const userAge = prompt('Вкажіть свій рік народження?');
const userAgeConvert = parseFloat(userAge);
const year = 2022;
alert(`Давайте подивимось правді в очі, Вам:  ${year - userAge}` + ` рік (рочки) :)`);


// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const sideLenght = prompt ('Вкажіть довжину сторони квадрату?');
alert(`Периметр квадрата дорівнює: ${sideLenght * 4}`);

// Запитай у користувача радіус кола і виведи площу такої окружності.
const circleRadius = prompt('Вкажіть радіус кола?')
const circleRadiusConvert = parseFloat(circleRadius);
if(circleRadius > 0) {
    const circleSquare = Math.pow((Math.PI * circleRadiusConvert) , 2);
    alert(`Площа кола дорівнює: ${circleSquare}`)
}

/* Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. 
Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно. */
const distance = prompt('Вкажіть відстань в кілометрах між двома містами?')
const distanceConvert = parseFloat(distance);
const time = prompt('Вкажіть за скільки годин хочете дістатися до кінцевого пункту?')
const timeConvert = parseFloat(time);

if(distanceConvert > 0) {
    const result = distanceConvert / timeConvert;
    alert(`Вам необхідно рухатися зі швидкістю: ${result}` + `км/год. Але пам'ятайте, нещодавно збільшився штраф за перевищення швидкості, тож не перевищуйте!`)
}

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
const amountDollar = prompt('Вкажіть кількість долларів, які хочете обміняти?');
const amountDollarConvert = parseFloat(amountDollar);
const exchangeRateD_E = 1.004;

if(amountDollarConvert > 0) {
    const resultExchangeRate = amountDollarConvert * exchangeRateD_E;
    alert(`Ви отримаєте: ${resultExchangeRate}` + `евро.`)
}

alert (`На цьому все, приходьте ще! Слава Україні!`)