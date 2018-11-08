class Controller {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    view.bindStart(() => this.start());
    view.bindListenDecision(e => this.listenDecision(e));
  }
  init() {
    console.dir(this);
  }
  start() {
    console.log("start!!!");
    const startInfo = this.model.start();
    this.render(startInfo);
  }
  listenDecision({ detail }) {
    console.log("event Listen");
    this.notifyDecision(detail);
  }
  notifyDecision(decision) {
    this.view.notifyDecision(decision);
  }
  render(startInfo) {
    this.view.render(startInfo);
  }
}

export default Controller;
