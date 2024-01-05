import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { recipe } from '@vanilla-extract/recipes';

const variants = recipe({
  base: {
    font: vars.label[1].medium,
    cursor: 'pointer',
    borderRadius: vars.border.radius.medium,
    border: `1px solid ${vars.color.border.interactive.secondary.base}`,
    ':focus-visible': {
      outline: `2px solid ${vars.color.shadow.interactive.focus}`,
      outlineOffset: '2px',
    },
    selectors: {
      '&[disabled][data-disabled]': {
        backgroundColor: vars.color.bg.interactive.disabled,
        border: `1px solid ${vars.color.border.interactive.disabled}`,
      },
    },
  },
  variants: {
    size: {
      small: {
        lineHeight: vars.font.size[300],
        padding: `3px ${vars.spacing[300]}`,
      },
      medium: {
        lineHeight: vars.font.size[300],
        padding: `7px ${vars.spacing[300]}`,
      },
      large: {
        fontSize: vars.font.size[300],
        padding: `7px ${vars.spacing[400]}`,
      },
    },
    variant: {
      default: {
        backgroundColor: vars.color.bg.interactive.secondary.base,
        color: vars.color.text.ui.primary.base,
        ':hover': {
          backgroundColor: vars.color.bg.interactive.secondary.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive.secondary.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive.secondary.focus,
        },
      },
      primary: {
        backgroundColor: vars.color.bg.interactive.primary.base,
        color: vars.color.text.interactive.primary.base,
        border: `1px solid ${vars.color.border.interactive.primary.base}`,
        ':hover': {
          backgroundColor: vars.color.bg.interactive.primary.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive.primary.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive.primary.focus,
        },
      },
      destructive: {},
      minimal: {},
      primaryFlair: {},
      defaultFlair: {},
      minimalFlair: {},
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'default',
  },
});

type ButtonVariants = RecipeVariants<typeof variants>;

export { variants };
export type { ButtonVariants };
