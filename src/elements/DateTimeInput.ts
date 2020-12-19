import { el } from '~lib/dom';
import styles from '~lib/styles';

export default ({
  placeholder = '',
  value = '',
}: {
  placeholder: string;
  value?: string;
}) =>
  el(
    'input',
    ['type', 'datetime-local'],
    ['placeholder', placeholder],
    ['class', [styles.block].join(' ')]
  )(value);
