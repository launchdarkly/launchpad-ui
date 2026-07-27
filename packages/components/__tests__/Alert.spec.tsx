import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Alert, Dialog, Heading, Text } from '../src';

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

	// Regression coverage for DSYS-157: a Dialog publishes a `subtitle` slot context
	// (with its own id/elementType/CSS). Alert must establish its own Text context so a
	// nested <Text> isn't captured by the Dialog's subtitle slot.
	describe('nested inside a Dialog (DSYS-157)', () => {
		it('does not let the Dialog subtitle context leak into the Alert', () => {
			render(
				<Dialog>
					Dialog body
					<Alert status="warning">
						<Heading>Alert heading</Heading>
						<Text slot="subtitle">Alert body text</Text>
					</Alert>
				</Dialog>,
			);

			// The Dialog must not adopt the Alert's text as its accessible description.
			expect(screen.queryByRole('dialog', { description: 'Alert body text' })).toBeNull();

			// The Alert's text must not be promoted to the Dialog's subtitle element (h3).
			expect(screen.getByText('Alert body text').tagName).not.toBe('H3');
		});

		it('allows a bare <Text> inside a nested Alert without a forced slot', () => {
			expect(() =>
				render(
					<Dialog>
						Dialog body
						<Alert status="warning">
							<Heading>Alert heading</Heading>
							<Text>Bare alert text</Text>
						</Alert>
					</Dialog>,
				),
			).not.toThrow();

			expect(screen.getByText('Bare alert text')).toBeVisible();
		});
	});
});
