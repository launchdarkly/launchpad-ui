import { vars } from '@launchpad-ui/vars';
import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const componentPopoverBoxShadow = createVar();

globalStyle(':root, [data-theme="default"]', {
  vars: {
    [componentPopoverBoxShadow]:
      '0 0 4px hsl(0 0% 15.7% / 0.12), 0 1px 2px hsl(0 0% 15.7% / 0.1), 0 4px 4px hsl(0 0% 15.7% / 0.08)',
  },
});

globalStyle('[data-theme="dark"]', {
  vars: {
    [componentPopoverBoxShadow]: `0 0 4px ${vars.color.shadow.ui.primary}, 0 1px 2px ${vars.color.shadow.ui.primary}, 0 4px 4px ${vars.color.shadow.ui.primary}`,
  },
});

const popover = style({
  border: `1px solid ${vars.color.border.ui.primary}`,
  background: vars.color.bg.overlay.primary,
  borderRadius: vars.border.radius.regular,
  maxHeight: '55vh',
  boxShadow: componentPopoverBoxShadow,
  display: 'flex',
  flexDirection: 'column',
});

const underlay = style({
  position: 'fixed',
  inset: 0,
});

const list = style({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  outline: 'none',
  fontSize: vars.font.size[300],
  overflow: 'auto',
});

const listSection = style({
  margin: 0,
  padding: 0,
});

const sectionHeader = style({
  backgroundColor: vars.color.bg.ui.secondary,
  color: vars.color.text.ui.secondary,
  fontWeight: vars.font.weight.bold,
  fontSize: vars.font.size[100],
  padding: `${vars.spacing[200]} ${vars.spacing[500]}`,
});

const sectionOptions = style({
  margin: 0,
  padding: 0,
});

const option = recipe({
  base: [
    {
      padding: `${vars.spacing[300]} ${vars.spacing[500]}`,
      color: vars.color.text.ui.primary.base,
      cursor: 'pointer',
      listStyleType: 'none',
      margin: 0,
      width: '100%',
      display: 'block',
      textDecoration: 'none',
      ':hover': {
        backgroundColor: 'rgb(64 91 255 / 0.15)',
      },
    },
  ],
  variants: {
    selected: {
      true: {
        backgroundColor: 'rgb(64 91 255 / 0.05)',
      },
    },
    focused: {
      true: {
        backgroundColor: 'rgb(64 91 255 / 0.15)',
        outline: 'none',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

export {
  componentPopoverBoxShadow,
  popover,
  underlay,
  list,
  listSection,
  sectionHeader,
  sectionOptions,
  option,
};
