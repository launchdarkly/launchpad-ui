import { vars } from '@launchpad-ui/vars';

export default {
	title: 'Tokens/Typography',
};

export const Typography = {
	render: () => {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[900] }}>
				<div style={{ font: vars.display[1] }}>Display 1</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<h1 style={{ font: vars.heading[1].medium }}>Heading 1 - Medium</h1>
					<h1 style={{ font: vars.heading[1].semibold }}>Heading 1 - SemiBold</h1>
					<h1 style={{ font: vars.heading[1].extrabold }}>Heading 1 - ExtraBold</h1>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<h2 style={{ font: vars.heading[2].medium }}>Heading 2 - Medium</h2>
					<h2 style={{ font: vars.heading[2].semibold }}>Heading 2 - SemiBold</h2>
					<h2 style={{ font: vars.heading[2].extrabold }}>Heading 2 - ExtraBold</h2>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<h3 style={{ font: vars.heading[3].medium }}>Heading 3 - Medium</h3>
					<h3 style={{ font: vars.heading[3].semibold }}>Heading 3 - SemiBold</h3>
					<h3 style={{ font: vars.heading[3].extrabold }}>Heading 3 - ExtraBold</h3>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.body[1].regular }}>Body 1 - Regular</span>
					<span style={{ font: vars.body[1].semibold }}>Body 1 - SemiBold</span>
					<span style={{ font: vars.body[1].extrabold }}>Body 1 - ExtraBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.body[2].regular }}>Body 2 - Regular</span>
					<span style={{ font: vars.body[2].semibold }}>Body 2 - SemiBold</span>
					<span style={{ font: vars.body[2].extrabold }}>Body 2 - ExtraBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.small[1].regular }}>Small 1 - Regular</span>
					<span style={{ font: vars.small[1].medium }}>Small 1 - Medium</span>
					<span style={{ font: vars.small[1].semibold }}>Small 1 - SemiBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<span style={{ font: vars.small[2].regular }}>Small 2 - Regular</span>
					<span style={{ font: vars.small[2].medium }}>Small 2 - Medium</span>
					<span style={{ font: vars.small[2].semibold }}>Small 2 - SemiBold</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<label style={{ font: vars.label[1].regular, display: 'block' }}>Label 1 - Regular</label>
					<label style={{ font: vars.label[1].medium, display: 'block' }}>Label 1 - Medium</label>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<label style={{ font: vars.label[2].regular, display: 'block' }}>Label 2 - Regular</label>
					<label style={{ font: vars.label[2].medium, display: 'block' }}>Label 2 - Medium</label>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: vars.spacing[600] }}>
					<code style={{ font: vars.code[1].regular, display: 'block' }}>Code 1 - Regular</code>
					<code style={{ font: vars.code[2].regular, display: 'block' }}>Code 2 - Regular</code>
				</div>
			</div>
		);
	},
};
