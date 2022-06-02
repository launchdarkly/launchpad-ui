import { Globals } from '@react-spring/web';
import isChromatic from 'chromatic/isChromatic';

import '../packages/tokens/dist/index.css';

if (isChromatic()) {
  Globals.assign({
    skipAnimation: true,
  });
}

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    storySort: {
      order: ['Components', 'Tokens'],
      locales: 'en-US',
    },
  },
};
