import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import type { ArgsStoryFn } from '@storybook/types';

import { CopyToClipboard } from '@launchpad-ui/clipboard';

import { Icon } from '../src';
import { icons } from '../src/types';

const meta: Meta<typeof Icon> = {
	component: Icon,
	title: 'Foundations/Icons',
	parameters: {
		status: {
			type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
		},
	},
};

export default meta;

type Story = StoryObj<typeof Icon>;

const render: ArgsStoryFn<ReactRenderer> = () => (
	<div
		style={{
			display: 'grid',
			justifyContent: 'space-evenly',
			gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
			gridAutoRows: '1fr',
			rowGap: '1rem',
			columnGap: '1rem',
		}}
	>
		{icons.map((item, index) => (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '0.625rem',
					textAlign: 'center',
				}}
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				key={index}
			>
				<div
					style={{
						padding: '2rem',
						border: '1px dashed var(--lp-color-border-ui-primary)',
						borderRadius: 'var(--lp-border-radius-medium)',
						width: '100%',
					}}
				>
					<Icon name={item} size="medium" />
				</div>
				<CopyToClipboard text={item} asChild={true}>
					<span style={{ font: 'var(--lp-text-code-2-regular)' }}>{item}</span>
				</CopyToClipboard>
			</div>
		))}
	</div>
);

export const Sprites = {
	render,
};

export const Custom: Story = {
	args: {
		children: <use href="#app-icon-smile" />,
	},
};
