import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Button, ButtonGroup } from '../src';

describe('ButtonGroup', () => {
	it('renders', () => {
		render(
			<ButtonGroup>
				<Button>Button 1</Button>
				<Button>Button 2</Button>
			</ButtonGroup>,
		);
		expect(screen.getAllByRole('button')).toHaveLength(2);
	});

	it('sets disabled on all buttons', () => {
		render(
			<ButtonGroup isDisabled>
				<Button>Button 1</Button>
				<Button>Button 2</Button>
			</ButtonGroup>,
		);
		const buttons = screen.getAllByRole('button');
		buttons.forEach((button) => {
			expect(button).toBeDisabled();
		});
	});
});
