import { el } from '~lib/dom';
import styles from '~lib/styles';

export default (items: [[string, string]]) =>
  el('div')(
    ...items.map(([text, href]) =>
      el('a', ['href', href], ['class', styles.padding_l])(text)
    )
  );
