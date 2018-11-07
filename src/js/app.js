import "../style/app.scss";
import { cardTemplate, playerCardTemplate, winnerTemplate } from "./template";
import Coin from "../assets/icons/coin.png";

import { $, shuffle, $All } from "./helper.js";
import scoreHelper from "./scoreHelper";

const bindEventHideStartButton = trigger => {
  $(".startButton").addEventListener("click", e => {
    e.target.classList.add("hide");
    trigger();
  });
};

const gameStart = () => {
  $(".betContainer").classList.remove("hide");
};

document.addEventListener("DOMContentLoaded", () => {
  bindEventHideStartButton(gameStart);
});
