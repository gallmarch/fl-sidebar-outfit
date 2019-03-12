import { PARENT_CLASS } from './constants';

export default function insertDropdown(el: any) {
  const parent = document.querySelector(`.${PARENT_CLASS}`);
  if (!parent) {
    return;
  }
  const sibling = parent.querySelector('.items--list:nth-of-type(2)');
  parent.insertBefore(el, sibling);
}
