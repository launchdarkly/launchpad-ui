import type { default as Tokens } from '../dist';

import { Fragment } from 'react';

import { Button } from '../../components/src/Button';
import { ToastRegion, toastQueue } from '../../components/src/Toast';
import { Tooltip, TooltipTrigger } from '../../components/src/Tooltip';
// @ts-expect-error ts not detecting d.ts for es file
import tokens from '../dist/index.es.js';
// @ts-expect-error import JSON for mapping
import spacingJson from '../tokens/spacing.json';

export default {
	title: 'Tokens/Spacing',
};

const spacing: typeof Tokens.spacing = tokens.spacing;

const spacingToSize = Object.fromEntries(
	Object.entries(spacingJson.spacing)
		.filter(([k]) => !k.startsWith('$'))
		.map(([k, v]: [string, any]) => {
			const m = typeof v.$value === 'string' ? v.$value.match(/\{size\.(\d+)\}/) : null;
			return [k, m ? m[1] : ''];
		}),
);

export const Spacing = {
	render: () => (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'max-content max-content auto max-content',
					alignItems: 'center',
					gap: 'var(--lp-size-24)',
				}}
			>
				{Object.entries(spacing).map(([key, value]) => (
					<Fragment key={key}>
						<TooltipTrigger>
							<Button
								onPress={() => {
									navigator.clipboard.writeText(`--lp-spacing-${key}`);
									toastQueue.add({ title: 'Copied!', status: 'success' });
								}}
								style={{ font: 'var(--lp-text-code-1-regular)' }}
								variant="minimal"
							>
								{`--lp-spacing-${key}`}
							</Button>
							<Tooltip placement="bottom">Copy to clipboard</Tooltip>
						</TooltipTrigger>
						<div style={{ font: 'var(--lp-text-code-1-regular)' }}>
							{spacingToSize[key] ? `--lp-size-${spacingToSize[key]}` : ''}
						</div>
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
