import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const inline = recipe({
  variants: {
    layout: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row' },
    },
  },
});

const container = style({
  display: 'flex',
  gap: vars.spacing[300],
});

const cancelButton = style({
  selectors: {
    '.Button--icon&': {
      height: '3rem',
      width: '3rem',
    },
  },
});

type InlineVariants = RecipeVariants<typeof inline>;

export { container, cancelButton, inline };
export type { InlineVariants };
