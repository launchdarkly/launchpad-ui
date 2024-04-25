import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Header, Menu, MenuItem, MenuTrigger, Popover, Section, Separator } from '../src';

describe('Menu', () => {
	it('renders', async () => {
		const user = userEvent.setup();
		render(
			<MenuTrigger>
				<Button>Trigger</Button>
				<Popover>
					<Menu>
						<MenuItem>Item one</MenuItem>
						<Separator />
						<Section>
							<Header>Section</Header>
							<MenuItem>Item two</MenuItem>
							<MenuItem>Item three</MenuItem>
						</Section>
					</Menu>
				</Popover>
			</MenuTrigger>,
		);

		await user.click(screen.getByRole('button'));
		expect(await screen.findByRole('menu')).toBeVisible();
	});
});
