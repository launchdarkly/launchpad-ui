import type { Decorator, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { Fragment } from 'react';

import { Icon } from '../../icons/src';
import { Button } from '../src';

import './Button.stories.css';

const buttonTemplateWithStates: Decorator = (storyComponent, context) => {
	const { viewMode, args } = context;

	const storyArgs = args;
	const buttonLabel = (storyArgs?.children || '') as ReactNode;

	const ButtonLabels = ['Hover', 'Focus visible', 'Active'];
	const ButtonStates = ['pseudo-hover', 'pseudo-focus-visible', 'pseudo-active'];

	const PseudoStateButtons = ButtonStates.map((className, index) => (
		<Fragment key={`${className}_Button`}>
			<span className="Button-state-label">
				{ButtonLabels[ButtonLabels.length - 1 >= index ? index : ButtonLabels.length - 1]}
			</span>
			<Button {...storyArgs} className={className}>
				{buttonLabel}
			</Button>
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
			<Button {...storyArgs} disabled>
				{buttonLabel}
			</Button>
		</div>
	);
};

export default {
	component: Button,
	title: 'Legacy/Button',
	description: 'Buttons trigger actions based on user interaction.',
	decorators: [buttonTemplateWithStates],
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__BUTTON,
		},
		chromatic: { disableSnapshot: true },
	},
	argTypes: {
		testId: {
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
		fit: {
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
		renderIconFirst: {
			control: 'boolean',
			table: {
				category: 'Presentation',
			},
		},
		isLoading: {
			control: 'boolean',
			table: {
				category: 'Presentation',
			},
		},
		kind: {
			table: {
				category: 'Presentation',
			},
		},
		size: {
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
		children: {
			table: {
				category: 'Content',
			},
		},
		loadingText: {
			table: {
				category: 'Content',
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

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = { args: { children: 'Default' } };

export const Minimal: Story = { args: { children: 'Minimal', kind: 'minimal' } };

export const Primary: Story = { args: { children: 'Primary', kind: 'primary' } };

export const Close: Story = { args: { children: 'Close', kind: 'close' } };

export const Destructive: Story = {
	args: { children: 'Destructive', kind: 'destructive' },
};

export const Link: Story = { args: { children: 'Link', kind: 'link' } };

export const PrimaryFlair: Story = { args: { children: 'Primary flair', kind: 'primaryFlair' } };

export const PrimaryFlairWithIcon: Story = {
	args: { children: 'Primary flair with icon', icon: <Icon name="add" />, kind: 'primaryFlair' },
};

export const DefaultFlair: Story = {
	args: { children: 'Default flair', kind: 'defaultFlair' },
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const DefaultFlairWithIcon: Story = {
	args: { children: 'Default flair with icon', icon: <Icon name="add" />, kind: 'defaultFlair' },
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const MinimalFlair: Story = { args: { children: 'Minimal flair', kind: 'minimalFlair' } };

export const MinimalFlairWithIcon: Story = {
	args: { children: 'Minimal flair with icon', icon: <Icon name="add" />, kind: 'minimalFlair' },
};

export const AsAnchorChild: Story = {
	args: {
		children: <a href="/">Anchor tag</a>,
		asChild: true,
		icon: <Icon name="add" />,
		kind: 'destructive',
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'color-contrast': { enabled: false },
				},
			},
		},
	},
};

export const WithIcon: Story = {
	args: { children: 'With icon', icon: <Icon name="add" /> },
};

export const WithIconPrimary: Story = {
	args: { children: 'With icon', icon: <Icon name="chevron-down" />, kind: 'primary' },
};

export const BigButtonWithIcon: Story = {
	args: { children: 'Click me', icon: <Icon name="add" />, kind: 'primary', size: 'big' },
};

export const SmallButtonWithIcon: Story = {
	args: { children: 'Click me', icon: <Icon name="add" />, kind: 'primary', size: 'small' },
};

export const TinyButtonWithIcon: Story = {
	args: { children: 'Click me', icon: <Icon name="add" />, kind: 'primary', size: 'tiny' },
};

export const WithIconDestructive: Story = {
	args: {
		children: 'With icon',
		icon: <Icon name="add" />,
		kind: 'destructive',
	},
};

export const WithIconFirst: Story = {
	args: {
		children: 'With icon left',
		icon: <Icon name="add" />,
		renderIconFirst: true,
	},
};

export const DefaultTiny: Story = { args: { children: 'Tiny Button', size: 'tiny' } };

export const DefaultSmall: Story = { args: { children: 'Small Button', size: 'small' } };

export const DefaultBig: Story = { args: { children: 'Big Button', size: 'big' } };
