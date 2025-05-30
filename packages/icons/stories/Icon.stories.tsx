import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/src/Button';
import { ToastRegion, toastQueue } from '../../components/src/Toast';
import { Tooltip, TooltipTrigger } from '../../components/src/Tooltip';
import { Icon } from '../src/Icon';
import { icons } from '../src/types';

const meta: Meta<typeof Icon> = {
	component: Icon,
	title: 'Components/Icons/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Example: Story = {
	args: {
		name: 'animal-cat',
	},
};

export const Gallery: Story = {
	render: () => {
		return (
			<>
				<div
					style={{
						display: 'grid',
						justifyContent: 'space-evenly',
						gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
						gridAutoRows: '1fr',
						rowGap: '2rem',
						columnGap: '1rem',
					}}
				>
					{icons.map((item, index) => (
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '1rem',
								textAlign: 'center',
							}}
							// biome-ignore lint/suspicious/noArrayIndexKey: ignore
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
							<TooltipTrigger>
								<Button
									size="small"
									onPress={() => {
										navigator.clipboard.writeText(item);
										toastQueue.add({ title: 'Copied!', status: 'success' });
									}}
									variant="minimal"
									style={{ font: 'var(--lp-text-code-2-regular)' }}
								>
									{item}
								</Button>
								<Tooltip placement="bottom">Copy to clipboard</Tooltip>
							</TooltipTrigger>
						</div>
					))}
				</div>
				<ToastRegion />
			</>
		);
	},
};

export const CustomSVG: Story = {
	args: {
		children: <use href="#app-icon-smile" />,
	},
};
