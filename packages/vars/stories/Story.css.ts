import { createVar, style } from '@vanilla-extract/css';

import { vars } from '../src';

export const accentVar = createVar();

export const container = style({
	backgroundColor: vars.color.bg.ui.secondary,
	color: vars.color.text.ui.secondary,
	padding: vars.spacing[500],
	border: `${vars.borderWidth[300]} solid ${vars.color.border.ui.primary}`,
	fontSize: vars.fontSize[300],
});

export const local = style({
	vars: {
		[accentVar]: vars.color.red[500],
	},
	selectors: {
		'[data-theme="dark"] &': {
			vars: { [accentVar]: vars.color.red[200] },
		},
	},
	backgroundColor: accentVar,
	height: '6.25rem',
	width: '6.25rem',
});
