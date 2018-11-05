import "../style/app.scss";
import { cardTemplate, playerCardTemplate } from "./template";
import { $, shuffle } from "./helper.js";
import scoreHelper from "./scoreHelper";
import CardSet from "./CardSet";
import CardList from "./Model/CardList";
import CardListView from "./View/CardListView";

const goCards = new CardList();
const cardListView = new CardListView({
  cardListEl: $("#cardList")
});
console.dir(goCards);
const gameController = {
  cards: [],
  playersCardSet: [],
  init(list) {
    this.cards = shuffle(list);
    $("#cardList").innerHTML = cardTemplate(this.cards);
  },
  makePlayerSet(playerCount = 2) {
    let playerCards = this.cards.slice(0, playerCount * 2);
    const playersCardSet = [];
    for (let i = 0; i <= playerCount; i += 2) {
      const player = [playerCards[i], playerCards[i + 1]];
      playersCardSet.push(player);
    }
    this.playersCardSet = playersCardSet;
    this.renderPlayer();
  },
  renderPlayer() {
    $(".players").innerHTML = playerCardTemplate(this.playersCardSet);
  },
  toss() {
    return this.playersCardSet;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  gameController.init(goCards);
  gameController.makePlayerSet();
  scoreHelper.getPlayerCards(gameController.toss());
});
