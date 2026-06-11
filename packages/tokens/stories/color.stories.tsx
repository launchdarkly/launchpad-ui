import { vars } from '@launchpad-ui/vars';
import { useEffect, useRef, useState } from 'react';

import { Button } from '../../components/src/Button';
import { ToastRegion, toastQueue } from '../../components/src/Toast';
import { Tooltip, TooltipTrigger } from '../../components/src/Tooltip';

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

// Converts a computed `rgb()`/`rgba()` string to an uppercase hex string.
// Alpha is appended as an 8-digit hex only when the color is not fully opaque.
const rgbToHex = (rgb: string): string | null => {
	const match = rgb.match(/rgba?\(([^)]+)\)/);

	if (!match) {
		return null;
	}

	const parts = match[1].split(/[,/]/).map((part) => part.trim());
	const [r, g, b] = parts.map((part) => Number.parseFloat(part));

	if ([r, g, b].some((channel) => Number.isNaN(channel))) {
		return null;
	}

	const toHex = (channel: number) => Math.round(channel).toString(16).padStart(2, '0');
	let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

	const alpha = parts[3] !== undefined ? Number.parseFloat(parts[3]) : 1;

	if (!Number.isNaN(alpha) && alpha < 1) {
		hex += toHex(alpha * 255);
	}

	return hex.toUpperCase();
};

type ComputedValue = { color: string; image: string };

const TokenValue = ({ computed }: { computed?: ComputedValue }) => {
	if (!computed) {
		return null;
	}

	// Gradient tokens are painted via `background-image`, so `background-color`
	// resolves to the transparent default (`rgba(0, 0, 0, 0)`). Show the gradient
	// definition instead of a meaningless color value.
	if (computed.image && computed.image !== 'none') {
		return <span style={{ font: 'var(--lp-text-code-1-regular)' }}>{computed.image}</span>;
	}

	const hex = rgbToHex(computed.color);

	return (
		<span style={{ font: 'var(--lp-text-code-1-regular)' }}>
			{hex ? (
				<>
					{hex} {/* rgba is kept for backwards compatibility even though hex is now shown. */}
					<span style={{ color: 'var(--lp-color-text-ui-secondary)' }}>{computed.color}</span>
				</>
			) : (
				computed.color
			)}
		</span>
	);
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
						<th style={{ textAlign: 'left' }}>Value (hex / rgba)</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(tokens).map(([key, value]) => {
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
									<TokenValue computed={colors[key]} />
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
