import type { StoryObj } from '@storybook/react';

import { container, local } from './Story.css';

export default {
	title: 'Tokens/Vars',
};

type Story = StoryObj;

export const Example: Story = {
	render: () => (
		<div className={container}>I&apos;m styled by Vanilla Extract using our tokens</div>
	),
};

export const LocalScoped: Story = {
	render: () => <div className={local} />,
};
