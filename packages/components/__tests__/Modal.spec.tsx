import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay } from '../src';

describe('Modal', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<DialogTrigger>
				<Button>Trigger</Button>
				<ModalOverlay>
					<Modal>
						<Dialog>Modal</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('dialog')).toBeVisible();
	});
});
