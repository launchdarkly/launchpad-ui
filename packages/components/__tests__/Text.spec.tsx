import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Text } from '../src';

describe('Text', () => {
	it('renders', () => {
		render(<Text>Hello world</Text>);
		expect(screen.getByText('Hello world')).toBeVisible();
	});

	it('renders with different sizes', () => {
		const { rerender } = render(<Text size="small">Small text</Text>);
		expect(screen.getByText('Small text')).toBeVisible();

		rerender(<Text size="medium">Medium text</Text>);
		expect(screen.getByText('Medium text')).toBeVisible();

		rerender(<Text size="large">Large text</Text>);
		expect(screen.getByText('Large text')).toBeVisible();
	});

	it('renders with bold prop', () => {
		render(<Text bold>Bold text</Text>);
		expect(screen.getByText('Bold text')).toBeVisible();
	});

	it('renders with maxLines', () => {
		render(<Text maxLines={2}>Long text that should be truncated</Text>);
		expect(screen.getByText('Long text that should be truncated')).toBeVisible();
	});

	it('renders with overflow tooltip when enabled', () => {
		render(
			<Text maxLines={1} showTooltipOnOverflow>
				Text with overflow tooltip
			</Text>,
		);
		expect(screen.getByText('Text with overflow tooltip')).toBeVisible();
	});

	it('renders with custom tooltip content', () => {
		render(
			<Text maxLines={1} showTooltipOnOverflow tooltipContent="Custom tooltip">
				Truncated text
			</Text>,
		);
		expect(screen.getByText('Truncated text')).toBeVisible();
	});
});

