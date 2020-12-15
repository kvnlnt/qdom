import { el } from './lib/dom';
import { StateImplementation, ComponentImplementation } from './lib/types';

function route(): HTMLElement {
  const hash = window.location.hash;
  const p1 = /^#\/page-1$/;
  const p2 = /^#\/page-2$/;
  const p3 = /^#\/page-3$/;
  const p4 = /^#\/page\/([\d])$/;
  if (p1.test(hash)) return el('div')('page-1');
  if (p2.test(hash)) return el('div')('page-2');
  if (p3.test(hash)) return el('div')('page-3');
  if (p4.test(hash)) return el('div')('page-' + hash.match(p4)[1]);
}

const Menu = el('div')(
  el('a', ['href', '#/page-1'])('page-1'),
  el('a', ['href', '#/page-2'])('page-2'),
  el('a', ['href', '#/page-3'])('page-3'),
  el('a', ['href', '#/page/4'])('page-4')
);

window.addEventListener('DOMContentLoaded', () => {
  const root: HTMLElement = document.getElementById('root');
  root.appendChild(Menu);
  root.appendChild(route());
  window.onhashchange = () => {
    root.innerHTML = '';
    root.appendChild(Menu);
    root.appendChild(route());
  };
});
