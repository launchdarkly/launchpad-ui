import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToggleButton, ToggleButtonGroup } from '../src';

describe('ToggleButtonGroup', () => {
	it('renders', () => {
		render(
			<ToggleButtonGroup>
				<ToggleButton id="first">First</ToggleButton>
				<ToggleButton id="second">Second</ToggleButton>
				<ToggleButton id="third">Third</ToggleButton>
			</ToggleButtonGroup>,
		);
		expect(screen.getByRole('radiogroup')).toBeVisible();
	});
});
