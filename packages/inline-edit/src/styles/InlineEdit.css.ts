import type { RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const container = style({
	display: 'flex',
	gap: vars.spacing[300],
	alignItems: 'center',
});

const inline = recipe({
	variants: {
		layout: {
			vertical: { flexDirection: 'column', alignItems: 'flex-start' },
			horizontal: { flexDirection: 'row' },
		},
	},
});

const cancelButton = style({
	selectors: {
		'[class*="_Button--icon"]&': {
			height: '1.875rem',
			width: '1.875rem',
		},
	},
});

const readButton = style({
	display: 'inline-block',
	padding: `${vars.spacing[200]} ${vars.spacing[300]}`,
	borderRadius: vars.borderRadius.regular,
	':hover': {
		background: vars.color.bg.interactive.tertiary.hover,
		cursor: 'pointer',
	},
	':focus-visible': {
		borderRadius: vars.borderRadius.medium,
		boxShadow: `0 0 0 2px ${vars.color.bg.ui.primary}, 0 0 0 4px ${vars.color.shadow.interactive.focus}`,
		outline: 0,
		zIndex: 2,
	},
});

type InlineVariants = RecipeVariants<typeof inline>;

export { container, cancelButton, inline, readButton };
export type { InlineVariants };
