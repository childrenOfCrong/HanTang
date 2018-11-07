export const playerTemplate = ({ ID, cardSet, profile, gameResult, money, score, status }) =>
  `
 <div class="userInfo">
    <div class="avatar">
      <div alt="동그란 유저 사진"></div>
    </div>
    <div class="money">${money}</div>
  </div>
  <div class="cardContainer">
    <div class="cardSet">
      <div alt="">${cardSet[0]}</div>
      <div alt=""></div> 
    </div>
    <div class="score"></div>
  </div>
 `;
