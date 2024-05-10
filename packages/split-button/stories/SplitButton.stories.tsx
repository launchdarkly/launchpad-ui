import type { IconProps } from '@launchpad-ui/icons';
import type { Decorator, StoryObj } from '@storybook/react';
import type { ReactElement } from 'react';
import type { SplitButtonProps } from '../src';

import { Icon as LPIcon } from '@launchpad-ui/icons';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { Fragment, useState } from 'react';

import {
	SplitButton,
	SplitButtonDropdown,
	SplitButtonDropdownButton,
	SplitButtonMainButton,
} from '../src';

import './SplitButton.stories.css';

type SplitButtonStoryProps = SplitButtonProps & {
	icon?: ReactElement<IconProps>;
};

const SplitButtonExample = ({ icon, ...props }: SplitButtonStoryProps) => {
	const [open, setOpen] = useState(false);

	const handleSelect = (data: string | number | object) => {
		alert(JSON.stringify(data));
		setOpen(!open);
	};

	return (
		<SplitButton {...props}>
			<SplitButtonMainButton icon={icon}>{!icon && 'Save changes'}</SplitButtonMainButton>
			<SplitButtonDropdown
				isOpen={open}
				onInteraction={() => setOpen(!open)}
				onSelect={handleSelect}
			>
				<SplitButtonDropdownButton />
				<Menu>
					<MenuItem item={{ key: 'Saved changes' }}>Save changes</MenuItem>
					<MenuItem item={{ key: 'Saved with comment' }}>Save with comment</MenuItem>
				</Menu>
			</SplitButtonDropdown>
		</SplitButton>
	);
};

const splitButtonTemplateWithStates: Decorator = (storyComponent, context) => {
	const { viewMode, args } = context;

	const storyArgs = args as SplitButtonProps;

	const SplitButtonLabels = ['Hover', 'Focus visible', 'Active'];
	const SplitButtonStates = ['pseudo-hover-all', 'pseudo-focus-visible-all', 'pseudo-active-all'];

	const PseudoStateButtons = SplitButtonStates.map((className, index) => (
		<Fragment key={`${className}_Button`}>
			<span className="Button-state-label">
				{
					SplitButtonLabels[
						SplitButtonLabels.length - 1 >= index ? index : SplitButtonLabels.length - 1
					]
				}{' '}
			</span>
			<SplitButtonExample {...storyArgs} className={className} />
		</Fragment>
	));
	if (viewMode === 'docs') {
		return storyComponent();
	}
	return (
		<div className="Storygroup-wrapper">
			<span className="Button-state-label">Resting </span>
			{storyComponent()}
			{PseudoStateButtons}
			<span className="Button-state-label">Disabled</span>{' '}
			<SplitButtonExample {...storyArgs} disabled />
		</div>
	);
};

export default {
	component: SplitButtonExample,
	subcomponents: { SplitButtonMainButton, SplitButtonDropdownButton, SplitButtonDropdown },
	title: 'Legacy/Deprecated/SplitButton',
	description:
		'An element that presents an immediate action and additional options from a dropdown.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__SPLIT_BUTTON,
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
		isLoading: {
			control: 'boolean',
			table: {
				category: 'Presentation',
			},
		},
		isMainButtonDisabled: {
			table: {
				category: 'Presentation',
			},
		},
		isOpen: {
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
		placement: {
			table: {
				category: 'Presentation',
			},
		},
		size: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
		dropdownAriaLabel: {
			table: {
				category: 'Content',
				subcategory: 'Accessibility',
			},
		},
		loadingText: {
			table: {
				category: 'Content',
			},
		},
		dropButtonTooltip: {
			table: {
				category: 'Content',
				subcategory: 'SplitButton with Tooltip',
			},
		},
		mainButtonTooltip: {
			table: {
				category: 'Content',
				subcategory: 'SplitButton with Tooltip',
			},
		},
		tooltipOptions: {
			table: {
				category: 'Content',
				subcategory: 'SplitButton with Tooltip',
			},
		},
		name: {
			table: {
				category: 'DOM attributes',
			},
		},
		onClickDropdownButton: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
		onClickMainButton: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
		onInteraction: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
		onSelect: {
			table: {
				category: 'Functions',
				subcategory: 'Synthetic Events',
			},
		},
	},
	decorators: [splitButtonTemplateWithStates],
};

type Story = StoryObj<typeof SplitButtonExample>;

const SplitButtonArgs = {
	onSelect: () => undefined,
	onClickMainButton: () => undefined,
	name: 'Save changes',
	loadingText: 'Saving',
	children: (
		<Menu>
			<MenuItem onClick={() => undefined}>Save changes</MenuItem>
			<MenuItem onClick={() => undefined}>Save with comment</MenuItem>
		</Menu>
	),
};

export const Basic: Story = {
	args: {
		...SplitButtonArgs,
		kind: 'default',
	},
};

export const Primary: Story = {
	args: {
		...SplitButtonArgs,
		kind: 'primary',
	},
};

export const BasicSmall: Story = {
	args: {
		...SplitButtonArgs,
		kind: 'default',
		size: 'small',
	},
};

export const PrimarySmall: Story = {
	args: {
		...SplitButtonArgs,
		kind: 'primary',
		size: 'small',
	},
};

export const Icon: Story = {
	args: {
		...SplitButtonArgs,
		kind: 'default',
		size: 'small',
		icon: <LPIcon name="person" />,
	},
};
