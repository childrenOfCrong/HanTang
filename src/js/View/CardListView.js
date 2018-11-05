const CardListView = class {
  constructor() {
    this.cards = this.makeCards();
  }
  makeCards() {
    const cards = [];
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 2; j++) {
        cards.push({ id: `${i}-${j}`, value: i });
      }
    }
    return cards;
  }
};

export default CardListView;
