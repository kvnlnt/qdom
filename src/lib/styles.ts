import { style } from './dom';

const atoms = {
  fs_m: ['fontSize', '16px'],
  fs_l: ['fontSize', '18px'],
  fs_xl: ['fontSize', '24px'],
  text_strike: ['textDecoration', 'line-through'],
  cursor_pointer: ['cursor', 'pointer'],
};

export default style<typeof atoms>(atoms);
