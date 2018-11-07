import "../style/app.scss";
import { $, shuffle, $All } from "./helper.js";

import makeMockUserList from "./Model/mockModel";
import PlayerView from "./View/PlayerView";
import BetContainerView from "./View/BetContainerView";

const user = new PlayerView({
  player: ".player-0"
});
const npc1 = new PlayerView({ player: ".player-1" });
const npc2 = new PlayerView({ player: ".player-2" });

const mockUserList = makeMockUserList();

const bindEventstartButton = handler => {
  $(".startButton").addEventListener("click", e => {
    e.target.classList.add("hide");
    handler();
  });
};

const betContainer = new BetContainerView({
  betEl: ".betContainer",
  selectorBoxEl: ".selectorContainer"
});

const gameStart = () => {
  betContainer.show();
  const mockUserList = makeMockUserList();
  playerViewList.forEach((v, i) => v.render(mockUserList[i]));
  betContainer.showSelectorBox();
};

document.addEventListener("DOMContentLoaded", () => {
  bindEventstartButton(gameStart);
});
