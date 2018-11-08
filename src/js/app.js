import "../style/app.scss";
import { $, shuffle, $All } from "./helper.js";
import StartButtonView from "./View/StartButtonView";
import BetView from "./View/BetView";
import PlayerView from "./View/PlayerView";
import SelectorBoxView from "./View/SelectorBoxView";
import PlayerViewList from "./View/PlayerViewList";
import GameView from "./View/GameView";
import Controller from "./Controller/Controller";
import Delear from "./Model/Dealer";
import { cards } from "./Model/cards";

const playerViewList = new PlayerViewList([
  new PlayerView({
    playerEl: ".player-0",
    ID: 0
  }),
  new PlayerView({
    playerEl: ".player-1",
    ID: 1
  }),
  new PlayerView({
    playerEl: ".player-2",
    ID: 2
  })
]);

const gameView = new GameView({
  startBtn: new StartButtonView(".startButton"),
  betView: new BetView(".betContainer"),
  selectBoxView: new SelectorBoxView(".selectorContainer"),
  playerViewList
});

const gameModel = new Delear(cards);

// dealer.start();
// dealer.handoutCards(game.cards, game.players);
// dealer.bet();
// dealer.getScore();

document.addEventListener("DOMContentLoaded", () => {
  const controller = new Controller({
    view: gameView,
    model: gameModel
  });
});

