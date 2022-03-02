/* eslint-disable folders/match-regex */
/**
 * A function to render elements from an array.
 *
 * @param {Array} toRender - An array to render into a list elements.
 * @returns {string} - Returns list elements inside an un-ordered list.
 *
 */
// document this function!
export const renderList = (toRender = []) => {
  const ulEl = document.createElement('ul');

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
