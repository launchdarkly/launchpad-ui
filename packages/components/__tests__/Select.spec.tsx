import { Icon } from '@launchpad-ui/icons';
import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue } from '../src';

describe('Select', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<Select>
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
			</Select>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('listbox')).toBeVisible();
	});
});
