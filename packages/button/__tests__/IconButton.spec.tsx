import { Icon } from '@launchpad-ui/icons';
import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { IconButton } from '../src';

describe('Button', () => {
	it('renders', () => {
		render(<IconButton aria-label='Close' icon={<Icon name='cancel' />} />);
		expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
	});

	it('can render as a slotted link', () => {
		const { container } = render(
			<IconButton aria-label='Close' icon={<Icon name='cancel' />} asChild>
				<a href='/'>Test</a>
			</IconButton>,
		);
		expect(container.querySelector('a')).not.toBeNull();
	});

	it('handles clicks', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(<IconButton aria-label='Close' icon={<Icon name='cancel' />} onClick={spy} />);

		await user.click(screen.getByRole('button', { name: 'Close' }));

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('clicks a slotted link when spacebar is pressed', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(
			<IconButton aria-label='Close' icon={<Icon name='cancel' />} onClick={spy} asChild>
				<a href='/'>Test</a>
			</IconButton>,
		);

		await user.type(screen.getByRole('link'), '{space}');

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('is focusable', async () => {
		const user = userEvent.setup();
		render(<IconButton aria-label='Close' icon={<Icon name='cancel' />} />);

		await user.tab();
		expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
	});

	it('can render an icon', async () => {
		const { container } = render(<IconButton aria-label='Close' icon={<Icon name='cancel' />} />);
		expect(container.querySelector('svg')).not.toBeNull();
	});
});
