import { createGlobalThemeContract } from '@vanilla-extract/css';

import contract from '@launchpad-ui/tokens/dist/contract.json';

const vars = createGlobalThemeContract(contract, (value) => `lp-${value}`);

export { vars };
