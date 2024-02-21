import { Menu, MenuItem } from '@launchpad-ui/menu';
import { Tooltip } from '@launchpad-ui/tooltip';
import { describe, expect, it } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import {
	SplitButton,
	SplitButtonDropdown,
	SplitButtonDropdownButton,
	SplitButtonMainButton,
} from '../src';

describe('SplitButton', () => {
	it('renders', () => {
		render(
			<SplitButton>
				<SplitButtonMainButton>Save changes</SplitButtonMainButton>
				<SplitButtonDropdown>
					<SplitButtonDropdownButton />
					<Menu>
						<MenuItem>Save changes</MenuItem>
					</Menu>
				</SplitButtonDropdown>
			</SplitButton>,
		);
		expect(screen.getAllByRole('button')).toHaveLength(2);
	});

	it('can render tooltips', async () => {
		const user = userEvent.setup();
		render(
			<SplitButton>
				<Tooltip content='Main tooltip'>
					<SplitButtonMainButton>Save changes</SplitButtonMainButton>
				</Tooltip>
				<SplitButtonDropdown>
					<Tooltip content='Dropdown tooltip'>
						<SplitButtonDropdownButton aria-label='Test dropdown button' />
					</Tooltip>
					<Menu>
						<MenuItem>Save changes</MenuItem>
					</Menu>
				</SplitButtonDropdown>
			</SplitButton>,
		);

		await user.hover(screen.getByText('Save changes'));
		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeInTheDocument();
		});

		await user.hover(screen.getByLabelText('Test dropdown button'));
		await waitFor(() => {
			expect(screen.getByRole('tooltip')).toBeInTheDocument();
		});
	});
});
