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
      ['onclick', onToggle],
      [
        'class',
        [
          styles.grid,
          styles.grid_auto_flow_column,
          styles.cursor_pointer,
          styles.padding_l,
          styles.bg_color_black,
          styles.bg_color_grey_on_hover,
          styles.color_white,
          styles.color_black_on_hover,
          styles.fs_l,
        ].join(' '),
      ]
    )(
      el('div', ['class', [].join(' ')])(title),
      el('div', ['class', [styles.text_align_right].join(' ')])(
        collapsed ? '+' : '—'
      )
    ),
    el('div', [
      'class',
      [styles.padding_l, collapsed && styles.hide].join(' '),
    ])(body)
  );
