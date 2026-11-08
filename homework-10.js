import { products } from "./product.js";

const getCardCount = () => {
  let count = Number(prompt("Сколько карточек отобразить? От 1 до 5"));

  while (count < 1 || count > 5 || isNaN(count)) {
    count = Number(prompt("Некорректный ввод! Введите число от 1 до 5"));
  }

  return count;
};

const containerCards = document.querySelector(".container_cards");
const productTemplate = document.querySelector(".product-template");

const renderProduct = (count) => {
  if (!containerCards || !productTemplate) {
    console.error("Ошибка: Проверьте селекторы .container_cards или .product-template в HTML.");
    return;
  }

  const limitedProducts = products.slice(0, count);

  limitedProducts.forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);

    const image = productClone.querySelector(".product_cardimg");
    if (image) {
      image.src = product.img;
      image.alt = product.title;
    }

    const title = productClone.querySelector(".card_title");
    if (title) title.textContent = product.title;

    const skinType = productClone.querySelector(".card_skin-type");
    if (skinType) skinType.textContent = product.skinType;

    const description = productClone.querySelector(".description");
    if (description) description.textContent = product.description;

    const listStructure = productClone.querySelector(".list-structure");
    if (listStructure) listStructure.textContent = product.listStructure;

    const items = productClone.querySelectorAll(".card_item");
    const productItems = [product.item1, product.item2, product.item3];

    items.forEach((item, index) => {
      if (productItems[index] !== undefined) {
        item.textContent = productItems[index];
      }
    });

    const priceText = productClone.querySelector(".card_price-text");
    if (priceText) priceText.textContent = product.priceText;

    const cardPrice = productClone.querySelector(".card_price");
    if (cardPrice) {
      cardPrice.textContent = `${product.price} ${product.currency || "₽"}`;
    }

    containerCards.appendChild(productClone);
  });
};

const numberOfCards = getCardCount();
renderProduct(numberOfCards);

  

    