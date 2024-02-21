import { Button, Tooltip } from '@launchpad-ui/core';

export default function Index() {
	return (
		<Tooltip isOpen>
			<Button>Target</Button>
			<span>Content to show</span>
		</Tooltip>
	);
}
