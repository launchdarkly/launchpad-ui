import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';

const table = style({
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
  border: `1px solid ${vars.color.border.ui.primary}`,
  background: vars.color.bg.ui.primary,
});

const cell = style({
  padding: `${vars.spacing[300]} ${vars.spacing[400]}`,
  cursor: 'default',
});

const focusVisible = style({
  outline: 'none',
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.shadow.interactive.primary}, 0 0 0 4px ${vars.color.shadow.interactive.focus}`,
  },
});

export { table, cell, focusVisible };
