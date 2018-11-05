export const cardTemplate = list =>
  list.reduce(
    (ac, { id, value }) =>
      (ac += `<div class="card-${id}">
    <span class="card-value">${value}</span>
  </div>`),
    ``
  );
const scoreTemplate = playerNumber => `<div data-player="${playerNumber}" class="scoreBox"></div>`;
export const playerCardTemplate = list =>
  list.reduce(
    (ac, c, ci) =>
      (ac += `
  <li class="player-${ci + 1}">
    <div class="cardSet">${cardTemplate(c)}</div>
    ${scoreTemplate(ci + 1)}
  </li>`),
    ``
  );

export const winnerTemplate = winner => `<div class="winner">Winner is ${winner}</div>`;
