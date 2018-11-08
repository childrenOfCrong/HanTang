class Player {
  constructor(n, profile) {
    this.id = n;
    this.profile = profile;
    this.cardSet = [];
    this.money = 10;
    this.status = "";
    this.gameResult = "";
    this.score = null;
  }
}

export default Player;
