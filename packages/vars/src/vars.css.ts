import contract from '@launchpad-ui/tokens/dist/contract.json';
import { createGlobalThemeContract } from '@vanilla-extract/css';

const vars = createGlobalThemeContract(contract, (value) => `lp-${value}`);

export { vars };
