import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { recipe } from '@vanilla-extract/recipes';

import { variants as buttonGroup } from './ButtonGroup.css';

const variants = recipe({
  base: {
    font: vars.label[1].medium,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: vars.border.radius.medium,
    borderStyle: 'solid',
    borderWidth: '1px',
    ':focus-visible': {
      outline: `2px solid ${vars.color.shadow.interactive.focus}`,
      outlineOffset: '2px',
    },
    selectors: {
      '&[disabled][data-disabled]': {
        background: 'unset',
        backgroundColor: vars.color.bg.interactive.disabled,
        borderColor: vars.color.border.interactive.disabled,
        color: vars.color.text.interactive.disabled,
        cursor: 'not-allowed',
      },
      [`${buttonGroup.classNames.variants.spacing.compact} &:first-child`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 'none',
      },
      [`${buttonGroup.classNames.variants.spacing.compact} &:last-child`]: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 'none',
      },
      [`${buttonGroup.classNames.variants.spacing.compact} &:not(:first-child):not(:last-child)`]: {
        borderRadius: 0,
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
        borderColor: vars.color.border.interactive.secondary.base,
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
        borderColor: vars.color.border.interactive.primary.base,
        color: vars.color.text.interactive.primary.base,
        ':hover': {
          backgroundColor: vars.color.bg.interactive.primary.hover,
          borderColor: vars.color.border.interactive.primary.hover,
          color: vars.color.text.interactive.primary.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive.primary.active,
          borderColor: vars.color.border.interactive.primary.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive.primary.focus,
          borderColor: vars.color.border.interactive.primary.focus,
        },
      },
      destructive: {
        backgroundColor: vars.color.bg.interactive.destructive.base,
        borderColor: vars.color.border.interactive.destructive,
        color: vars.color.text.interactive.destructive,
        ':hover': {
          backgroundColor: vars.color.bg.interactive.destructive.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive.destructive.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive.destructive.focus,
        },
      },
      minimal: {
        backgroundColor: vars.color.bg.interactive.tertiary.base,
        border: 'none',
        color: vars.color.text.ui.primary.base,
        ':hover': {
          backgroundColor: vars.color.bg.interactive.tertiary.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive.tertiary.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive.tertiary.focus,
        },
        selectors: {
          '&[disabled][data-disabled]': {
            backgroundColor: vars.color.bg.interactive.tertiary.base,
          },
        },
      },
      primaryFlair: {
        background: 'linear-gradient(124deg, #a34fde 0%, #405bff 98.05%)',
        borderColor: vars.color.border.interactive['primary-flair'].base,
        color: vars.color.text.interactive.primary.base,
        ':hover': {
          background: 'linear-gradient(124deg, #9655c3 0%, #4b5fdd 98.05%)',
          borderColor: vars.color.border.interactive['primary-flair'].hover,
        },
        ':active': {
          background: 'linear-gradient(124deg, #8741b9 0%, #3b50ce 98.05%)',
          borderColor: vars.color.border.interactive['primary-flair'].active,
        },
        ':focus-visible': {
          background: 'linear-gradient(124deg, #8741b9 0%, #3b50ce 98.05%)',
          borderColor: vars.color.border.interactive['primary-flair'].focus,
        },
      },
      defaultFlair: {
        backgroundColor: vars.color.bg.interactive['secondary-flair'].base,
        borderColor: vars.color.border.interactive['secondary-flair'].base,
        color: vars.color.text.interactive.flair.base,
        ':hover': {
          backgroundColor: vars.color.bg.interactive['secondary-flair'].hover,
          borderColor: vars.color.border.interactive['secondary-flair'].hover,
          color: vars.color.text.interactive.flair.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive['secondary-flair'].active,
          borderColor: vars.color.border.interactive['secondary-flair'].active,
          color: vars.color.text.interactive.flair.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive['secondary-flair'].focus,
          borderColor: vars.color.border.interactive['secondary-flair'].focus,
          color: vars.color.text.interactive.flair.focus,
        },
      },
      minimalFlair: {
        backgroundColor: vars.color.bg.interactive['tertiary-flair'].base,
        border: 'none',
        color: vars.color.text.interactive.flair.base,
        ':hover': {
          backgroundColor: vars.color.bg.interactive['tertiary-flair'].hover,
          color: vars.color.text.interactive.flair.hover,
        },
        ':active': {
          backgroundColor: vars.color.bg.interactive['tertiary-flair'].active,
          color: vars.color.text.interactive.flair.active,
        },
        ':focus-visible': {
          backgroundColor: vars.color.bg.interactive['tertiary-flair'].focus,
          color: vars.color.text.interactive.flair.focus,
        },
      },
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
