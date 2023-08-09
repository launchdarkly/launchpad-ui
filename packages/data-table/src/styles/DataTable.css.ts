import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';

const table = style({
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
});

const cell = style({
  padding: `${vars.spacing[300]} ${vars.spacing[400]}`,
  outline: 'none',
  cursor: 'default',
});

export { table, cell };
