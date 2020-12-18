import Menu from '~elements/Menu';
import { el } from '~lib/dom';
import styles from '~lib/styles';
import { ComponentImplementation } from '../../lib/types';

export default class DesignSystem implements ComponentImplementation {
  private page: HTMLElement;
  private menuCollapsed: boolean = true;
  wrapper: HTMLElement = el('div', [
    'class',
    [
      styles.height_100,
      styles.grid,
      styles.grid_template_columns_auto,
      styles.grid_template_rows_max_content,
    ].join(' '),
  ])();
  constructor(page: HTMLElement) {
    this.page = page;
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }
  handleMenuToggle() {
    this.menuCollapsed = !this.menuCollapsed;
    this.render();
  }
  render() {
    this.wrapper.innerHTML = '';
    this.wrapper.appendChild(
      el('div')(
        Menu(this.menuCollapsed, this.handleMenuToggle),
        el('div', ['class', [styles.padding_xl].join(' ')])(this.page)
      )
    );
    return this.wrapper;
  }
}
