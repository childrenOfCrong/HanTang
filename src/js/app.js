// import "../style/app.scss";
// function component(el = "div") {
//   let element = document.createElement(el);

//   element.innerHTML = "Let Go !!!";
//   element.classList.add("test");

//   return element;
// }
// const wrapper = document.querySelector(".wrapper");
// wrapper.appendChild(component());


const Game = class{
  constructor(cards, players){
    this.cards = cards;
    this.players = players;
    this.pedigree = pedigree;
  }
  play(){
    let cards  = this.suffle(this.cards);
    let players = this.handoutCards(cards, this.players);
    this.calculate(players, this.pedigree);
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
    return players;
  }
  calculate(players, pedigree){
    for(let player in players){
      this.determineSpecial(players[player].cards, pedigree);
    }
  }
  determineSpecial(cards, pedigree){
    for(let card of cards){
      
    }
  }
}

function suffle(cards){
  let newCards = [];
  cards.forEach((v,i) => {
    let randomIndex = Math.floor(Math.random() * (i+1));
    let target = newCards[randomIndex]; 
    newCards[randomIndex] = newCards[i]; 
    newCards[i] = target;
  })
}

function distribution(){

}

function calculate(){

}

const cards = [
  {
    'id': 1,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 1,
    'desc': 'gwang',
    'img': ''
  },
  {
    'id': 2,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 2,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 3,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 3,
    'desc': 'gwang',
    'img': ''
  },
  {
    'id': 4,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 4,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 5,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 5,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 6,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 6,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 7,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 7,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 8,
    'desc': 'gwang',
    'img': ''
  },
  {
    'id': 8,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 9,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 9,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 10,
    'desc': 'basic',
    'img': ''
  },
  {
    'id': 10,
    'desc': 'basic',
    'img': ''
  }
];

const players = [
  {
    'name' : '1',
    'cards' : []
  },
  {
    'name' : '2',
    'cards' : []
  },
  {
    'name' : '3',
    'cards' : []
  },
  {
    'name' : '4',
    'cards' : []
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
    'gwang' : 18,
    '38gwang': 19,
  }
]

const game = new Game(cards, players, pedigree);
game.play();

// 셔플, 
// 분배
// 연산