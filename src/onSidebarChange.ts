import createDropdown from './createDropdown';
import insertDropdown from './insertDropdown';
import { CONTAINER_CLASS } from './constants';
import { Summary } from './types';


export default function onSidebarChange(changes: Array<Summary>) {
  if (document.querySelector(`.${CONTAINER_CLASS}`)) {
    return;
  }
  console.info('no container');
  insertDropdown(createDropdown());
}
