import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CONTAINER_CLASS } from './constants';
import Dropdown from './Dropdown';

export default function createDropdown() {
  const el = document.createElement('div');
  el.classList.add(CONTAINER_CLASS);
  ReactDOM.render(
    <Dropdown />,
    el
  );
  return el;
}
