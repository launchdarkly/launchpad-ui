import type { StoryObj } from '@storybook/react';

import { UploadButton } from '../src';

export default {
	component: UploadButton,
	title: 'Components/Button/UploadButton',
	description: 'UploadButtons trigger a native file upload experience.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__BUTTON,
		},
	},
	argTypes: {
		maxSize: {
			table: {
				category: 'Data attributes',
			},
		},
		accept: {
			table: {
				category: 'Data attributes',
			},
		},
		disabled: {
			table: {
				category: 'Data attributes',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
		onSelect: {
			table: {
				category: 'Functions',
			},
		},
	},
};

type Story = StoryObj<typeof UploadButton>;

export const Default: Story = {
	args: {
		onSelect: (file) => {
			alert(file?.name);
		},
		id: 'upload-button',
		children: 'Select file',
	},
	parameters: {
		a11y: {
			options: {
				rules: {
					// @fixme
					'duplicate-id-aria': { enabled: false },
				},
			},
		},
	},
};
