import { playerTemplate } from "./template";
import { $, validateSelector } from "../helper";
class PlayerView {
  constructor({ playerEl, ID }) {
    validateSelector(playerEl);
    this.$playerEl = $(playerEl);
    this.ID = ID;
  }
  render(playerInfo) {
    this.$playerEl.innerHTML = playerTemplate(playerInfo);
  }
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.$playerEl.dispatchEvent(evt);
    return this;
  }
  setDecision() {
    console.log("실행했다");
  }
  notifySelect() {
    this.emit("SELECT");
  }
}

export default PlayerView;
