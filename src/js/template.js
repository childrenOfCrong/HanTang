export const cardTemplate = list =>
  list.reduce((ac, { id, value }) => (ac += `<div class="card-${id}">${value}</div>`), ``);
