// BASE

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

export interface StateImplementation {
  subs: Function[];
  sub: (func: Function) => void;
}

export interface ComponentImplementation {
  render: (args?: {}) => HTMLElement;
}

// ELEMENTS

export interface AccordionImplementation {
  title: string;
  body: HTMLElement;
  collapsed: boolean;
  onToggle?: Function;
}

// COMPONENTS

export interface DesignSystemStateOptions {
  accordionItems: AccordionImplementation[];
}
