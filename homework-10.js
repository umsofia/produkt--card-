import{products}from"./product.js"
const getCardCount=()=>{
  let cout=Number(promt("Сколько карточек отобразить? ОТ 1 до 5"));
 while(count < 1 || count > 5 || isNaN(count)){
  count= +promt("Некорректный ввод! Показываем все карточки" от 1 до  5);
 }
 return count;
  

  if (!isNaN(count) && count >= 1 && count <= 5) {
    return count;
  }
   else {
    alert ("Некорректный ввод! Показываем все 5 карточек");
    return 5;
  }
}

// Запуск программы
const containerCards = document.querySelector(".container_cards");
const productTemplate = document.querySelector(".product-template");

 console.log(containerCards);
 console.log(productTemplate)

const renderProduct = (products) => {
  products.forEach((products,index)=>{
     if(index < count){
      const productClone = productTemplate.content.cloneNode(true);
      const images = productClone.querySelector(".product_card_img");

      images.src=product.img;
      images.alt=product.title;
}
 ")";

      productClone.querySelector(".card_title").textContent = product.title; 
      productClone.querySelector(".skin-type").textContent = product.skinType; 
      productClone.querySelector(".description").textContent = product.description; 
      productClone.querySelector(".list-structure").textContent = product.listStructure; 
      productClone.querySelector(".product-price").textContent = product.price; 
  
      
      productClone.querySelector("card_skin-type.").textContent=
      product.skinType;
      productClone.querySelector("card_title").textContent=
      product.title;
      productClone.querySelector("card_description").textContent=
      product.description;
      const items=productClone.querySelectorAll(".card_item");
      const productItems=[product.item1,product.item2,product.item3,product.item4,product.item5];
      items.forEach((item,index)=>{
        item.textContent=productItems[index];
      });
      productClone.querySelector(".card_price-text").textContent=
      product.priceText;
      productClone.querySelector(".card_price").textContent=



renderProduct(numberOfCards);
// 2. Находим контейнер для карточек и шаблон
// Пример массива продуктов (замените на свои данные)
const products = [
  {
    title: "Product 1",
    description: "Описание продукта 1",
    img: "img/product1.jpg",
    skinType: "Для всех типов кожи",
    listStructure: "Состав: ...",
    item1: "Пункт 1",
    item2: "Пункт 2",
    item3: "Пункт 3",
    priceText: "Цена:",
    price: 1000,
    currency: "₽"
  },
  
];

// 1. Собираем описания продуктов в объект
const productDescription = products.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});

console.log(productDescription);
      

      // Заполнение основных текстовых полей
      const cardTitle = productClone.querySelector(".product_card_title");
      if (cardTitle) cardTitle.textContent = product.title;

      const skinType = productClone.querySelector(".product_skin-type");
      if (skinType) skinType.textContent = product.skinType;

      const description = productClone.querySelector(".product_description");
      if (description) description.textContent = product.description;

      const listStructure = productClone.querySelector(".product_list-structure");
      if (listStructure) listStructure.textContent = product.listStructure;

      // Наполнение пунктов списка (item1, item2, item3)
      const items = productClone.querySelectorAll(".card_item");
      const productItems = [product.item1, product.item2, product.item3];

      items.forEach((item, index) => {
        if (productItems[index] !== undefined) {
          item.textContent = productItems[index];
        }
      });

      // Заполнение блока с ценой
      const priceText = productClone.querySelector(".card_price-text");
      if (priceText) priceText.textContent = product.priceText;

      const cardPrice = productClone.querySelector(".card_price");
      if (cardPrice) {
        cardPrice.textContent = `${product.price} ${product.currency}`;
      }

      // Добавляем готовую карточку в DOM
      productList.appendChild(productClone);
    
  else {
    console.error("Ошибка: Проверьте селекторы .container_cards или #product-template в HTML.");
  }

  

    // Заполнение блока с ценой
    const priceText = productClone.querySelector(".card_price-text");
    if (priceText) priceText.textContent = product.priceText;

    const cardPrice = productClone.querySelector(".card_price");
    if (cardPrice) {
      cardPrice.textContent = `${product.price} ${product.currency}`;
    }

    // Добавляем готовую карточку в DOM
    productList.appendChild(productClone);


else {
  console.error("Ошибка: Проверьте селекторы .container_cards или #product-template в HTML.");
}

      
// 1. Исправление reduce: убран начальный ноль (нужен {}), добавлен возврат аккумулятора return
const productDescripshion = products.reduce(acc, product) => 
  const productDescription=produts.reduce((acc,product)=>{
    acc[product.title]=product.description;
    return acc; 
}, {}); 

console.log(productDescripshion); 

const productList = document.querySelector(".container_cards"); 
// 2. Исправление селектора: добавлен знак id (#) и удалена дублирующая строка с getElementBy


products.forEach(product => { 
  const productClone = productTemplate.content.cloneNode(true); 
  
  const image = productClone.querySelector(".product_card_img"); 
  image.src = product.img; 
  image.alt = product.title; 
  
  // 3. Обратите внимание: в слове .product_сard_title русская буква 'с', лучше исправить в HTML и тут на английскую 'c'
  productClone.querySelector(".card_title").textContent = product.title; 
  productClone.querySelector(".skin-type").textContent = product.skinType; 
  productClone.querySelector(".description").textContent = product.description; 
  productClone.querySelector(".list-structure").textContent = product.listStructure; 
  productClone.querySelector(".product-price").textContent = product.price; 
  
  // 4. Опечатка quarySelectorAll -> querySelectorAll
  const items = productClone.querySelectorAll(".card_item"); 
  
  // 5. Опечатка cost -> const
  const productItems = [product.item1, product.item2, product.item3,product.item4,product.item5]; 
  
  // 6. Ошибка в имени массива: items вместо item
  items.forEach((item, index) => { 
    item.textContent = productItems[index]; 
  }); 
  
  productClone.querySelector(".card_price-text").textContent = product.priceText; 
  
  // 7. Опечатка quarySelector -> querySelector, а также pice -> price
  productClone.querySelector(".card_price").textContent = `${product.price} ${product.currency}`; 
  
  productList.appendChild(productClone); 
});
...If(card===undefined){
...console.log("Ошибка");
} else{

}
  


