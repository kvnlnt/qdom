import { el } from '../../lib/dom';
import Accordion from '../../elements/Accordion';
import l10n from '../../lib/l10n';
import { ComponentImplementation } from '~lib/types';
import DesignSystemState from './state';
import styles from '~lib/styles';

export default class DesignSystem implements ComponentImplementation {
  private designSystemState: DesignSystemState;
  private wrapper: HTMLElement = el('div')();

  constructor(designSystemState: DesignSystemState) {
    this.designSystemState = designSystemState;
    this.render = this.render.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.renderAccordionsExample = this.renderAccordionsExample.bind(this);
    this.designSystemState.sub(this.render);
  }

  handleToggle(idx: number) {
    const newAccordionItems = [...this.designSystemState.accordionItems];
    newAccordionItems[idx].collapsed = !newAccordionItems[idx].collapsed;
    this.designSystemState.accordionItems = newAccordionItems;
  }

  renderAccordionsExample() {
    return el('div')(
      ...this.designSystemState.accordionItems.map((item, idx: number) =>
        Accordion({
          ...item,
          onToggle: () => this.handleToggle(idx),
        })
      )
    );
  }

  render() {
    this.wrapper.innerHTML = '';
    const pageTitle = el('h1');
    const sectionWrapper = el('div');
    const sectionTitle = el('h2');
    const subSectionWrapper = el('div');
    const subSectionTitle = el('h3');
    const subSectionExample = el('div');

    this.wrapper.appendChild(
      el('div', ['class', [styles.padding_xl].join(' ')])(
        pageTitle(l10n.designSystemPageTitle),
        ...[
          {
            title: 'Forms',
            sections: [
              {
                title: 'Accordion',
                example: this.renderAccordionsExample(),
              },
            ],
          },
        ].map(({ title, sections }: { title: string; sections: [] }) =>
          sectionWrapper(
            sectionTitle(title),
            ...sections.map(({ title, example }) =>
              subSectionWrapper(
                subSectionTitle(title),
                subSectionExample(example)
              )
            )
          )
        )
      )
    );
    return this.wrapper;
  }
}
