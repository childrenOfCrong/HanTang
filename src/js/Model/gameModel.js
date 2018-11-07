import { jokbo } from "./jokbo";
import Delear from "./Dealer";
import { card } from "./card";

const dealer = new Delear(cards);

dealer.start();
dealer.handoutCards(game.cards, game.players);
dealer.bet();
dealer.getScore();
console.log(dealer.players, dealer.betMoney);
