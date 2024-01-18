import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { recipe } from '@vanilla-extract/recipes';

const variants = recipe({
  base: {
    padding: 0,
  },
  variants: {
    size: {
      small: {
        height: vars.size[24],
        width: vars.size[24],
      },
      medium: {
        height: vars.size[32],
        width: vars.size[32],
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type IconButtonVariants = RecipeVariants<typeof variants>;

export { variants };
export type { IconButtonVariants };
