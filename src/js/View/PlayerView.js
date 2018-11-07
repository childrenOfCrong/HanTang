import template from "template";
class PlayerView {
  construcotr() {
    this.playersEl.innerHTML = this.render();
  }
  render() {
    template(list);
  }
}
