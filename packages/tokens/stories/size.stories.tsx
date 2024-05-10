import type { default as Tokens } from '../dist';

import { CopyToClipboard } from '@launchpad-ui/clipboard';

// @ts-expect-error ts not detecting d.ts for es file
import tokens from '../dist/index.es.js';

export default {
	title: 'Foundations/Tokens/Size',
};

const sizes: typeof Tokens.size = tokens.size;

const valueInPx = (value: string) => {
	const removeRemChars = value.slice(0, -3); // remove 'rem' from string
	const stringToNumber = Number.parseFloat(removeRemChars.toString());

	return `(${stringToNumber * 16}px)`;
};

export const Size = {
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'max-content auto max-content',
				alignItems: 'center',
				gap: 'var(--lp-size-24)',
			}}
		>
			{Object.entries(sizes).map(([key, value]) => (
				<>
					<CopyToClipboard text={`--lp-size-${key}`}>{`--lp-size-${key}`}</CopyToClipboard>
					<div>
						{value}
						{valueInPx(value)}
					</div>
					<div
						style={{
							backgroundColor: 'var(--lp-color-system-green-500)',
							width: value,
							height: 'var(--lp-size-16)',
						}}
					/>
				</>
			))}
		</div>
	),
};
