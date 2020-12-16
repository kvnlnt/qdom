import { el } from '~lib/dom';
import { ComponentImplementation } from '../../lib/types';

export default class DesignSystem implements ComponentImplementation {
  wrapper: HTMLElement = el('div')('404');
  constructor() {}
  render() {
    return this.wrapper;
  }
}
