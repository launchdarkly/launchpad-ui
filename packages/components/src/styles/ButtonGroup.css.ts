import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { recipe } from '@vanilla-extract/recipes';

const variants = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    spacing: {
      basic: {
        gap: vars.size[10],
      },
      compact: {
        gap: 'unset',
      },
      large: {
        gap: vars.spacing[600],
      },
    },
  },
  defaultVariants: {
    spacing: 'basic',
  },
});

type ButtonGroupVariants = RecipeVariants<typeof variants>;

export { variants };
export type { ButtonGroupVariants };
