import {
  AccordionImplementation,
  DesignSystemStateOptions,
  StateImplementation,
} from '../../lib/types';

export default class DesignSystemState implements StateImplementation {
  private _accordionItems: AccordionImplementation[] = [];
  subs: Function[] = [];
  constructor({ accordionItems }: DesignSystemStateOptions) {
    this._accordionItems = accordionItems;
  }
  sub(func: Function) {
    this.subs.push(func);
  }
  public get accordionItems() {
    return this._accordionItems;
  }
  public set accordionItems(accordionItems: AccordionImplementation[]) {
    this._accordionItems = accordionItems;
    this.subs.forEach((sub) => sub(this._accordionItems));
  }
}
