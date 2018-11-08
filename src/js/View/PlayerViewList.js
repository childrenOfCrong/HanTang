class PlayerViewList {
  constructor(playerList) {
    this.playerList = playerList;
    this.decisionList = new Set();
  }
  render(players) {
    // Issue 어떻게 맞추면 좋을까? 객체이면 더 좋지 않을까?
    players.forEach((playerInfo, i) => {
      this.playerList[i].render(playerInfo);
    });
  }
  addDecision(decision) {
    const { select, userID } = decision;
    this.decisionList.add({ userID, select });
    console.dir(this.decisionList);
    if (this.isFirst()) return this.gotoOtherDecision(userID);
    else {
      this.checkAllSet();
    }
  }
  isFirst() {
    return this.decisionList.size === 1;
  }
  gotoOtherDecision(userID) {
    console.log(userID);
    const others = [...this.playerList].filter(playerView => playerView.ID !== userID);
    console.log(others);
    others.forEach(player => {
      player.setDecision();
    });
  }
  checkAllSet() {
    if (this.decisionList.size === 3) {
      const decisionList = [...this.decisionList];
      console.dir(decisionList);
      this.notifyAllDecisionSet(decisionList);
      this.decisionList.clear();
      console.dir(this.decisionList);
    }
  }
}

export default PlayerViewList;
