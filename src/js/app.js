import "../style/app.scss";
import { cardTemplate } from "./template";
import { $, shuffle } from "./helper.js";

const makeCards = () => {
  const cards = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 2; j++) {
      cards.push({ id: `${i}-${j}`, value: i });
    }
  }
  return cards;
};

const goCards = makeCards();

const gameController = {
  cards: [],
  init(list) {
    this.cards = shuffle(list);
    $(".cardList").innerHTML = cardTemplate(this.cards);
  },
  toss() {}
};

document.addEventListener("DOMContentLoaded", () => {
  gameController.init(goCards);
});
