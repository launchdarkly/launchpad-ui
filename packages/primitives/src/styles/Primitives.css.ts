import { vars } from '@launchpad-ui/vars';
import { createVar, globalStyle, style } from '@vanilla-extract/css';

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

export { componentPopoverBoxShadow, popover };
