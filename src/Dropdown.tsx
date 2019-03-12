import * as React from 'react';
import * as classnames from 'classnames';


export function onChange() {
  console.info('changey wangey');
}

export default function Dropdown() {
  return (
    <select
      className={classnames('form__control')}
      onChange={onChange}
    >
      <option>Morning</option>
      <option>Evening</option>
      <option>Hard-Wearing</option>
    </select>
  );
}
