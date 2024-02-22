import {
	Button,
	Label,
	ListBox,
	ListBoxItem,
	Popover,
	Select,
	SelectValue,
} from '@launchpad-ui/components';
import { Icon } from '@launchpad-ui/icons';

export default function Index() {
	return (
		<Select isOpen>
			<Label>Label</Label>
			<Button>
				<SelectValue />
				<Icon name="chevron-down" size="small" />
			</Button>
			<Popover>
				<ListBox>
					<ListBoxItem>Item one</ListBoxItem>
					<ListBoxItem>Item two</ListBoxItem>
					<ListBoxItem>Item three</ListBoxItem>
				</ListBox>
			</Popover>
		</Select>
	);
}
