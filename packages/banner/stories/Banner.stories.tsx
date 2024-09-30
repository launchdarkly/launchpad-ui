import type { StoryObj } from '@storybook/react';

import { Banner } from '../src';

export default {
	component: Banner,
	title: 'Legacy/Deprecated/Banner',
	description: 'Banners contain a system-wide message or status.',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__BANNER,
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
		dismissible: {
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
		onDismiss: {
			table: {
				category: 'Presentation',
			},
		},
		children: {
			table: {
				category: 'Content',
			},
		},
	},
};

type Story = StoryObj<typeof Banner>;

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error: Story = {
	args: { children: 'Error banner with icon', kind: 'error' },
};

export const Warning: Story = {
	args: { children: 'Warning banner with icon', kind: 'warning' },
};

export const Info: Story = {
	args: { children: 'Info banner with icon', kind: 'info' },
};

export const WithStackedBanners: Story = {
	render: () => {
		return (
			<>
				<Banner kind="error">This is an example of Banners that are stacked</Banner>
				<Banner kind="error">This is an example of Banners that are stacked</Banner>
			</>
		);
	},
};

export const WithHeader: Story = {
	args: {
		header: 'Banner header',
		children: 'This is an example of a banner with a header',
		kind: 'error',
	},
};
