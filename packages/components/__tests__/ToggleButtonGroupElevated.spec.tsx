import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToggleButton, ToggleButtonGroup } from '../src';

describe('ToggleButtonGroup appearance="elevated"', () => {
	it('renders', () => {
		render(
			<ToggleButtonGroup appearance="elevated">
				<ToggleButton appearance="elevated" id="first">
					First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					Second
				</ToggleButton>
				<ToggleButton appearance="elevated" id="third">
					Third
				</ToggleButton>
			</ToggleButtonGroup>,
		);
		expect(screen.getByRole('radiogroup')).toBeVisible();
	});

	it('supports selection', async () => {
		render(
			<ToggleButtonGroup appearance="elevated" defaultSelectedKeys={['first']}>
				<ToggleButton appearance="elevated" id="first">
					First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					Second
				</ToggleButton>
			</ToggleButtonGroup>,
		);
		expect(screen.getByRole('radio', { name: 'First', checked: true })).toBeVisible();
		expect(screen.getByRole('radio', { name: 'Second', checked: false })).toBeVisible();
	});

	it('supports multiple selection', () => {
		render(
			<ToggleButtonGroup
				appearance="elevated"
				selectionMode="multiple"
				defaultSelectedKeys={['first', 'second']}
			>
				<ToggleButton appearance="elevated" id="first">
					First
				</ToggleButton>
				<ToggleButton appearance="elevated" id="second">
					Second
				</ToggleButton>
				<ToggleButton appearance="elevated" id="third">
					Third
				</ToggleButton>
			</ToggleButtonGroup>,
		);
		expect(screen.getByRole('button', { name: 'First' })).toHaveAttribute('aria-pressed', 'true');
		expect(screen.getByRole('button', { name: 'Second' })).toHaveAttribute('aria-pressed', 'true');
		expect(screen.getByRole('button', { name: 'Third' })).toHaveAttribute('aria-pressed', 'false');
	});

	it('supports disabled state', () => {
		render(
			<ToggleButtonGroup appearance="elevated" isDisabled>
				<ToggleButton appearance="elevated" id="first">
					First
				</ToggleButton>
			</ToggleButtonGroup>,
		);
		expect(screen.getByRole('radio', { name: 'First' })).toBeDisabled();
	});
});
