import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToggleButtonElevated, ToggleButtonGroupElevated } from '../src';

describe('ToggleButtonGroupElevated', () => {
	it('renders', () => {
		render(
			<ToggleButtonGroupElevated>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
				<ToggleButtonElevated id="third">Third</ToggleButtonElevated>
			</ToggleButtonGroupElevated>,
		);
		expect(screen.getByRole('radiogroup')).toBeVisible();
	});

	it('supports selection', async () => {
		render(
			<ToggleButtonGroupElevated defaultSelectedKeys={['first']}>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
			</ToggleButtonGroupElevated>,
		);
		expect(screen.getByRole('radio', { name: 'First', checked: true })).toBeVisible();
		expect(screen.getByRole('radio', { name: 'Second', checked: false })).toBeVisible();
	});

	it('supports multiple selection', () => {
		render(
			<ToggleButtonGroupElevated selectionMode="multiple" defaultSelectedKeys={['first', 'second']}>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
				<ToggleButtonElevated id="second">Second</ToggleButtonElevated>
				<ToggleButtonElevated id="third">Third</ToggleButtonElevated>
			</ToggleButtonGroupElevated>,
		);
		expect(screen.getByRole('button', { name: 'First' })).toHaveAttribute('aria-pressed', 'true');
		expect(screen.getByRole('button', { name: 'Second' })).toHaveAttribute('aria-pressed', 'true');
		expect(screen.getByRole('button', { name: 'Third' })).toHaveAttribute('aria-pressed', 'false');
	});

	it('supports disabled state', () => {
		render(
			<ToggleButtonGroupElevated isDisabled>
				<ToggleButtonElevated id="first">First</ToggleButtonElevated>
			</ToggleButtonGroupElevated>,
		);
		expect(screen.getByRole('radio', { name: 'First' })).toBeDisabled();
	});
});
