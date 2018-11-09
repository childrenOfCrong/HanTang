class Controller {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    view.bindStart(() => this.start());
    view.bindListenDecision(e => this.listenDecision(e));
    view.playerViewList.notifyAllDecisionSet = this.notifyAllDecisionSet.bind(this);
    model.bindDecision = this.updateView.bind(this);
  }
  init() {
    console.dir(this);
  }
  updateView(updateData) {
    this.betView()

    console.log(updateData);
  }
  start() {
    console.log("start!!!");
    const startInfo = this.model.start();
    console.log(startInfo);
    this.render(startInfo);
  }
  listenDecision({ detail }) {
    console.log("event Listen");
    this.notifyDecision(detail);
  }
  notifyDecision(decision) {
    this.model.takeDecision(decision);
  }
  render(startInfo) {
    this.view.render(startInfo);
  }
}

export default Controller;
