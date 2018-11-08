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
  setButtonDisable(disabled = false) {
    $All("button", this.$selectorBoxEl).forEach(el => (el.disabled = disabled));
  }
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.$selectorBoxEl.dispatchEvent(evt);
    return this;
  }
  notifySelect(select) {
    this.emit("SELECT", select);
  }
  handleSelectorClicked({ target }) {
    if (target.nodeName !== "BUTTON") return;
    const {
      dataset: { select }
    } = target;
    this.notifySelect(select);
    this.setButtonDisable(true);
  }
}

export default SelectorBoxView;
