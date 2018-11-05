import "../style/app.scss";
import { $, shuffle } from "./helper.js";

// function component(el = "div") {
//   let element = document.createElement(el);

//   element.innerHTML = "Let Go !!!";
//   element.classList.add("test");

//   return element;
// }
// const wrapper = $(".wrapper");
// wrapper.appendChild(component());

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

const cardTemplate = list => list.reduce((ac, { id, value }) => (ac += `<div class="card-${id}">${value}</div>`), ``);

const gameController = {
  cards: [],
  init(list) {
    // this.cards = shuffle(list);
    this.cards = goCards;
    $(".cardList").innerHTML = cardTemplate(this.cards);
  },
  toss() {}
};
gameController.init(goCards);
