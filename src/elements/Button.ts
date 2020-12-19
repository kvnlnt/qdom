import { el } from '~lib/dom';

export default ({ text }: { text: string }) =>
  el('button', ['class', [].join(' ')])(text);
