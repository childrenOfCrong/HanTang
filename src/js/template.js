export const cardTemplate = list =>
  list.reduce(
    (ac, { id, value }) =>
      (ac += `<div class="card-${id}">
    <span class="card-value">${value}</span>
  </div>`),
    ``
  );

export const playerCardTemplate = list =>
  list.reduce(
    (ac, c, ci) =>
      (ac += `<li class="player-${ci + 1}">${cardTemplate(c)}
  </li>`),
    ``
  );
