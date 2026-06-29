import { vars } from '@launchpad-ui/vars';
import { useEffect, useRef, useState } from 'react';

import { Button } from '../../components/src/Button';
import { ToastRegion, toastQueue } from '../../components/src/Toast';
import { Tooltip, TooltipTrigger } from '../../components/src/Tooltip';
import { type ComputedValue, getTokenHex, getTokenValue, TokenCode } from './colorTokens';

export default {
	title: 'Tokens/Color',
	tags: ['!dev'],
};

const ALIAS = ['bg', 'border', 'fill', 'shadow', 'text', 'data'];

const flatten = (obj: Record<string, unknown>) => {
	const result = {};

	for (const i in obj) {
		if (typeof obj[i] === 'object' && !Array.isArray(obj[i])) {
			// @ts-expect-error fixme
			const temp = flatten(obj[i]);

			for (const j in temp) {
				const key = j !== ' ' ? `${i}-${j}` : i;
				// @ts-expect-error fixme
				result[key] = temp[j];
			}
		} else {
			// @ts-expect-error fixme
			result[i] = obj[i];
		}
	}
	return result;
};

const TokenTable = ({ tokens }: { tokens: Record<string, string> }) => {
	const itemEls = useRef<Record<string, HTMLDivElement | null>>({});
	const [colors, setColors] = useState<Record<string, ComputedValue>>({});

	useEffect(() => {
		for (const [key, value] of Object.entries(itemEls.current)) {
			if (!value) {
				continue;
			}

			const styles = getComputedStyle(value);
			const item = {
				[key]: { color: styles.backgroundColor, image: styles.backgroundImage },
			};
			setColors((c) => ({ ...c, ...item }));
		}
	}, []);

	return (
		<>
			<table style={{ borderCollapse: 'separate', borderSpacing: '20px 0' }}>
				<thead>
					<tr>
						<th />
						<th style={{ textAlign: 'left' }}>Name</th>
						<th style={{ textAlign: 'left' }}>Hex</th>
						<th style={{ textAlign: 'left' }}>rgba</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(tokens).map(([key, value]) => {
						const computed = colors[key];
						const hex = getTokenHex(computed);

						return (
							<tr key={key}>
								<td>
									<div
										ref={(element) => {
											itemEls.current[key] = element;
										}}
										style={{
											background: value,
											height: '50px',
											width: '150px',
											border: '1px solid var(--lp-color-border-ui-primary)',
										}}
									/>
								</td>
								<td>
									<TooltipTrigger>
										<Button
											onPress={() => {
												navigator.clipboard.writeText(
													value.substring(value.lastIndexOf('--'), value.lastIndexOf(')')),
												);
												toastQueue.add({ title: 'Copied!', status: 'success' });
											}}
											style={{ font: 'var(--lp-text-code-1-regular)' }}
											variant="minimal"
										>
											{value.substring(value.lastIndexOf('--'), value.lastIndexOf(')'))}
										</Button>
										<Tooltip placement="bottom">Copy to clipboard</Tooltip>
									</TooltipTrigger>
								</td>
								<td>
									{/* Gradients have no single hex value. */}
									<TokenCode>{hex ?? (computed ? '—' : null)}</TokenCode>
								</td>
								<td>
									{/* rgba is kept for backwards compatibility now that hex is shown. */}
									<TokenCode muted={Boolean(hex)}>{getTokenValue(computed)}</TokenCode>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<ToastRegion />
		</>
	);
};

const DEPRECATED_BRAND = ['brand-yellow', 'brand-green'];
const DEPRECATED_GRADIENTS = ['yellow-cyan', 'yellow-pink', 'yellow-blue-pale'];

const isDeprecatedToken = (key: string) =>
	DEPRECATED_BRAND.some((prefix) => key.startsWith(prefix)) || DEPRECATED_GRADIENTS.includes(key);

const global = Object.keys(vars.color)
	.filter((key) => !ALIAS.includes(key))
	.reduce((obj, key) => {
		// @ts-expect-error fixme
		obj[key] = vars.color[key];
		return obj;
	}, {});

export const Global = {
	render: () => (
		<TokenTable
			tokens={Object.fromEntries(
				Object.entries({ ...flatten(global), ...vars.gradient }).filter(
					([key]) => !isDeprecatedToken(key),
				),
			)}
		/>
	),
};

const alias = Object.keys(vars.color)
	.filter((key) => ALIAS.includes(key))
	.reduce((obj, key) => {
		// @ts-expect-error fixme
		obj[key] = vars.color[key];
		return obj;
	}, {});

export const Alias = {
	render: () => <TokenTable tokens={flatten(alias)} />,
};
