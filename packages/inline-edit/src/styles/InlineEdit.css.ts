import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const container = style({
  display: 'flex',
  gap: vars.spacing[300],
  alignItems: 'center',
});

const inline = recipe({
  variants: {
    layout: {
      vertical: { flexDirection: 'column', alignItems: 'flex-start' },
      horizontal: { flexDirection: 'row' },
    },
  },
});

const cancelButton = style({
  selectors: {
    '.Button--icon&': {
      height: '3rem',
      width: '3rem',
    },
  },
});

const readButton = style({
  display: 'block',
  padding: `${vars.spacing[200]} ${vars.spacing[300]}`,
  borderRadius: vars.border.radius.regular,
  ':hover': {
    background: vars.color.bg.interactive.tertiary.hover,
    cursor: 'pointer',
  },
});

type InlineVariants = RecipeVariants<typeof inline>;

export { container, cancelButton, inline, readButton };
export type { InlineVariants };
