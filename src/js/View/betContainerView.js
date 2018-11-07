import { playerTemplate } from "./template";
import { $ } from "../helper";

class BetContainerView {
  constructor({ betEl, selectorBoxEl }) {
    this.betEl = $(betEl);
    this.selectorBoxEl = $(selectorBoxEl);
    this.bindEvents();
  }
  show() {
    this.betEl.classList.remove("hide");
  }
  showSelectorBox() {
    this.selectorBoxEl.classList.remove("hide");
  }
  bindEvents() {
    this.selectorBoxEl.addEventListener("click", e => this.handleSelectorClicked(e));
  }
  handleSelectorClicked({ target }) {
    if (target.nodeName !== "BUTTON") return;
    if (target.className === "call") return this.handleCallSelected(target);
    if (target.className === "die") return this.handleDieSelected(target);
  }
  handleCallSelected(button) {
    console.log(button);
  }
  handleDieSelected(button) {
    console.log(button);
  }
}

export default BetContainerView;
