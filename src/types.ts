export enum NamespaceEnum {
  xhtml = 'http://www.w3.org/1999/xhtml',
  svg = 'http://www.w3.org/2000/svg',
}

export type Tags<T extends keyof HTMLElementTagNameMap> = {
  tag: T | string;
  attrs?: Attrs<T>[];
  children: Tags<T>[];
};

export type Attrs<X extends keyof Partial<HTMLElementTagNameMap>> = [
  Extract<keyof HTMLElementTagNameMap[X], string> | 'class',
  string | number | Function
];

export type Atom = [keyof CSSStyleDeclaration, string];

export interface StateInterface<T> {
  data: T;
  subs: Function[];
  sub: (func: Function) => void;
  get: () => T;
  set: (data: T) => void;
}

export interface ComponentInterface {
  wrapper: HTMLElement;
  render: () => HTMLElement;
}

export type TodoItem = string;
