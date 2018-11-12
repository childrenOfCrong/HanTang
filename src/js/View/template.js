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
    <div class="score hide">${scoreTemplate(score)}</div>
    <div class="speechBubbleBox">
      ${speechBubbleTemplate(status)}
    </div>
  </div>
`;

const cardSetTemplate = (list, userId) =>
  list.reduce(
    (ac, { id, img }) =>
      (ac += `<div>
      <img src="${setCardImg(img, userId)}" class="${setCardClass(userId)}">
      <span class="cardId">${id}</span>
      </img>
    </div>`),
    ``
  );
const setCardImg = (img, userId) => (userId === 0 ? img : backSide);

const setCardClass = userId => (userId === 0 ? "card" : "card back");

export const speechBubbleTemplate = select => (select ? `<span class="${select}">${select.toUpperCase()}</span>` : ``);

const scoreTemplate = score => (score ? score.text : ``);
