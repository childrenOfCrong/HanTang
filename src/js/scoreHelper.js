const scoreHelper = {
  playerScore: new Map(),
  getPlayerCards(cards) {
    cards.forEach((cardSet, playerID) => {
      playerID += 1;
      if (this.isGwangSet(cardSet)) {
        return this.calcisGwangSet(cardSet, playerID);
      }
      if (this.isDdaeng(cardSet)) {
        const DDaengValue = cardSet[0].value;
        return this.calcDDaengScore(DDaengValue, playerID);
      } else {
        return this.calcNormalScore(cardSet, playerID);
      }
    });
  },
  isGwangSet(cardSet, playerID) {
    const GwangeSet = new Set(["3-1", "8-1", "1-1"]);
    return cardSet.every(card => GwangeSet.has(cardSet.id));
  },
  isDdaeng(cardSet, playerID) {
    return cardSet[0].value === cardSet[1].value;
  },
  calcDDaengScore(DDaengValue, playerID) {
    this.playerScore.set(playerID, DDaengValue * 100);
    console.dir(this.playerScore);
  },
  calcNormalScore(cardSet, playerID) {
    let sumScore = cardSet.reduce((ac, c) => (ac += c.value), 0);
    sumScore %= 10;
    this.playerScore.set(playerID, sumScore);
    console.dir(this.playerScore);
  }
};

export default scoreHelper;
