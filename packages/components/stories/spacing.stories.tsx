import { Fragment } from 'react';

import type { default as Tokens } from '@launchpad-ui/tokens';
import tokens from '@launchpad-ui/tokens';
import tokenList from '@launchpad-ui/tokens/tokens.json';
import { vars } from '@launchpad-ui/vars';

import { Button } from '../src/Button';
import { ToastRegion, toastQueue } from '../src/Toast';
import { Tooltip, TooltipTrigger } from '../src/Tooltip';

export default {
	title: 'Tokens/Spacing',
};

const spacing: typeof Tokens.spacing = tokens.spacing;

// Each spacing token records the reference it was authored as, e.g. `{size.4}`, alongside
// the resolved value. The table shows both, so read the size back off the reference.
const spacingToSize = Object.fromEntries(
	tokenList.spacing.map((token) => {
		const authored = token.original.$value;
		const m = typeof authored === 'string' ? authored.match(/\{size\.(\d+)\}/) : null;
		return [token.path[1], m ? m[1] : ''];
	}),
);

export const Spacing = {
	render: () => (
		<>
			<div style={{ marginBottom: 'var(--lp-spacing-500)', font: vars.text.body[1].regular }}>
				Use <code style={{ font: vars.text.code[1].regular }}>var(--space-*)</code> for margin, padding, and gap. Need a
				negative offset? Wrap in <code style={{ font: vars.text.code[1].regular }}>calc()</code>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'max-content max-content min-content auto',
					alignItems: 'center',
					gap: 'var(--lp-spacing-700)',
				}}
			>
				{Object.entries(spacing).map(([key, value]) => (
					<Fragment key={key}>
						<TooltipTrigger>
							<Button
								onPress={() => {
									void navigator.clipboard.writeText(`--lp-spacing-${key}`);
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
								height: 'var(--lp-spacing-500)',
							}}
						/>
					</Fragment>
				))}
			</div>
			<ToastRegion />
		</>
	),
};
