import type { Decorator, StoryObj } from '@storybook/react-vite';

import { Fragment } from 'react';

import { Icon } from '../../icons/src';
import { IconButton } from '../src';

import './Button.stories.css';

const buttonTemplateWithStates: Decorator = (storyComponent, context) => {
	const { viewMode, args } = context;

	// biome-ignore lint/suspicious/noExplicitAny: ignore
	const storyArgs = args as any;
	const buttonLabel = storyArgs?.children || '';

	const ButtonLabels = ['Hover', 'Focus visible', 'Active'];
	const ButtonStates = ['pseudo-hover', 'pseudo-focus-visible', 'pseudo-active'];

	const PseudoStateButtons = ButtonStates.map((className, index) => (
		<Fragment key={`${className}_Button`}>
			<span className="Button-state-label">
				{ButtonLabels[ButtonLabels.length - 1 >= index ? index : ButtonLabels.length - 1]}
			</span>
			<IconButton {...storyArgs} className={className}>
				{buttonLabel}
			</IconButton>
		</Fragment>
	));

	if (viewMode === 'docs') {
		return storyComponent();
	}

	return (
		<div className="Storygroup-wrapper">
			<span className="Button-state-label">Resting</span>
			{storyComponent()}
			{PseudoStateButtons}
			<span className="Button-state-label">Disabled</span>
			<IconButton {...storyArgs} disabled>
				{buttonLabel}
			</IconButton>
		</div>
	);
};

export default {
	component: IconButton,
	title: 'Legacy/Button/IconButton',
	description: 'Buttons trigger actions based on user interaction.',
	decorators: [buttonTemplateWithStates],
	parameters: {
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		'data-test-id': {
			control: 'text',
			table: {
				category: 'Testing',
				subcategory: 'Data attributes',
			},
		},
		className: {
			table: {
				category: 'Presentation',
			},
		},
		disabled: {
			control: 'boolean',
			table: {
				category: 'Presentation',
			},
		},
		icon: {
			table: {
				category: 'Presentation',
				subcategory: 'Icon Button',
			},
		},
		kind: {
			table: {
				category: 'Presentation',
			},
		},
		'aria-label': {
			table: {
				category: 'Content',
				subcategory: 'Accessibility',
			},
		},
		id: {
			table: {
				category: 'DOM attributes',
			},
		},
		name: {
			table: {
				category: 'DOM attributes',
			},
		},
		tabIndex: {
			table: {
				category: 'DOM attributes',
				disable: true,
			},
		},
		type: {
			table: {
				category: 'DOM attributes',
			},
		},
		onClick: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
		onMouseEnter: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
		onMouseLeave: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
	},
};

type Story = StoryObj<typeof IconButton>;

const icon = <Icon name="add" />;

export const Minimal: Story = {
	args: { icon, 'aria-label': 'Button' },
};

export const Basic: Story = {
	args: {
		icon,
		'aria-label': 'Button',
		kind: 'default',
	},
};

export const Primary: Story = {
	args: {
		icon,
		'aria-label': 'Button',
		kind: 'primary',
	},
};

export const Destructive: Story = {
	args: {
		icon,
		'aria-label': 'Button',
		kind: 'destructive',
	},
};

export const Close: Story = {
	args: {
		icon,
		'aria-label': 'Button',
		kind: 'close',
	},
};

export const Small: Story = {
	args: {
		icon,
		size: 'small',
		'aria-label': 'Button',
		kind: 'default',
	},
};

export const AsAnchorChild: Story = {
	args: {
		children: <a href="/">Anchor tag</a>,
		asChild: true,
		'aria-label': 'Anchor child',
		icon,
		kind: 'destructive',
	},
};
