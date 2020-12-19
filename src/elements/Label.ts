import { el } from '~lib/dom';
import styles from '~lib/styles';

export default ({ text = '' }: { text: string }) =>
  el('label', ['class', [styles.block].join(' ')])(text);
