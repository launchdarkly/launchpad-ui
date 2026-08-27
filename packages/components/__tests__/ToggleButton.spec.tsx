import { describe, expect, it } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { ToggleButton } from '../src';

describe('ToggleButton', () => {
	it('renders', () => {
		render(<ToggleButton>toggle</ToggleButton>);
		expect(screen.getByRole('button')).toBeVisible();
	});

	it('exposes the resolved variant as a data attribute', () => {
		render(<ToggleButton variant="primary">toggle</ToggleButton>);
		expect(screen.getByRole('button')).toHaveAttribute('data-lp-variant', 'primary');
	});

	it('exposes the variant as a data attribute when elevated', () => {
		render(<ToggleButton appearance="elevated">toggle</ToggleButton>);
		expect(screen.getByRole('button')).toHaveAttribute('data-lp-variant', 'default');
	});

	describe('selected icon', () => {
		it('renders a check when selected', () => {
			render(<ToggleButton isSelected>toggle</ToggleButton>);
			expect(screen.getByRole('button').querySelector('[data-icon="check-circle"]')).toBeInTheDocument();
		});

		it('renders no icon when not selected', () => {
			render(<ToggleButton>toggle</ToggleButton>);
			expect(screen.getByRole('button').querySelector('[data-icon]')).not.toBeInTheDocument();
		});

		it('renders a leading icon while not selected', () => {
			render(<ToggleButton icon="flask">toggle</ToggleButton>);

			const button = screen.getByRole('button');
			expect(button.querySelector('[data-icon="flask"]')).toBeInTheDocument();
			expect(button.querySelector('[data-icon="check-circle"]')).not.toBeInTheDocument();
		});

		it('swaps the leading icon for the check when selected', () => {
			render(
				<ToggleButton icon="flask" isSelected>
					toggle
				</ToggleButton>,
			);

			const button = screen.getByRole('button');
			expect(button.querySelector('[data-icon="check-circle"]')).toBeInTheDocument();
			expect(button.querySelector('[data-icon="flask"]')).not.toBeInTheDocument();
		});

		it('supports a custom selected icon', () => {
			render(
				<ToggleButton isSelected selectedIcon="flag">
					toggle
				</ToggleButton>,
			);
			expect(screen.getByRole('button').querySelector('[data-icon="flag"]')).toBeInTheDocument();
		});

		it('renders no icon when the selected icon is null', () => {
			render(
				<ToggleButton isSelected selectedIcon={null}>
					toggle
				</ToggleButton>,
			);
			expect(screen.getByRole('button').querySelector('[data-icon]')).not.toBeInTheDocument();
		});

		it('renders no icon when selected and elevated', () => {
			render(
				<ToggleButton appearance="elevated" isSelected>
					toggle
				</ToggleButton>,
			);
			expect(screen.getByRole('button').querySelector('[data-icon]')).not.toBeInTheDocument();
		});

		it('hides the icon from assistive technology', () => {
			render(<ToggleButton isSelected>toggle</ToggleButton>);
			expect(screen.getByRole('button').querySelector('[data-icon="check-circle"]')).toHaveAttribute(
				'aria-hidden',
				'true',
			);
		});
	});
});
