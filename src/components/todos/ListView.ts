import { el } from '~lib/dom';
import l10n from '~lib/l10n';
import styles from '~lib/styles';
import { ComponentImplementation } from '../../lib/types';
import UI from '../UI/Main';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('div')();
  constructor() {}
  render() {
    this.wrapper.innerHTML = '';
    const header = el('h1');
    const addLink = el('a', ['href', '#/todos/new']);
    this.wrapper.appendChild(
      new UI(
        el('div', [
          'class',
          [styles.grid, styles.grid_auto_flow_column].join(' '),
        ])(header(l10n.todosPageTitle), addLink('Add'))
      ).render()
    );
    return this.wrapper;
  }
}
