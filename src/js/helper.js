export const $ = (selector, target = document) => target.querySelector(selector);

export const $All = (selector, target = document) => target.querySelectorAll(selector);

export const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};
