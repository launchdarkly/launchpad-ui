import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';

const table = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[200],
});

export { table };
