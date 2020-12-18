import { el } from '~lib/dom';
import l10n from '~lib/l10n';
import styles from '~lib/styles';
import { ComponentImplementation } from '../../lib/types';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('h1', ['class', styles.padding_xl])(
    l10n.fourOhFourPageTitle
  );
  constructor() {}
  render() {
    return this.wrapper;
  }
}
