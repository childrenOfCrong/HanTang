import { playerTemplate } from "./template";
import { $ } from "../helper";
class PlayerView {
  constructor({ player, ID }) {
    this.playerEl = $(player);
    this.ID = ID;
    this.init();
  }
  render(playerData) {
    this.playerEl.innerHTML = playerTemplate(playerData);
  }
  init() {}
  setCallorDie() {
    if (this.ID === 0) {
    } else {
    }
  }
  notifyCallorDie() {}
}

export default PlayerView;
