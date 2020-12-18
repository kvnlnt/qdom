import { el } from '~lib/dom';
import { DesignSystemStateOptions } from '~lib/types';

const DesignSystemData: DesignSystemStateOptions = {
  accordionItems: [
    {
      title: 'Item 1',
      body: el('div')('Content A'),
      collapsed: true,
    },
    {
      title: 'Item 2',
      body: el('div')('Content B'),
      collapsed: true,
    },
  ],
};

export default DesignSystemData;
