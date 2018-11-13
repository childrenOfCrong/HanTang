class PlayerViewList {
  constructor(playerList) {
    this.playerList = playerList;
    this.decisionList = new Set();
    this.initChecker();
    this.bindGetAllDecision = null;
  }
  initChecker() {
    this.checker = [...new Array(this.playerList.length).keys()];
  }
  updatePlayer(user) {
    const targetPlayer = this.findUser(user.id);
    targetPlayer.render(user);

    // targetPlayer.updateView(user);
  }
  render(players) {
    // Issue 어떻게 맞추면 좋을까? 객체이면 더 좋지 않을까?

    players.forEach((playerInfo, i) => {
      this.playerList[i].render(playerInfo);
    });
  }
  findUser(ID = 0) {
    return this.playerList.find(player => player.ID === ID);
  }
  showUserSpeechBubble({ detail: { select } }) {
    const user = this.findUser();
    user.showSpeechBubble(select);
  }
  addDecision(decision) {
    console.log(decision);
    let { select, userID } = decision;
    this.decisionList.add({ userID, select });
    this.checker = this.checker.filter(v => v !== userID);
    if (!this.checkAllSet()) return this.gotoOtherDecision();
    else return this.notifyGetAllDecision();
  }
  notifyGetAllDecision() {
    setTimeout(() => {
      this.bindGetAllDecision();
    }, 1000);
  }
  gotoOtherDecision() {
    const otherID = this.checker.shift();
    const player = this.findUser(otherID);
    player.setDecision();
  }
  checkAllSet() {
    return this.decisionList.size === 3;
  }
}

export default PlayerViewList;
