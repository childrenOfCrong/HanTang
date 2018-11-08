class Controller {
  constructor({ model, view }) {
    this.model = model;
    this.view = view;
    view.bindStart(() => this.start());
    view.bindListenDecision(e => this.listenDecision(e));
    view.playerViewList.notifyAllDecisionSet = this.notifyAllDecisionSet.bind(this);
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
  notifyAllDecisionSet(allDesicionList) {
    this.model.takeDecision(allDesicionList);
  }
}

export default Controller;
