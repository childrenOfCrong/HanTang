import { playerTemplate, speechBubbleTemplate } from "./template";
import { $, $All, validateSelector } from "../helper";
class PlayerView {
  constructor({ playerEl, ID }) {
    validateSelector(playerEl);
    this.$playerEl = $(playerEl);
    this.ID = ID;
  }
  //나중에 renderMethods로 통합 예정
  render(playerInfo) {
    this.$playerEl.innerHTML = playerTemplate(playerInfo);
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
  updateView({ status, ...playerInfo }) {
    if (status === "die") return;
    const { id, cardSet, money } = playerInfo;
    console.log(id, cardSet, money);
  }
  handlePcSelect() {
    setTimeout(() => {
      const rn = Math.random() * 10;
      const select = rn <= 2 ? "die" : "call";
      this.showSpeechBubble(select);
      this.emit("SELECT", { select, userID: this.ID });
    }, 500);
  }
  checkUser() {
    return this.ID === 0;
  }
  showSpeechBubble(select) {
    debugger;
    const speechTemplate = speechBubbleTemplate(select);
    this.$playerEl.insertAdjacentHTML("beforeend", speechTemplate);
  }
  notifySelect() {
    this.emit("SELECT");
  }
}

export default PlayerView;
