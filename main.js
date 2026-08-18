const productCards = document.querySelectorAll(".card");
const firstProductCard = document.querySelector(".card");
const changeColorAllCardButton = document.querySelector(
  "#change-color-all-cards",
);
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-card",
);
const violetColorHash = "#7a3ebe";
const blueColorHash = "#2f00ff";
console.log(productCards);

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => {
    card.style.backgroundColor = violetColorHash;
  });
});

changeColorFirstCardButton.addEventListener("click", () => {
   firstProductCard.style.backgroundColor = blueColorHash;
  
});
//Покраска первой картчки
//Открытие страницы google.com

const openGooglePageButton = document.querySelector("#open-google");

openGooglePageButton.addEventListener("click", openGoogle);

function openGoogle() {
  const anser = confirm("Вы хотите открыть страницу google.com?");

  if (anser === true) {
    window.open("https://www.google.com");
  } else {
    return;
  }
}

//Вывод в консоль лог

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => {
  outputLog("ДЗ №4");
});

function outputLog(message) {
  alert(message);
  console.log(message);
}

outputLog('ДЗ №4');
