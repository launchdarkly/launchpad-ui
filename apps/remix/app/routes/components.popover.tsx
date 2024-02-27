import { Button, Popover } from '@launchpad-ui/core';

export default function Index() {
	return (
		<Popover isOpen>
			<Button>Target</Button>
			<div style={{ padding: '1.25rem' }}>Content to show</div>
		</Popover>
	);
}
