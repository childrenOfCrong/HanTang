export const playerTemplate = ({ Id, cardSet, profile, gameResult, money, score, status }) =>
  `
 <div class="userInfo">
    <div class="avatarBox">
      <div class="avatar" alt="동그란 유저 사진"></div>
    </div>
    <div class="moneyBox">
      <span class="moneyPicture"></span><span class="money">${money} 냥</span>
    </div>
  </div>
  <div class="cardContainer">
    <div class="cardSet">
      ${cardSetTemplate(cardSet)}
    </div>
    <div class="score"></div>
  </div>
`;

const cardSetTemplate = list =>
  list.reduce((ac, c) => (ac += `<div class="card"><span class="cardId">${c.id}</span></div>`), ``);

export const speechBubbleTemplate = select => `
<div class="speechBubbleBox">
  <span class="${select}">${select.toUpperCase()}</span>
</div>
`;
