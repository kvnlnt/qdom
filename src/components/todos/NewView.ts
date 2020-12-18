import { el } from '~lib/dom';
import l10n from '~lib/l10n';
import { ComponentImplementation } from '../../lib/types';
import UI from '../UI/Main';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('div')();
  constructor() {}
  render() {
    this.wrapper.innerHTML = '';
    const header = el('h1');
    this.wrapper.appendChild(
      new UI(el('div')(header(l10n.newTodoPageTitle))).render()
    );
    return this.wrapper;
  }
}
