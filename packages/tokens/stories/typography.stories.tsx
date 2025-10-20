import { vars } from '@launchpad-ui/vars';

import { Button } from '../../components/src/Button';
import { ToastRegion, toastQueue } from '../../components/src/Toast';
import { Tooltip, TooltipTrigger } from '../../components/src/Tooltip';

export default {
	title: 'Tokens/Typography',
	tags: ['!dev'],
	parameters: {
		docs: {
			description: {
				component:
					'Typography tokens for the LaunchPad design system. For components using these tokens, see [Text](/docs/components-content-text--docs), [Heading](/docs/components-content-heading--docs), [Label](/docs/components-content-label--docs), and [Code](/docs/components-content-code--docs).',
			},
		},
	},
};

const flatten = (obj: Record<string, unknown>, prefix = ''): Record<string, string> => {
	const result: Record<string, string> = {};

	for (const [key, value] of Object.entries(obj)) {
		const newKey = prefix ? `${prefix}-${key}` : key;

		if (typeof value === 'string') {
			result[newKey] = value;
		} else if (typeof value === 'object' && value !== null) {
			Object.assign(result, flatten(value as Record<string, unknown>, newKey));
		}
	}

	return result;
};

const getDisplayText = (key: string) => {
	const parts = key.split('-');

	const category = parts[0]; // heading, body, etc.
	const size = parts[1]; // 1, 2, etc.
	const weight = parts[2]; // medium, semibold, etc.

	if (weight) {
		return `${category.charAt(0).toUpperCase() + category.slice(1)} ${size} - ${weight.charAt(0).toUpperCase() + weight.slice(1)}`;
	}
	if (category === 'display') {
		return `Display ${size}`;
	}

	return key;
};

const getSemanticElement = (token: string, font: string) => {
	const parts = token.split('-');
	const category = parts[0]; // heading, body, etc.
	const size = parts[1]; // 1, 2, etc.

	console.log({ category, token });

	switch (category) {
		case 'display':
			return {
				element: 'div',
				render: (text: string) => <div style={{ font }}>{text}</div>,
			};
		case 'heading':
			if (size === '1') {
				return {
					element: 'h1',
					render: (text: string) => <h1 style={{ font }}>{text}</h1>,
				};
			}
			if (size === '2') {
				return {
					element: 'h2',
					render: (text: string) => <h2 style={{ font }}>{text}</h2>,
				};
			}
			if (size === '3') {
				return {
					element: 'h3',
					render: (text: string) => <h3 style={{ font }}>{text}</h3>,
				};
			}
			return {
				element: 'div',
				render: (text: string) => <div style={{ font }}>{text}</div>,
			};
		case 'body':
		case 'small':
			return {
				element: 'span',
				render: (text: string) => <span style={{ font }}>{text}</span>,
			};
		case 'label':
			return {
				element: 'label',
				render: (text: string) => <label style={{ font }}>{text}</label>,
			};
		case 'code':
			return {
				element: 'code',
				render: (text: string) => <code style={{ font }}>{text}</code>,
			};
		default:
			return {
				element: 'div',
				render: (text: string) => <div style={{ font }}>{text}</div>,
			};
	}
};

const TokenTable = ({ tokens }: { tokens: Record<string, string> }) => {
	return (
		<>
			<table style={{ borderCollapse: 'separate', borderSpacing: '20px 0', width: '100%' }}>
				<thead>
					<tr>
						<th style={{ textAlign: 'left' }}>Sample</th>
						<th style={{ textAlign: 'left' }}>Name</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(tokens).map(([key, value]) => {
						const cssVar = `--lp-text-${key}`;
						const { element, render } = getSemanticElement(key, value);

						return (
							<tr key={key}>
								<td
									style={{
										paddingRight: vars.spacing[600],
										paddingTop: vars.spacing[300],
										paddingBottom: vars.spacing[300],
									}}
								>
									{render(getDisplayText(key))}
								</td>
								<td
									style={{
										paddingRight: vars.spacing[600],
										paddingTop: vars.spacing[300],
										paddingBottom: vars.spacing[300],
									}}
								>
									<TooltipTrigger>
										<Button
											onPress={() => {
												navigator.clipboard.writeText(`<${element} style="font: ${value}" />`);
												toastQueue.add({ title: 'Copied!', status: 'success' });
											}}
											style={{ font: 'var(--lp-text-code-1-regular)' }}
											variant="minimal"
										>
											{cssVar}
										</Button>
										<Tooltip placement="bottom">Copy to clipboard</Tooltip>
									</TooltipTrigger>
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

export const Typography = {
	render: () => <TokenTable tokens={flatten(vars.text)} />,
};
