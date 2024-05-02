import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, SnackbarContainer, SnackbarQueue, ToastContainer, ToastQueue } from '../src';

describe('Toast', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<>
				<ToastContainer />
				<Button onPress={() => ToastQueue.info('A toast!')}>Show toast</Button>
			</>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('region')).toBeVisible();
		expect(await screen.findByRole('alert')).toBeVisible();
	});

	it('renders snackbar', async () => {
		const user = userEvent.setup();
		render(
			<>
				<SnackbarContainer />
				<Button onPress={() => SnackbarQueue.info({ description: 'A snackbar!' })}>
					Show toast
				</Button>
			</>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('region')).toBeVisible();
		expect(await screen.findByRole('alert')).toBeVisible();
	});
});
