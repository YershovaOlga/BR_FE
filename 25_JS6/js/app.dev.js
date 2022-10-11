"use strict";

// Мінімум
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. 
// Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
console.log('Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.');
var products = [{
  name: 'milk',
  quantity: 2,
  purchased: true,
  price: 25.50,
  total: 51.00
}, {
  name: 'eggs',
  quantity: 10,
  purchased: true,
  price: 3.68,
  total: 36.80
}, {
  name: 'meat',
  quantity: 1,
  purchased: false,
  price: 250.0,
  total: 250.00
}, {
  name: 'candy',
  quantity: 1.5,
  purchased: true,
  price: 325.30,
  total: 487.95
}, {
  name: 'fruit',
  quantity: 0.5,
  purchased: false,
  price: 70.00,
  total: 35.00
}];

function printProducts(list) {
  list.forEach(function (element) {
    if (!element.purchased) {
      console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(element.name, "\", \u0443 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 ").concat(element.quantity, ", \u043F\u043E \u0446\u0456\u043D\u0456 ").concat(element.price, ", \u043D\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0439. \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0431\u0443\u0434\u0435 \u0441\u043A\u043B\u0430\u0434\u0430\u0442\u0438: ").concat(element.total));
    }
  });
  list.forEach(function (element) {
    if (element.purchased) {
      console.log("\u0422\u043E\u0432\u0430\u0440 \"".concat(element.name, "\", \u0443 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 ").concat(element.quantity, ", \u043F\u043E \u0446\u0456\u043D\u0456 ").concat(element.price, ", \u0432\u0436\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0439. \u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u0430\u0454: ").concat(element.total));
    }
  });
}

;
printProducts(products);
console.log('--------------------------------------------------------');
console.log('Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.');

function findProductByName(nameOfProduct, list) {
  var result;
  list.forEach(function (element, index) {
    if (element.name == nameOfProduct) {
      result = index;
    }
  });
  return result;
}

;

function purchaseProduct(nameOfProduct, list) {
  var index = findProductByName(nameOfProduct, list);

  if (index != undefined) {
    list[index].purchased = true;
  }

  return list;
}

;
products = purchaseProduct('meat', products);
printProducts(products);
console.log('--------------------------------------------------------'); // Норма
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, 
// а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

console.log('Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)');
var productsTwo = [{
  name: 'milk',
  quantity: 2,
  purchased: true,
  price: 25.50,
  total: 51.00
}, {
  name: 'eggs',
  quantity: 10,
  purchased: true,
  price: 3.68,
  total: 36.80
}, {
  name: 'meat',
  quantity: 1,
  purchased: false,
  price: 250.0,
  total: 250.00
}, {
  name: 'candy',
  quantity: 1.5,
  purchased: true,
  price: 325.30,
  total: 487.95
}, {
  name: 'fruit',
  quantity: 0.5,
  purchased: false,
  price: 70.00,
  total: 35.00
}];
productsTwo.splice(('candy', products), 1);
printProducts(productsTwo); // Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, 
// а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

console.log('--------------------------------------------------------');
console.log('Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці,');
console.log('а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.');

function addProduct(nameOfProduct, quantity, price) {
  var item = productsTwo.findIndex(function (el) {
    return el.name === nameOfProduct;
  });

  if (item == -1) {
    var newItem = {
      name: nameOfProduct,
      quantity: quantity,
      purchased: false,
      price: price,
      total: price * quantity
    };
    productsTwo.push(newItem);
  } else {
    productsTwo[item].quantity += quantity;
  }

  console.log(productsTwo);
}

addProduct("dfgsdf", 10, 20); // Максимум
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

var productsThree = [{
  name: 'milk',
  quantity: 2,
  purchased: true,
  price: 25.50,
  total: 51.00
}, {
  name: 'eggs',
  quantity: 10,
  purchased: true,
  price: 3.68,
  total: 36.80
}, {
  name: 'meat',
  quantity: 1,
  purchased: false,
  price: 250.0,
  total: 250.00
}, {
  name: 'candy',
  quantity: 1.5,
  purchased: true,
  price: 325.30,
  total: 487.95
}, {
  name: 'fruit',
  quantity: 0.5,
  purchased: false,
  price: 70.00,
  total: 35.00
}];
console.log('--------------------------------------------------------');
console.log('Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.');
var totalprice = productsThree.reduce(function (accumulator, productsThree) {
  return accumulator + productsThree.total;
}, 0);
console.log(totalprice);
console.log('--------------------------------------------------------');
console.log('Підрахунок суми всіх (не) придбаних продуктів.');

function totalPriceNo(list) {
  var totalPrice = 0;
  list.forEach(function (element) {
    if (!element.purchased) {
      totalPrice += element.total;
    }
  });
  return totalPrice;
}

console.log(totalPriceNo(productsThree));
console.log('--------------------------------------------------------');
console.log('Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)');

function sortFunction(list, direction) {
  if (direction === 'ASC') {
    list.sort(function (a, b) {
      return b.price - a.price;
    });
  } else {
    list.sort(function (a, b) {
      return a.price - b.price;
    });
  }
}

sortFunction(productsThree, 'kdafgkdjf');
console.log(productsThree); // ASC & DESC