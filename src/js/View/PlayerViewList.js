class PlayerViewList {
  constructor(playerList) {
    this.playerList = playerList;
  }
  render(players) {
    // Issue 어떻게 맞추면 좋을까? 객체이면 더 좋지 않을까?
    players.forEach((playerInfo, i) => {
      this.playerList[i].render(playerInfo);
    });
  }
}

export default PlayerViewList;
