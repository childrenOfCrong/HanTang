import "../style/app.scss";
import { cardTemplate, playerCardTemplate, winnerTemplate } from "./template";

import { $, shuffle, $All } from "./helper.js";
import scoreHelper from "./scoreHelper";

document.addEventListener("DOMContentLoaded", () => {
  $(".startButton").addEventListener("click", e => {
    e.target.classList.add(".hide");
  });
});
