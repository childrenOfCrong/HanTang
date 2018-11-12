import { playerTemplate, speechBubbleTemplate } from "./template";
import { $, $All, validateSelector } from "../helper";
class PlayerView {
  constructor({ playerEl, ID }) {
    validateSelector(playerEl);
    this.$playerEl = $(playerEl);
    this.ID = ID;
  }
  //나중에 renderMethods로 통합 예정 
  renderTemplate(playerInfo){
    this.render(playerInfo);
    this.setCardBackground(playerInfo.cardSet);
  }
  render(playerInfo) {
    this.$playerEl.innerHTML = playerTemplate(playerInfo);
  }
  setCardBackground(cardSet) {
    const cardELList = [...$All(".card", this.$playerEl)];
    if (this.ID !== 0) {
      cardELList.forEach(el => el.classList.add("back"));
    }
    cardSet.forEach((el, i) => {
      cardELList[i].style.background = `url(${el.img}) no-repeat 50% 50%`;
      cardELList[i].style.backgroundSize = "cover";
    });
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
  updateView({ status }) {
    // if(status==='die') return ; 
    // if
    // // {id: 1, profile: 1, cardSet: Array(1), money: 8, status: "call", …}
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
