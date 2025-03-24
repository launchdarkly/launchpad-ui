import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Button, Form, Perceivable, Tooltip, TooltipTrigger } from '../src';

describe('Perceivable', () => {
	it('sets aria-disabled', async () => {
		render(
			<Perceivable>
				<TooltipTrigger>
					<Button>Button</Button>
					<Tooltip>Message</Tooltip>
				</TooltipTrigger>
			</Perceivable>,
		);

		await waitFor(() => {
			expect(screen.getByRole('button', { hidden: true })).toHaveAttribute('aria-disabled', 'true');
		});
	});

	it('prevents events', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();

		render(
			<Perceivable>
				<TooltipTrigger>
					<Button onPress={spy}>Button</Button>
					<Tooltip>Message</Tooltip>
				</TooltipTrigger>
			</Perceivable>,
		);

		await user.click(screen.getByRole('button', { hidden: true }));
		expect(spy).not.toHaveBeenCalled();
	});

	it('prevents form submission', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();

		render(
			<Form onSubmit={spy}>
				<Perceivable>
					<TooltipTrigger>
						<Button type="submit" name="name" value="value">
							Button
						</Button>
						<Tooltip placement="right">Message</Tooltip>
					</TooltipTrigger>
				</Perceivable>
			</Form>,
		);

		await user.click(screen.getByRole('button', { hidden: true }));
		expect(spy).not.toHaveBeenCalled();
	});
});
