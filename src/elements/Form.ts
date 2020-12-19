import { el } from '~lib/dom';
import styles from '~lib/styles';

export default (content: HTMLElement) =>
  el(
    'form',
    ['onsubmit', (e: Event) => e.preventDefault()],
    ['class', [styles.block].join(' ')]
  )(content);
