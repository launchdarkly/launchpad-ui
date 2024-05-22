import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Dialog, DialogTrigger, HoverTrigger, OverlayArrow, Popover } from '../src';

describe('Popover', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<DialogTrigger>
				<Button>Trigger</Button>
				<Popover>
					<OverlayArrow />
					<Dialog>Message</Dialog>
				</Popover>
			</DialogTrigger>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('dialog')).toBeVisible();
	});

	it('toggles on hover/unhover with HoverTrigger', async () => {
		const user = userEvent.setup();
		render(
			<HoverTrigger>
				<Button>Trigger</Button>
				<Popover>
					<OverlayArrow />
					<Dialog>Message</Dialog>
				</Popover>
			</HoverTrigger>,
		);

		await user.hover(screen.getByRole('button'));
		await user.pointer([{ keys: '[TouchA>]', target: screen.getByRole('button') }]);
		expect(await screen.findByRole('dialog')).toBeVisible();

		await user.pointer([{ pointerName: 'TouchA', target: document.body }, { keys: '[/TouchA]' }]);
		expect(await screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('toggles on click when hovered with HoverTrigger', async () => {
		const user = userEvent.setup();
		render(
			<HoverTrigger>
				<Button>Trigger</Button>
				<Popover>
					<OverlayArrow />
					<Dialog>Message</Dialog>
				</Popover>
			</HoverTrigger>,
		);

		await user.hover(screen.getByRole('button'));
		expect(await screen.findByRole('dialog')).toBeVisible();

		await user.click(screen.getByText('Trigger'));
		expect(await screen.queryByRole('dialog')).not.toBeInTheDocument();

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('dialog')).toBeVisible();
	});

	it('stays open when popover is hovered with HoverTrigger', async () => {
		const user = userEvent.setup();
		render(
			<HoverTrigger>
				<Button>Trigger</Button>
				<Popover>
					<OverlayArrow />
					<Dialog>Message</Dialog>
				</Popover>
			</HoverTrigger>,
		);

		await user.hover(screen.getByRole('button'));
		expect(await screen.findByRole('dialog')).toBeVisible();

		await user.hover(screen.getByRole('dialog'));
		expect(await screen.findByRole('dialog')).toBeVisible();
	});
});
