import type { StoryObj } from '@storybook/react-vite';

import { Icon } from '../../icons/src';
import { IconField, TextField } from '../src';

export default {
	component: IconField,
	title: 'Legacy/Form/IconField',
	description: 'An IconField renders an icon placed next to a passed field."',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
};

type Story = StoryObj<typeof IconField>;

export const Default: Story = {
	args: {
		icon: <Icon name="info" />,
		children: <TextField id="Date" value="12/01/2022" />,
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
					'duplicate-id-active': { enabled: false },
					label: { enabled: false },
				},
			},
		},
	},
};
