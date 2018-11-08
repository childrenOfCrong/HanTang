import { playerTemplate } from "./template";
import { $, $All, validateSelector, validateSearchElement } from "../helper";

class BetView {
  constructor(betEl) {
    this.validateSelector(betEl);
    this.$betEl = $(betEl);
  }
  start() {
    this.show();
  }
  show() {
    this.$betEl.classList.remove("hide");
  }
  render(betMoney) {
    const moneyText = $(".moneyText", this.$betEl);
    moneyText.innerText = betMoney;
  }
  validateSelector(betEl) {
    validateSelector(betEl);
    validateSearchElement(betEl);
  }
}

export default BetView;
