import template from "template";
class BetContainerView {
  construcotr() {
    this.playersEl.innerHTML = this.render();
  }
  render() {
    template(list);
  }
}
