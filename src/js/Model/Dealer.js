import Player from "./Player";

const jokbo = {
  "46": player =>
    (player.score = {
      text: "세륙",
      value: 10
    }),
  "410": player =>
    (player.score = {
      text: "장사",
      value: 11
    }),
  "110": player =>
    (player.score = {
      text: "장삥",
      value: 12
    }),
  "19": player =>
    (player.score = {
      text: "구삥",
      value: 13
    }),
  "14": player =>
    (player.score = {
      text: "독사",
      value: 14
    }),
  "12": player =>
    (player.score = {
      text: "알리",
      value: 15
    })
};
class Dealer {
  constructor(cards) {
    this.jokbo = jokbo;
    this.cards = [...cards];
    this.players = [];
    this.betMoney = 0;
    this.bindDecision = null;
  }
  takeDecision(decision) {
    console.log("model", decision);
    const { select, userID } = decision;

    this[select](userID);
  }
  generatePlayer() {
    for (let i = 0; i < 3; i++) {
      this.players.push(new Player(i, i));
    }
  }
  start(init = true) {
    if (init) {
      if (!this.players.length) this.generatePlayer();
      this.betFirst();
      this.shuffle(this.cards);
    }
    this.handoutCards(this.cards, this.players);
    this.getScore();
    return {
      players: this.players,
      betMoney: this.betMoney
    };
  }

  betFirst() {
    for (let i = 0; i < 3; i++) {
      this.players[i].money--;
      this.betMoney++;
    }
  }

  shuffle(cards) {
    let newCards = cards;

    cards.forEach((v, i) => {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let target = newCards[randomIndex];
      newCards[randomIndex] = newCards[i];
      newCards[i] = target;
    });

    return newCards;
  }

  handoutCards(cards, players) {
    for (let player of players) {
      if (player.status !== "die") player.cardSet.push(cards.pop());
    }
  }

  call(n) {
    const user = this.players[n];
    user.money--;
    user.status = "call";
    this.betMoney++;
    this.bindDecision({
      betMoney: this.betMoney,
      user
    });
  }

  die(n) {
    const user = this.players[n];
    user.status = "die";
  }

  sortCards(cardSet) {
    let cards = [...cardSet];
    cards.sort((a, b) => a.id - b.id);
    return cards;
  }

  getScore() {
    for (let i = 0; i < 3; i++) {
      if (this.players[i].cardSet.length === 1) continue;

      const cardSet = this.sortCards(this.players[i].cardSet);
      if (cardSet[0].desc === "kwang" && cardSet[1].desc === "kwang") {
        this.updatePlayerScore(this.players[i], `${cardSet[0].id}${cardSet[1].id}광땡`, 99);
        continue;
      }

      if (cardSet[0].id === cardSet[1].id) {
        const ddang = +cardSet[0].id;
        this.updatePlayerScore(this.players[i], `${ddang}땡`, ddang + 15);
        continue;
      }

      const result = cardSet[0].id + cardSet[1].id;
      if (this.jokbo[result]) {
        this.jokbo[result](this.players[i]);
      } else {
        const kkeut = (+cardSet[0].id + +cardSet[1].id) % 10;
        if (kkeut === 9) {
          this.updatePlayerScore(this.players[i], "갑오", 9);
          continue;
        }
        if (kkeut === 0) {
          this.updatePlayerScore(this.players[i], "망통", 0);
          continue;
        }
        this.updatePlayerScore(this.players[i], `${kkeut}끗`, kkeut);
      }
    }
  }

  updatePlayerScore(player, inputText, inputValue) {
    player.score = {
      text: inputText,
      value: inputValue
    };
  }
}

export default Dealer;
