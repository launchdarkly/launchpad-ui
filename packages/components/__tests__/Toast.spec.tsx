import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, SnackbarRegion, ToastRegion, snackbarQueue, toastQueue } from '../src';

globalThis.matchMedia = vi.fn().mockReturnValue({
	matches: true,
	onchange: null,
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	dispatchEvent: vi.fn(),
	addListener: vi.fn(),
	removeListener: vi.fn(),
});

describe('Toast', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<>
				<ToastRegion />
				<Button onPress={() => toastQueue.add({ title: 'A toast!', status: 'info' })}>
					Show toast
				</Button>
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
				<SnackbarRegion />
				<Button onPress={() => snackbarQueue.add({ description: 'A snackbar!', status: 'info' })}>
					Show toast
				</Button>
			</>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('region')).toBeVisible();
		expect(await screen.findByRole('alert')).toBeVisible();
	});
});
