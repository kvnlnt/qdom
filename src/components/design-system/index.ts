import { el } from '~lib/dom';
import { ComponentImplementation } from '../../lib/types';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('div')('design system');
  constructor() {}
  render() {
    return this.wrapper;
  }
}
