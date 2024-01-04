import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const base = style({
  display: 'inline-block',
  transformOrigin: '0 0',
});

const outerCircle = style({
  stroke: vars.color.white[100],
});

const innerCircle = style({
  stroke: vars.color.gray[500],
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

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const indeterminate = style({
  animationName: spin,
  animationDuration: vars.duration[350],
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
});

type ProgressBarVariants = RecipeVariants<typeof variants>;

export { base, indeterminate, outerCircle, innerCircle, variants };
export type { ProgressBarVariants };
