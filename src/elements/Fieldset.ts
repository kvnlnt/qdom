import { el } from '~lib/dom';
import styles from '~lib/styles';

export default (...content: HTMLElement[]) =>
  el('fieldset', ['class', [styles.block].join(' ')])(...content);
