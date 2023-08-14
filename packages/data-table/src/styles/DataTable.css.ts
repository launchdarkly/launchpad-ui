import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const focusVisible = style({
  outline: 'none',
  ':focus-visible': {
    boxShadow: `0 0 0 2px ${vars.color.shadow.interactive.primary}, 0 0 0 4px ${vars.color.shadow.interactive.focus}`,
  },
});

const border = style({
  border: `1px solid ${vars.color.border.ui.primary}`,
});

const active = style({
  background: vars.color.bg.interactive.secondary.active,
});

const table = style([
  border,
  {
    borderCollapse: 'collapse',
    background: vars.color.bg.ui.primary,
  },
]);

const cell = style([
  focusVisible,
  {
    padding: `${vars.spacing[500]} ${vars.spacing[600]}`,
    cursor: 'default',
  },
]);

const headerCell = style([
  cell,
  {
    padding: `1rem ${vars.spacing[600]}`,
  },
]);

const row = recipe({
  base: [focusVisible, border],
  variants: {
    active: {
      true: active,
    },
  },
});

const header = style({
  borderBottom: `1px solid ${vars.color.border.ui.primary}`,
});

export { table, cell, headerCell, row, header };
