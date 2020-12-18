import { el } from '../../lib/dom';
import Accordion from '../../elements/Accordion';
import l10n from '../../lib/l10n';
import { ComponentImplementation } from '~lib/types';
import DesignSystemState from './State';
import UI from '../UI/Main';

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

    const examples = [
      {
        title: 'Forms',
        sections: [
          {
            title: 'Accordion',
            example: this.renderAccordionsExample(),
          },
        ],
      },
    ];

    this.wrapper.appendChild(
      new UI(
        el('div')(
          pageTitle(l10n.designSystemPageTitle),
          ...examples.map(
            ({ title, sections }: { title: string; sections: [] }) =>
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
      ).render()
    );
    return this.wrapper;
  }
}
