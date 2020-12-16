import { el } from '~lib/dom';
import { ComponentImplementation } from '../../lib/types';
import styles from '../../lib/styles';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('div', [
    'class',
    [
      styles.height_100,
      styles.grid,
      styles.grid_template_columns_auto,
      styles.grid_template_rows_max_content,
    ].join(' '),
  ])('ui');
  page: HTMLElement;
  constructor(page: HTMLElement) {
    this.page = page;
  }
  renderMenu() {
    return el('div', [
      'class',
      [
        styles.padding_l,
        styles.grid,
        styles.grid_template_columns_max_content,
        styles.grid_auto_flow_column,
        styles.grid_gap_l,
      ].join(' '),
    ])(
      el('a', ['href', '#/design-system'])('Design System'),
      el('a', ['href', '#/todos'])('Todos')
    );
  }
  render() {
    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(this.renderMenu());
    this.wrapper.appendChild(this.page);
    return this.wrapper;
  }
}
