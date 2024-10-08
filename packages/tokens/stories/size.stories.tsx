import type { default as Tokens } from '../dist';

import {
	Button,
	ToastContainer,
	ToastQueue,
	Tooltip,
	TooltipTrigger,
} from '@launchpad-ui/components';
import { Fragment } from 'react';

// @ts-expect-error ts not detecting d.ts for es file
import tokens from '../dist/index.es.js';

export default {
	title: 'Foundations/Tokens/Size',
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
									navigator.clipboard.writeText(`--lp-size-${key}`);
									ToastQueue.success('Copied!');
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
			<ToastContainer />
		</>
	),
};
