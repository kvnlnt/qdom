import { NamespaceEnum, Tags, Attrs, Atom } from './types';

function EL<T extends keyof HTMLElementTagNameMap>(
  { tag, attrs = [], children = [] }: Tags<T>,
  namespace: NamespaceEnum = NamespaceEnum.xhtml
) {
  const el: Element = document.createElementNS(namespace, tag);
  const attr = attrs.filter((i) => ![':ref', ':pub', ':sub'].includes(i[0]));
  attr.forEach(([k, v]: Attrs<T>) => {
    if (typeof v === 'function') {
      el.addEventListener(k.substring(2, k.length), (e) => v(e));
    } else {
      el.setAttribute(k, v.toString());
    }
  });
  children.forEach((child) => {
    if (child instanceof Node) el.appendChild(child);
    if (typeof child === 'string') el.innerHTML += child;
  });
  return el;
}

export function el<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  ...attrs: Attrs<T>[]
): Function {
  return (...children: Tags<T>[]) => EL<T>({ tag, attrs, children });
}

export function elSvg<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  ...attrs: Attrs<T>[]
): Function {
  return (...children: Tags<T>[]) =>
    EL<T>({ tag, attrs, children }, NamespaceEnum.svg);
}

const CreateStyleSheet = (css: string): void => {
  const style = document.createElement('style');
  style.innerHTML = css;
  document.getElementsByTagName('head')[0].appendChild(style);
};

export const style = <T>(
  rules: {
    [key in keyof T]: Atom;
  }
): {
  [key in keyof T]: string;
} => {
  const css: any = {};
  const styles: string[] = [];
  Object.entries(rules).forEach(([k, v]: [string, Atom]) => {
    const suffix = v[2] ? `${v[2]}` : '';
    const declaration = `.${k}${suffix}{${(<string>v[0])
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()}:${v[1]}}`;
    css[k] = k;
    styles.push(declaration);
  });
  CreateStyleSheet(styles.join(''));
  return css;
};
