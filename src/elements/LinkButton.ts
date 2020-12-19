import { el } from '~lib/dom';
import styles from '~lib/styles';

export default ({ text, href }: { text: string; href: string }) =>
  el(
    'a',
    ['href', href],
    [
      'class',
      [
        styles.padding_l,
        styles.bg_color_black,
        styles.bg_color_white_on_hover,
        styles.color_white,
        styles.color_black_on_hover,
        styles.width_min_content,
        styles.height_min_content,
        styles.inline_block,
      ].join(' '),
    ]
  )(text);
