import { playerTemplate } from "./template";
import BetView from "./BetView";
import PlayerView from "./PlayerView";
import { $, validateSelector, validateSearchElement } from "../helper";

class GameView {
  constructor({ startBtn, betView, selectBoxView, playerViewList }) {
    Object.assign(this, { startBtn, betView, selectBoxView, playerViewList });
  }
  bindStart(startHandler) {
    this.startBtn.start([() => this.betView.start(), startHandler]);
  }
  render({ betMoney, players }) {
    this.playerViewList.render(players);
    // animation money 쌓이게 하기
    // this.playerView.betMoney()
    this.betView.render(betMoney);
  }
}

export default GameView;
