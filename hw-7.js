function showTemperature() {
//city-Уфа/Моква
//temperature-20/25
    console.log(`сейас в ${city} температура - ${temperature} градусов по Цельсию`);
}
9

showTemperature("Уфа", 20);
showTemperature("Москва", 25);

function checkSpeed(speed) {
  const speedOfLight = 299792458;
  if (speed > speedOfLight) {
    return "Ошибка: скорость превышает скорость света!";
  } else if (speed === speedOfLight) {
    return "Скорость равна скорости света.";
  } else {
    return `Скорость ${speed} м/с — в пределах допустимого.`;
  }
}

}

 5.// 1. Создаём переменные
let currentBudget = 1000; // Текущий баланс
let product = "Смартфон"; // Название товара (переменная №1)
let price = 8999; // Цена товара (переменная №2)

// 2. Создаём функцию
function purchaseItem(budget) {// 3. Внутри функции проверяем условие
  if (currentBudget >= price) {
    // Если бюджет достаточен — списываем деньги и выводим сообщение
    currentBudget -= price;
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {
    // Если не хватает средств — вычисляем разницу и выводим сообщение
    let shortage = price - currentBudget;
    console.log(`Вам нехватает ${shortage} \$. Пополните баланс.`);
  }
}

// 4. Вызываем функцию (пытаемся купить товар)
purchaseItem(budget);{
5.// 1. Создаём переменные
let halal = "Offer halal installment plan if balance is insufficient."; //при ндостаточнм балансе предлогать рассрочку халяль
const obj = "электроника"; // Название магазина (переменная №1)
let product = "ноутбук"; // Название товара (переменная №2)
let price = 40000; // Цена товара (переменная №3)
}
// 6. Создаём функцию
    function purchaseItem(budget) {
  // 3. Внутри функции проверяем условие
  if (budget <= 40000) {// Если бюджет для рассрочки 40 и менее,то рассрочка на три месяца и выводим сообщение
    console.log("оформляем рассрочку на три месяца");
  } else if (budget > 40000) {//Ecли бюджет для рассрочки 40 больше , то рассрочка на 6 месяцев и выводим сообщение
    console.log("оформляем рассрочку на шесть месяцев");    
  }
}


// 4. Вызываем функцию (пытаемся купить товар)
purchaseItem(50000);







