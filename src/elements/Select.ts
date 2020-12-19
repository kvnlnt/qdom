import { el } from '~lib/dom';
import styles from '~lib/styles';

export default (options: { text: string; value: string }[] = []) =>
  el('select')(
    el('option', ['value', 'None'])('None'),
    ...options.map(({ text, value }) => el('option', ['value', value])(text))
  );
