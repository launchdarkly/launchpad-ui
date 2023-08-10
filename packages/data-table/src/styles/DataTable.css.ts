import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';

const table = style({
  borderCollapse: 'collapse',
  background: vars.color.bg.ui.primary,
});

const cell = style({
  padding: vars.spacing[500],
  cursor: 'default',
});

const focusVisible = style({
  outline: 'none',
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.shadow.interactive.primary}, 0 0 0 4px ${vars.color.shadow.interactive.focus}`,
  },
});

const active = style({
  background: vars.color.bg.interactive.secondary.active,
});

const header = style({
  borderBottom: `1px solid ${vars.color.border.ui.primary}`,
});

const border = style({
  border: `1px solid ${vars.color.border.ui.primary}`,
});

export { table, cell, focusVisible, active, header, border };
