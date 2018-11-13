import { playerTemplate, speechBubbleTemplate } from "./template";
import { $, $All, validateSelector } from "../helper";
class PlayerView {
  constructor({ playerEl, ID }) {
    validateSelector(playerEl);
    this.$playerEl = $(playerEl);
    this.ID = ID;
  }

  render(playerInfo) {
    this.$playerEl.innerHTML = playerTemplate(playerInfo);
    const { score, id } = playerInfo;
    if (score) return this.handleScore(id);
  }
  handleScore(id) {
    if (id !== 0) return;
    const $oscreEl = $(".score");
    $oscreEl.classList.remove("hide");
  }
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.$playerEl.dispatchEvent(evt);
    return this;
  }
  setDecision() {
    if (this.checkUser()) return this.handleUserSelect();
    else return this.handlePcSelect();
  }
  handleUserSelect() {
    console.log("user");
  }

  handlePcSelect() {
    setTimeout(() => {
      const rn = Math.random() * 10;
      const select = rn <= 2 ? "die" : "call";
      this.emit("SELECT", { select, userID: this.ID });
    }, 500);
  }
  checkUser() {
    return this.ID === 0;
  }
  notifySelect() {
    this.emit("SELECT");
  }
}

export default PlayerView;
