import {
	Button,
	ToastContainer,
	ToastQueue,
	Tooltip,
	TooltipTrigger,
} from '@launchpad-ui/components';
import { vars } from '@launchpad-ui/vars';
import { useEffect, useRef, useState } from 'react';

export default {
	title: 'Tokens/Color',
};

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
	const [colors, setColors] = useState<Record<string, string>>({});

	useEffect(() => {
		for (const [key, value] of Object.entries(itemEls.current)) {
			const item = { [key]: getComputedStyle(value as Element).backgroundColor };
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
						<th style={{ textAlign: 'left' }}>Value</th>
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
												ToastQueue.success('Copied!');
											}}
											style={{ font: 'var(--lp-text-code-1-regular)' }}
											variant="minimal"
										>
											{value.substring(value.lastIndexOf('--'), value.lastIndexOf(')'))}
										</Button>
										<Tooltip placement="bottom">Copy to clipboard</Tooltip>
									</TooltipTrigger>
								</td>
								<td>{colors[key]}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<ToastContainer />
		</>
	);
};

const global = Object.keys(vars.color)
	.filter((key) => !['bg', 'border', 'fill', 'shadow', 'text'].includes(key))
	.reduce((obj, key) => {
		// @ts-expect-error fixme
		obj[key] = vars.color[key];
		return obj;
	}, {});

export const Global = {
	render: () => <TokenTable tokens={{ ...flatten(global), ...vars.gradient }} />,
};

const alias = Object.keys(vars.color)
	.filter((key) => ['bg', 'border', 'fill', 'shadow', 'text'].includes(key))
	.reduce((obj, key) => {
		// @ts-expect-error fixme
		obj[key] = vars.color[key];
		return obj;
	}, {});

export const Alias = {
	render: () => <TokenTable tokens={flatten(alias)} />,
};
