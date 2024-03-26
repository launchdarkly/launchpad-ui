import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Tooltip, TooltipTrigger } from '../src';

describe('Tooltip', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<TooltipTrigger>
				<Button>Trigger</Button>
				<Tooltip>Message</Tooltip>
			</TooltipTrigger>,
		);
		await user.hover(document.body);
		await user.hover(screen.getByRole('button'));
		expect(await screen.findByRole('tooltip')).toBeVisible();
	});

	it('remains open on hover of content', async () => {
		const user = userEvent.setup();
		render(
			<TooltipTrigger>
				<Button>Trigger</Button>
				<Tooltip>Message</Tooltip>
			</TooltipTrigger>,
		);
		await user.hover(document.body);
		await user.hover(screen.getByRole('button'));
		await user.hover(await screen.findByRole('tooltip'));
		expect(await screen.findByRole('tooltip')).toBeVisible();
	});
});
