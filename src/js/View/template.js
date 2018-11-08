export const playerTemplate = ({ Id, cardSet, profile, gameResult, money, score, status }) =>
  `
 <div class="userInfo">
    <div class="avatar">
      <div alt="동그란 유저 사진"></div>
    </div>
    <div class="money">${money}</div>
  </div>
  <div class="cardContainer">
    <div class="cardSet">
      ${cardSetTemplate(cardSet)}
    </div>
    <div class="score"></div>
  </div>
 `;

const cardSetTemplate = list => list.reduce((ac, c) => (ac += `<div class="card">${c}</div>`), ``);
