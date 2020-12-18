import { AccordionImplementation } from '~lib/types';
import { el } from '../lib/dom';
import styles from '../lib/styles';

export default ({
  title,
  body,
  collapsed = true,
  onToggle,
}: AccordionImplementation) =>
  el('div')(
    el(
      'div',
      [
        'class',
        [
          styles.cursor_pointer,
          styles.padding_l,
          styles.bg_color_black,
          styles.color_white,
          styles.fs_l,
        ].join(' '),
      ],
      ['onclick', onToggle]
    )(title),
    el('div', [
      'class',
      [styles.padding_l, collapsed && styles.display_none].join(' '),
    ])(body)
  );
