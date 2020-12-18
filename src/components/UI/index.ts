import { el } from '~lib/dom';
import { ComponentImplementation } from '../../lib/types';
import styles from '../../lib/styles';
import l10n from '~lib/l10n';

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
    const link = (text: string, href: string) =>
      el('a', ['href', href], ['class', styles.color_white])(text);
    return el('div', [
      'class',
      [
        styles.bg_color_grey,
        styles.padding_l,
        styles.grid,
        styles.grid_template_columns_max_content,
        styles.grid_auto_flow_column,
        styles.grid_gap_l,
      ].join(' '),
    ])(
      link(l10n.todosPageTitle, '#/todos'),
      link(l10n.designSystemPageTitle, '#/design-system')
    );
  }
  render() {
    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(this.renderMenu());
    this.wrapper.appendChild(this.page);
    return this.wrapper;
  }
}
