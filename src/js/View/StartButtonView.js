import { $, validateSelector, validateSearchElement } from "../helper";

class StartButtonView {
  constructor(startBtn) {
    validateSelector(startBtn);
    validateSearchElement(startBtn);
    this.$startBtn = $(startBtn);
  }
  hide() {
    this.$startBtn.classList.add("hide");
  }
  show() {
    $(this.start).classList.remove("hide");
  }
  start(startFnList) {
    this.$startBtn.addEventListener("click", () => {
      this.hide();
      startFnList.forEach(startFn => startFn());
    });
  }
}

export default StartButtonView;
