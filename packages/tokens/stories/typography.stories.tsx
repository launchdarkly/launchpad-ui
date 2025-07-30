import { vars } from '@launchpad-ui/vars';

export default {
	title: 'Tokens/Typography',
	parameters: {
		docs: {
			description: {
				component:
					'Typography tokens for the LaunchPad design system. For components using these tokens, see [Text](/docs/components-content-text--docs), [Heading](/docs/components-content-heading--docs), [Label](/docs/components-content-label--docs), and [Code](/docs/components-content-code--docs).',
			},
		},
	},
};

export const Typography = {
	render: () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[900] }}>
				<div style={{ font: vars.text.display[1] }}>Display 1</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<h1 style={{ font: vars.text.heading[1].medium }}>Heading 1 - Medium</h1>
					<h1 style={{ font: vars.text.heading[1].semibold }}>Heading 1 - SemiBold</h1>
					<h1 style={{ font: vars.text.heading[1].extrabold }}>Heading 1 - ExtraBold</h1>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<h2 style={{ font: vars.text.heading[2].medium }}>Heading 2 - Medium</h2>
					<h2 style={{ font: vars.text.heading[2].semibold }}>Heading 2 - SemiBold</h2>
					<h2 style={{ font: vars.text.heading[2].extrabold }}>Heading 2 - ExtraBold</h2>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<h3 style={{ font: vars.text.heading[3].medium }}>Heading 3 - Medium</h3>
					<h3 style={{ font: vars.text.heading[3].semibold }}>Heading 3 - SemiBold</h3>
					<h3 style={{ font: vars.text.heading[3].extrabold }}>Heading 3 - ExtraBold</h3>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.text.body[1].regular }}>Body 1 - Regular</span>
					<span style={{ font: vars.text.body[1].semibold }}>Body 1 - SemiBold</span>
					<span style={{ font: vars.text.body[1].extrabold }}>Body 1 - ExtraBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.text.body[2].regular }}>Body 2 - Regular</span>
					<span style={{ font: vars.text.body[2].semibold }}>Body 2 - SemiBold</span>
					<span style={{ font: vars.text.body[2].extrabold }}>Body 2 - ExtraBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.text.small[1].regular }}>Small 1 - Regular</span>
					<span style={{ font: vars.text.small[1].medium }}>Small 1 - Medium</span>
					<span style={{ font: vars.text.small[1].semibold }}>Small 1 - SemiBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<label style={{ font: vars.text.label[1].regular, display: 'block' }}>
						Label 1 - Regular
					</label>
					<label style={{ font: vars.text.label[1].medium, display: 'block' }}>
						Label 1 - Medium
					</label>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<label style={{ font: vars.text.label[2].regular, display: 'block' }}>
						Label 2 - Regular
					</label>
					<label style={{ font: vars.text.label[2].medium, display: 'block' }}>
						Label 2 - Medium
					</label>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<code style={{ font: vars.text.code[1].regular, display: 'block' }}>
						Code 1 - Regular
					</code>
					<code style={{ font: vars.text.code[2].regular, display: 'block' }}>
						Code 2 - Regular
					</code>
				</div>
			</div>
		);
	},
};
