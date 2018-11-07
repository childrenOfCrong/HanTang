import "../style/app.scss";
import { cardTemplate, playerCardTemplate, winnerTemplate } from "./template";
import Coin from "../assets/icons/coin.png";

import { $, shuffle, $All } from "./helper.js";
import scoreHelper from "./scoreHelper";
import makeMockUserList from "./Model/mockModel";

const bindEventHideStartButton = trigger => {
  $(".startButton").addEventListener("click", e => {
    e.target.classList.add("hide");
    trigger();
    // Model에서 넘겨줬다고 가정
    const mockUserList = makeMockUserList();
  });
};

const gameStart = () => {
  $(".betContainer").classList.remove("hide");
};

document.addEventListener("DOMContentLoaded", () => {
  bindEventHideStartButton(gameStart);
});
