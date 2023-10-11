import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const focusShadow = {
  boxShadow: `0 0 0 2px ${vars.color.shadow.interactive.primary}, 0 0 0 4px ${vars.color.shadow.interactive.focus}`,
};

const focusVisible = style({
  outline: 'none',
  ':focus-visible': focusShadow,
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
    padding: `0.625rem ${vars.spacing[600]}`,
  },
]);

const selectCell = style({
  padding: vars.spacing[500],
});

const row = recipe({
  base: [focusVisible, border, { verticalAlign: 'top' }],
  variants: {
    active: {
      true: active,
    },
  },
});

const header = style({
  borderBottom: `1px solid ${vars.color.border.ui.primary}`,
});

const resizer = recipe({
  base: [
    {
      cursor: 'col-resize',
      alignSelf: 'stretch',
      width: '4px',
      background: vars.color.border.ui.primary,
      touchAction: 'none',
      flex: '0 0 auto',
      position: 'absolute',
      insetInlineEnd: 0,
      height: '100%',
      ':hover': {
        background: vars.color.shadow.interactive.focus,
      },
    },
  ],
  variants: {
    focus: {
      true: focusShadow,
    },
    active: {
      true: {
        background: vars.color.shadow.interactive.focus,
      },
    },
  },
});

export { table, cell, headerCell, selectCell, row, header, resizer };
