import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Dialog, DialogTrigger, OverlayArrow, Popover } from '../src';

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
});
