import { el } from '~lib/dom';
import l10n from '~lib/l10n';
import styles from '~lib/styles';

const link = (text: string, href: string) =>
  el(
    'a',
    ['href', href],
    ['class', [styles.color_white, styles.block, styles.padding_l].join(' ')]
  )(text);

export default (collapsed: boolean, onToggle: Function) =>
  el('div', ['class', [styles.bg_color_black, styles.padding_l].join(' ')])(
    el(
      'div',
      [
        'class',
        [
          styles.color_white,
          styles.text_align_right,
          styles.cursor_pointer,
        ].join(' '),
      ],
      ['onclick', onToggle]
    )(collapsed ? '☰' : '&times'),
    el('div', ['class', [collapsed ? styles.hide : ''].join(' ')])(
      link(l10n.todosPageTitle, '#/todos'),
      link(l10n.designSystemPageTitle, '#/design-system')
    )
  );
