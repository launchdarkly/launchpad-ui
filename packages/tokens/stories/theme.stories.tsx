import type { Args, StoryContext } from '@storybook/react-vite';

import { Button } from '../../components/src/Button';

export default {
	title: 'Tokens/Themes',
};

export const NestedThemes = {
	render: (_args: Args, context: StoryContext) => {
		const NestedThemesComponent = () => {
			return (
				<>
					<div
						style={{
							backgroundColor: 'var(--lp-color-bg-ui-primary)',
							color: 'var(--lp-color-text-ui-primary-base)',
							border: '1px solid var(--lp-color-border-ui-primary)',
							padding: 'var(--lp-spacing-300)',
						}}
					>
						<h1>Default mode</h1>
						<p>Currently, we are in a default mode context.</p>
						<Button>Click me</Button>

						<div data-theme={context.globals.theme === 'dark' ? 'default' : 'dark'}>
							<div
								style={{
									backgroundColor: 'var(--lp-color-bg-ui-primary)',
									color: 'var(--lp-color-text-ui-primary-base)',
									border: '1px solid var(--lp-color-border-ui-primary)',
									marginTop: 'var(--lp-spacing-500)',
									padding: 'var(--lp-spacing-300)',
								}}
							>
								<h1>Inverted theme</h1>

								<p>
									By adding <code>data-theme=&quot;dark&quot;</code> to a container, you can make
									the children adopt that theme.
								</p>

								<Button>Click me</Button>
							</div>
						</div>
					</div>
				</>
			);
		};

		return <NestedThemesComponent />;
	},
	parameters: {
		docs: { disable: false },
		chromatic: {
			modes: {
				dark: { disable: true },
			},
		},
	},
};
