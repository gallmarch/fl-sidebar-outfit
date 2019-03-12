import { Store } from 'redux';
import { State, Summary } from '../types';
import * as MutationSummary from 'mutation-summary';

export default function listenForSidebarChange(store: Store<State>) {
  return function (callback: (c: Array<Summary>, s: Store<State>) => void) {
    const queries = [{ element: '*' }];
    const rootNode = document.querySelector('div.col-secondary');
    return new MutationSummary({
      queries,
      rootNode,
      callback: (changes: Array<Summary>) => callback(changes, store),
    });
  }
}
