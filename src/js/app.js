import "../style/app.scss";

const Game = class{
  constructor(cards, players){
    this.cards = [...cards];
    this.players = [...players];
    this.pedigree = [...pedigree];
    this.cardList = [];
    this.score = [];
  }
  getCard(data){
    data.forEach(v => {
      v.cards.forEach(v =>{
        this.cardList.push(v.img);
      });
    })
  }
  getScore(data){
    data.forEach(v => {
      this.score.push(v.score);
    })
  }
  play(){
    let cardList, score;
    let cards  = this.suffle(this.cards);
    let players = this.handoutCards(cards, this.players);
    this.getCard(this.calculatePlayerScore(players, this.pedigree));
    this.getScore(this.calculatePlayerScore(players, this.pedigree));
    console.log([this.cardList , this.score]);
    return [cardList, score] = [this.cardList , this.score];
  }
  suffle(cards){
    let newCards = cards;
    cards.forEach((v,i) => {
      let randomIndex = Math.floor(Math.random() * (i+1));
      let target = newCards[randomIndex]; 
      newCards[randomIndex] = newCards[i]; 
      newCards[i] = target;
    })
    return newCards;
  }
  handoutCards(cards, players){
    for(let player in players){
      let num = 2;
      while(num > 0){
        players[player].cards.push(cards.pop());
        num--;
      }
    }
    return this.sort(players);
  }
  sort(players){
    for(let value of players){
      if(value.cards[0].id > value.cards[1].id){
        let temp = value.cards[0].id;
        value.cards[0].id = value.cards[1].id;
        value.cards[1].id = temp;
      }
    }
    return players;
  }
  calculatePlayerScore(players, pedigree){
    for(let player of players){
      player.score = this.determineSpecial(player.cards, pedigree);
    }
    return players;
  }
  determineSpecial(cards, pedigree){
    for(let card of cards){
      if(cards[0].desc === 'gwang' && cards[1].desc === 'gwang') return this.determineDdang(cards, pedigree);
      if(cards[0].id === cards[1].id) return this.determineDdang(cards, pedigree, 'same');
      return this.determineothers(cards, pedigree);
    }
  }
  determineDdang(cards, pedigree, option){
    if(option === 'same') return cards[0].id + pedigree[0]["ddang"];
    else if(cards[0].id === 3 && cards[0].id === 8) return pedigree[0]["38gwang"];
    else return pedigree[0]["gwang"];
  }
  determineothers(cards, pedigree){
    if(cards[0].id === 1){
      if(cards[1].id == 2 ) {
        return pedigree[0]["ali"];  
      }else if(cards[1].id == 4 ) {
        return pedigree[0]["doksa"];
      }else if(cards[1].id == 9 ) {
        return pedigree[0]["gubbing"];
      }else if(cards[1].id == 10 ) {
        return pedigree[0]["jangbbing"];
      }
    } else if(cards[0].id === 4){
      if(cards[1].id == 6 ) {
        return pedigree[0]["seryug"];
      }else if( cards[1].id == 10 ) {
        return pedigree[0]["jangsa"];
      }      
    } 
    return (cards[0].id + cards[1].id) % 10; 
  }
}

const DOMRenderer = class{
  constructor(playerData){
    this.playerData = playerData;
  }
  divide(){
    let imageList = this.playerData[0];
    let list = document.querySelectorAll( '.user' );
    list.forEach(v => {
      v.childNodes[1].childNodes[1].src = imageList.pop();
      v.childNodes[1].childNodes[3].src = imageList.pop();
    })
  }
  showResult(){
    let scoreList = this.playerData[1];
    let myScore = this.playerData[1][1];
    let result = scoreList.filter(v => v >= myScore);
    return (result.length)? 'lose': 'win';
  }
}
document.getElementById("button").addEventListener("click", pressButton);

const cards = [
  {
    'id': 1,
    'desc': 'basic',
    'img': './images/cards/1-1.png'
  },
  {
    'id': 1,
    'desc': 'gwang',
    'img': './images/cards/1gwang.png'
  },
  {
    'id': 2,
    'desc': 'basic',
    'img': './images/cards/2-1.png'
  },
  {
    'id': 2,
    'desc': 'basic',
    'img': './images/cards/2-2.png'
  },
  {
    'id': 3,
    'desc': 'basic',
    'img': './images/cards/3-1.png'
  },
  {
    'id': 3,
    'desc': 'gwang',
    'img': './images/cards/3gwang.png'
  },
  {
    'id': 4,
    'desc': 'basic',
    'img': './images/cards/4-1.png'
  },
  {
    'id': 4,
    'desc': 'basic',
    'img': './images/cards/4-2.png'
  },
  {
    'id': 5,
    'desc': 'basic',
    'img': './images/cards/5-1.png'
  },
  {
    'id': 5,
    'desc': 'basic',
    'img': './images/cards/5-2.png'
  },
  {
    'id': 6,
    'desc': 'basic',
    'img': './images/cards/6-1.png'
  },
  {
    'id': 6,
    'desc': 'basic',
    'img': './images/cards/6-2.png'
  },
  {
    'id': 7,
    'desc': 'basic',
    'img': './images/cards/7-1.png'
  },
  {
    'id': 7,
    'desc': 'basic',
    'img': './images/cards/7-2.png'
  },
  {
    'id': 8,
    'desc': 'gwang',
    'img': './images/cards/8-1.png'
  },
  {
    'id': 8,
    'desc': 'basic',
    'img': './images/cards/8gwang.png'
  },
  {
    'id': 9,
    'desc': 'basic',
    'img': './images/cards/9-1.png'
  },
  {
    'id': 9,
    'desc': 'basic',
    'img': './images/cards/9-2.png'
  },
  {
    'id': 10,
    'desc': 'basic',
    'img': './images/cards/10-1.png'
  },
  {
    'id': 10,
    'desc': 'basic',
    'img': './images/cards/10-2.png'
  }
];

const players = [
  {
    'name' : '1',
    'cards' : [],
    'score' : 0
  },
  {
    'name' : '2',
    'cards' : [],
    'score' : 0
  },
  {
    'name' : '3',
    'cards' : [],
    'score' : 0
  },
  {
    'name' : '4',
    'cards' : [],
    'score' : 0
  }
];

const pedigree = [
  {
    'mangtong' : 0,
    'ggt' : 0,
    'gapo' : 10,
    'seryug' : 11,
    'jangsa' : 12,
    'jangbbing' : 13,
    'gubbing' : 14,
    'doksa' : 15,
    'ali' : 16,
    'ddang' : 17,
    'gwang' : 28,
    '38gwang': 29,
  }
]


function pressButton(){
  if(this.innerText === "Start"){
    this.innerText = "Open";
    let game = new Game(cards, players, pedigree);
    let dom = new DOMRenderer(game.play());
    dom.divide();
  } else if(this.innerText === "Open"){
    this.innerText = "end";
    let game = new Game(cards, players, pedigree);
    let dom = new DOMRenderer(game.play());
    document.querySelector( '.result' ).innerText = dom.showResult();
  }
}

