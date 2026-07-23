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

	const renderSelect = (hasScrollLock?: boolean) =>
		render(
			<Select hasScrollLock={hasScrollLock}>
				<Label>Label</Label>
				<Button>
					<SelectValue />
					<Icon name="chevron-down" size="small" />
				</Button>
				<Popover>
					<ListBox>
						<ListBoxItem>Item one</ListBoxItem>
					</ListBox>
				</Popover>
			</Select>,
		);

	it('does not mark the popover when hasScrollLock defaults to true', async () => {
		const user = userEvent.setup();
		renderSelect();

		await user.click(screen.getByRole('button'));
		const popover = (await screen.findByRole('listbox')).closest('[data-trigger="Select"]');
		expect(popover).not.toHaveAttribute('data-no-scroll-lock');
	});

	it('marks the popover with data-no-scroll-lock when hasScrollLock is false', async () => {
		const user = userEvent.setup();
		renderSelect(false);

		await user.click(screen.getByRole('button'));
		const popover = (await screen.findByRole('listbox')).closest('[data-trigger="Select"]');
		expect(popover).toHaveAttribute('data-no-scroll-lock');
	});
});
