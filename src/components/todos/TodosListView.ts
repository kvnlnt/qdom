import { el } from '~lib/dom';
import l10n from '~lib/l10n';
import styles from '~lib/styles';
import { ComponentImplementation } from '../../lib/types';
import UI from '../UI/Main';
import LinkButton from '../../elements/LinkButton';
import TodosState from './TodosState';

export default class TodosListView implements ComponentImplementation {
  wrapper: HTMLElement = el('div')();
  constructor(todosState: TodosState) {}
  render() {
    this.wrapper.innerHTML = '';
    const header = el('h1');
    const actions = el('div', ['class', [styles.text_align_right].join(' ')]);
    this.wrapper.appendChild(
      new UI(
        el('div', [
          'class',
          [
            styles.grid,
            styles.grid_auto_flow_column,
            styles.align_items_center,
          ].join(' '),
        ])(
          header(l10n.todosPageTitle),
          actions(LinkButton({ text: l10n.buttonAdd, href: '#/todos/new' }))
        )
      ).render()
    );
    return this.wrapper;
  }
}
