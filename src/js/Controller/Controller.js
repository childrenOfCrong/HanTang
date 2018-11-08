class Controller {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    view.bindStart(() => this.start());
    // view.bindListenDecision(() => this.listenDecision());
  }
  init() {
    console.dir(this);
  }
  start() {
    console.log("start!!!");
    const startInfo = this.model.start();
    this.render(startInfo);
  }
  render(startInfo) {
    this.view.render(startInfo);
  }
}

export default Controller;
