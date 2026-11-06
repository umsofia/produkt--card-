

// Функция отрисовки (вставьте сюда ваш код для создания карточек)
function renderCards(count) {
    console.log(`Начинаем отрисовку ${count} карточек...`);
    // [Ваш код отрисовки карточек должен быть здесь]
}

// Функция запроса и проверки числа
function getValidNumber() {
    const input = prompt("Пожалуйста, введите число от 1 до 5:");
    const count = parseInt(input, 10);

    if (isNaN(count) || count < 1 || count > 5) {
        alert("Ошибка! Вы ввели некорректное число.");
        return getValidNumber(); // Рекурсивный вызов
    }
    return count;
}

// 2. ЗАТЕМ ОБЪЯВЛЯЕМ ГЛАВНУЮ УПРАВЛЯЮЩУЮ ФУНКЦИЮ
function initCardGeneration() {
    const numberOfCards = getValidNumber(); 
    
    // Теперь эта строка сработает без ошибок, так как функция renderCards объявлена выше!
    renderCards(numberOfCards); 
}

// 3. И ТОЛЬКО В САМОМ КОНЦЕ ЗАПУСКАЕМ ПРОГРАММУ
initCardGeneration();

// 1. Исправленный массив продуктов с  данными
const products = [
  { 
    title: "Увложняющий мусс",
    description: "Интенсивно очищает, не повреждает защитный барьер кожи.",
    "skin-type": "для нормальной кожи",
    structure: ["минералы", "витамины С, А, РР, В И Е", "солнцезащитные компоненты"],
    price: "1650 "
  },
  { 
    title: "Подарочный набор №1",
    description: "Набор, состоящий из увлажняющего крема и маски.",
    "skin-type": "для нормальной кожи",
    structure: ["воски", "минералы", "масла"],
    price: "4700 р."
  },
  { 
    title: "Подарочный набор №5",
    description: "Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.",
    "skin-type": "для нормальной кожи",
    structure: ["активные натуральные комплексы", "витамины С, А, РР, В И Е", "солнцезащитные компоненты"],
    price: "7500р."
  }
];

// 2. Находим контейнер для карточек и шаблон (синхронизировано с вашим HTML)
const productTemplate = document.getElementById('product-template');
const productList = document.querySelector('.container_cards'); 

if (productTemplate && productList) {
  products.forEach(product => {
    // Клонируем шаблон карточки
    const productClone = productTemplate.content.cloneNode(true);
    
    // Заполняем изображение (если в массиве появится ссылка на картинку, она сразу отобразится)
    const image = productClone.querySelector('.product_card_img');
    if (image) {
      image.src = product.img || "https://picsum.photos"; // Заглушка, если картинки нет в массиве
      image.alt = product.title;
    }

    // Название товара (берём свойство title из вашего массива)
    const titleElement = productClone.querySelector('.product_card_title');
    if (titleElement) titleElement.textContent = product.title;

    // Тип кожи
    const skinElement = productClone.querySelector('.product_skin-type');
    if (skinElement) skinElement.textContent = product["skin-type"];

    // Описание товара
    const descElement = productClone.querySelector('.product_description');
    if (descElement) descElement.textContent = product.description;

    // Состав (объединяем массив строк в одну строку через запятую)
    const structureElement = productClone.querySelector('.product_list-structure');
    if (structureElement) {
      structureElement.textContent = `Состав: ${product.structure.join(', ')}`;
    }

    // Цена товара
    const priceElement = productClone.querySelector('.card_price');
    if (priceElement) priceElement.textContent = product.price;

    // Добавляем готовую карточку на страницу
    productList.appendChild(productClone);
  });
} else {
  console.error("Не найден шаблон #product-template или контейнер .container_cards");
}

// 3. Исправленный метод reduce для сбора описаний продуктов
const productDescription = products.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc; // Обязательно возвращаем аккумулятор!
}, {}); // Начальное значение — пустой объект {} вместо нуля

console.log("Собранные описания продуктов:", productDescription);
