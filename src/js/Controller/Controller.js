class Controller {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    view.bindStart(() => this.start());
    view.bindListenDecision(e => this.listenDecision(e));
    model.bindDecision = this.updateView.bind(this);
    // view.playerViewList.bind
    view.bindGetAllDecision(() => this.notifyAllDecision());
  }
  init() {
    console.dir(this);
  }
  updateView(updateData) {
    this.view.updateView(updateData);
  }
  start(init = true) {
    console.log("start!!!");
    const startInfo = this.model.start(init);
    console.log(startInfo);
    this.render(startInfo);
  }
  listenDecision({ detail }) {
    console.log("event Listen");
    this.notifyDecision(detail);
    this.view.addDecision(detail);
  }
  notifyDecision(decision) {
    this.model.takeDecision(decision);
  }
  render(startInfo) {
    this.view.render(startInfo);
  }
  notifyAllDecision() {
    this.start(false);
    this.view.showSelectBox();
  }
}

export default Controller;
