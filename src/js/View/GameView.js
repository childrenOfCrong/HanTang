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
  bindListenDecision(listenHandler) {
    this.selectBoxView.$selectorBoxEl.addEventListener("SELECT", e => {
      listenHandler(e);
    });
    [...this.playerViewList.playerList].forEach(player =>
      player.$playerEl.addEventListener("SELECT", e => {
        listenHandler(e);
      })
    );
  }
  render({ betMoney, players }) {
    this.playerViewList.render(players);
    // animation money 쌓이게 하기
    // this.playerView.betMoney()
    this.betView.render(betMoney);
  }
  notifyDecision(decision) {
    console.log("decision", decision);
    this.playerViewList.addDecision(decision);
  }
}

export default GameView;
