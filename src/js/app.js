import "../style/app.scss";
import { cardTemplate, playerCardTemplate, winnerTemplate } from "./template";
import { $, shuffle, $All } from "./helper.js";
import scoreHelper from "./scoreHelper";
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
  },
  renderScore(scoreMap) {
    const playerScoreList = $All(`[data-player]`);
    playerScoreList.forEach(el => {
      const playerSocre = scoreMap.get(+el.dataset.player);
      el.innerText = playerSocre;
    });
    const winner = scoreMap.get("winner");
    this.renderResult(winner);
  },
  renderResult(winner) {
    $(".winnerBox").innerHTML = winnerTemplate(winner);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  gameController.init(goCards);
  gameController.makePlayerSet();
  scoreHelper.getPlayerCards(gameController.toss());
  gameController.renderScore(scoreHelper.tossScore());
});
