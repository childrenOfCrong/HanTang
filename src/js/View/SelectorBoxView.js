import { playerTemplate } from "./template";
import { $, $All, validateSelector, validateSearchElement } from "../helper";

class SelectorBoxView {
  constructor(selectorBoxEl) {
    this.validateSelector(selectorBoxEl);
    this.$selectorBoxEl = $(selectorBoxEl);
    this.bindEvents();
  }
  validateSelector(selectorBoxEl) {
    validateSelector(selectorBoxEl);
    validateSearchElement(selectorBoxEl);
  }
  bindEvents() {
    this.$selectorBoxEl.addEventListener("click", e => this.handleSelectorClicked(e));
  }
  hide() {
    this.$selectorBoxEl.classList.add("hide");
  }
  show() {
    this.$selectorBoxEl.classList.remove("hide");
  }
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.$selectorBoxEl.dispatchEvent(evt);
    return this;
  }
  notifySelect(selectData) {
    this.emit("SELECT", selectData);
  }
  handleSelectorClicked({ target }) {
    if (target.nodeName !== "BUTTON") return;
    const {
      dataset: { select }
    } = target;
    const selectData = { select, userID: 0 };
    this.notifySelect(selectData);
    this.hide();
  }
}

export default SelectorBoxView;
