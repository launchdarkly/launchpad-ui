import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Alert, Heading, Text } from '../src';

describe('Alert', () => {
	it('renders', () => {
		render(
			<Alert>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</Alert>,
		);
		expect(screen.getByRole('alert')).toBeVisible();
	});

	it('can be dismissed', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(
			<Alert isDismissable onDismiss={spy}>
				<Heading>Heading</Heading>
				<Text>Content</Text>
			</Alert>,
		);

		await user.click(screen.getByRole('button'));
		expect(spy).toHaveBeenCalledTimes(1);
		expect(screen.queryByRole('alert')).toBeNull();
	});
});
