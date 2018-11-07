class Player {
    constructor(n, profile) {
        this.id = n;
        this.profile = profile;
        this.cardSet = [];
        this.money = 10;
        this.status = '';
        this.gameResult = '';
        this.score = null;
    }
}

class Game {
    constructor(cards) {
        this.jokbo = jokbo;
        this.cards = [...cards];
        this.players = [];
        this.betMoney = 0;
    }

    generatePlayer() {
        for (let i = 0; i < 3; i++) {
            this.players.push(new Player(i));
        }
    }

    start() {
        if (!this.players.length) this.generatePlayer();
        this.betFirst();
        this.shuffle(this.cards);
        this.handoutCards(this.cards, this.players);
        this.bet();
    }

    betFirst() {
        for (let i = 0; i < 3; i++) {
            this.players[i].money--;
            this.betMoney++;
        }
    }

    bet() {
        for (let i = 0; i < 3; i++) {
            if (this.players[i].status === 'die') continue;
            if (i === 0) {
                const input = prompt();
                this[input](i);
            } else {
                const randNum = Math.floor(Math.random() * 10 + 1);
                randNum <= 2 ? this.die(i) : this.call(i);
            }
        }
    }

    shuffle(cards) {
        let newCards = cards;

        cards.forEach((v, i) => {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            let target = newCards[randomIndex];
            newCards[randomIndex] = newCards[i];
            newCards[i] = target;
        })

        return newCards;
    }

    handoutCards(cards, players) {
        for (let player of players) {
            if (player.status !== 'die') player.cardSet.push(cards.pop());
        }
    }

    call(n) {
        const user = this.players[n];
        user.money--;
        user.status = 'call';
        this.betMoney++;
    }

    die(n) {
        const user = this.players[n];
        user.status = 'die';
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
            if (cardSet[0].desc === 'kwang' && cardSet[1].desc === 'kwang') {
                this.updatePlayerScore(this.players[i], `${cardSet[0].id}${cardSet[1].id}광땡`, 99)
                continue;
            }

            if (cardSet[0].id === cardSet[1].id) {
                const ddang = +cardSet[0].id;
                this.updatePlayerScore(this.players[i], `${ddang}땡`, ddang + 15)
                continue;
            }

            const result = cardSet[0].id + cardSet[1].id;
            if (this.jokbo[result]) {
                this.jokbo[result](this.players[i]);
            } else {
                const kkeut = ((+cardSet[0].id) + (+cardSet[1].id)) % 10;
                if (kkeut === 9) {
                    this.updatePlayerScore(this.players[i], '갑오', 9)
                    continue;
                }
                if (kkeut === 0) {
                    this.updatePlayerScore(this.players[i], '망통', 0)
                    continue;
                }
                this.updatePlayerScore(this.players[i], `${kkeut}끗`, kkeut)
            }
        }
    }

    updatePlayerScore(player, inputText, inputValue) {
        player.score = {
            text: inputText,
            value: inputValue
        }
    }
}

const jokbo = {
    '46': (player) => player.score = {
        text: '세륙',
        value: 10
    },
    '410': (player) => player.score = {
        text: '장사',
        value: 11
    },
    '110': (player) => player.score = {
        text: '장삥',
        value: 12
    },
    '19': (player) => player.score = {
        text: '구삥',
        value: 13
    },
    '14': (player) => player.score = {
        text: '독사',
        value: 14
    },
    '12': (player) => player.score = {
        text: '알리',
        value: 15
    }
}

const cards = [{
        'id': '1',
        'desc': 'kkeut',
        'img': './images/cards/1-1.png'
    },
    {
        'id': '1',
        'desc': 'kwang',
        'img': './images/cards/1gwang.png'
    },
    {
        'id': '2',
        'desc': 'tti',
        'img': './images/cards/2-1.png'
    },
    {
        'id': '2',
        'desc': 'kkeut',
        'img': './images/cards/2-2.png'
    },
    {
        'id': '3',
        'desc': 'tti',
        'img': './images/cards/3-1.png'
    },
    {
        'id': '3',
        'desc': 'kwang',
        'img': './images/cards/3gwang.png'
    },
    {
        'id': '4',
        'desc': 'tti',
        'img': './images/cards/4-1.png'
    },
    {
        'id': '4',
        'desc': 'kkeut',
        'img': './images/cards/4-2.png'
    },
    {
        'id': '5',
        'desc': 'tti',
        'img': './images/cards/5-1.png'
    },
    {
        'id': '5',
        'desc': 'kkeut',
        'img': './images/cards/5-2.png'
    },
    {
        'id': '6',
        'desc': 'tti',
        'img': './images/cards/6-1.png'
    },
    {
        'id': '6',
        'desc': 'kkeut',
        'img': './images/cards/6-2.png'
    },

    {
        'id': '7',
        'desc': 'tti',
        'img': './images/cards/7-1.png'
    },
    {
        'id': '7',
        'desc': 'kkeut',
        'img': './images/cards/7-2.png'
    },
    {
        'id': '8',
        'desc': 'kwang',
        'img': './images/cards/8-1.png'
    },
    {
        'id': '8',
        'desc': 'kkeut',
        'img': './images/cards/8gwang.png'
    },
    {
        'id': '9',
        'desc': 'tti',
        'img': './images/cards/9-1.png'
    },
    {
        'id': '9',
        'desc': 'kkeut',
        'img': './images/cards/9-2.png'
    },
    {
        'id': '10',
        'desc': 'tti',
        'img': './images/cards/10-1.png'
    },
    {
        'id': '10',
        'desc': 'kkeut',
        'img': './images/cards/10-2.png'
    }
];
const game = new Game(cards);

game.start();
game.handoutCards(game.cards, game.players);
game.bet();
game.getScore();
console.log(game.players, game.betMoney);