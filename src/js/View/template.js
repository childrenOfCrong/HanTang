const backSide = `../src/assets/images/backSide.jpg`;

export const playerTemplate = ({ id, cardSet, profile, gameResult, money, score, status }) =>
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
      ${cardSetTemplate(cardSet, id)}
    </div>
    <div class="score"></div>
  </div>
`;

const cardSetTemplate = (list, userId) =>
  list.reduce(
    (ac, { id, img }) =>
      (ac += `<div>
      <img src="${setCardImg(img, userId)}" class="card">
      <span class="cardId">${id}</span>
      </img>
    </div>`),
    ``
  );
const setCardImg = (img, userId) => (userId === 0 ? img : backSide);

export const speechBubbleTemplate = select => `
<div class="speechBubbleBox">
  <span class="${select}">${select.toUpperCase()}</span>
</div>
`;
