import { Fragment } from 'react';

import type { default as Tokens } from '@launchpad-ui/tokens';
import tokens from '@launchpad-ui/tokens';

import { Button } from '../../src/Button';
import { ToastRegion, toastQueue } from '../../src/Toast';
import { Tooltip, TooltipTrigger } from '../../src/Tooltip';

export default {
	title: 'Tokens/Size',
	tags: ['!dev'],
};

const sizes: typeof Tokens.size = tokens.size;

export const Size = {
	render: () => (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'max-content auto max-content',
					alignItems: 'center',
					gap: 'var(--lp-size-24)',
				}}
			>
				{Object.entries(sizes).map(([key, value]) => (
					<Fragment key={key}>
						<TooltipTrigger>
							<Button
								onPress={() => {
									void navigator.clipboard.writeText(`--lp-size-${key}`);
									toastQueue.add({ title: 'Copied!', status: 'success' });
								}}
								style={{ font: 'var(--lp-text-code-1-regular)' }}
								variant="minimal"
							>
								{`--lp-size-${key}`}
							</Button>
							<Tooltip placement="bottom">Copy to clipboard</Tooltip>
						</TooltipTrigger>
						<div>{value}</div>
						<div
							style={{
								backgroundColor: 'var(--lp-color-green-500)',
								width: value,
								height: 'var(--lp-size-16)',
							}}
						/>
					</Fragment>
				))}
			</div>
			<ToastRegion />
		</>
	),
};
