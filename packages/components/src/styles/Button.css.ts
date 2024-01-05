import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const base = style({
  font: vars.label[1].medium,
});

const variants = recipe({
  variants: {
    size: {
      small: {
        transform: 'scale(0.25)',
      },
      medium: {
        transform: 'scale(0.375)',
      },
      large: {
        transform: 'scale(0.5)',
      },
    },
  },
});

type ButtonVariants = RecipeVariants<typeof variants>;

export { base, variants };
export type { ButtonVariants };
