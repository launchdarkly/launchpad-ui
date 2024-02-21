import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { CompactTextField } from '../src';

describe('CompactTextField', () => {
	it('renders', () => {
		render(<CompactTextField label='Email' aria-label='Email' onChange={() => undefined} />);
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
	});

	it('calls onFocus when focused', async () => {
		const user = userEvent.setup();
		const spy = vi.fn();
		render(
			<CompactTextField
				label='Email'
				aria-label='Email'
				onChange={() => undefined}
				onFocus={spy}
			/>,
		);

		await user.tab();
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('calls onBlur when blurred', async () => {
		const user = userEvent.setup();
		const spy = vi.fn();
		render(
			<CompactTextField label='Email' aria-label='Email' onChange={() => undefined} onBlur={spy} />,
		);

		await user.tab();
		await user.tab();
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
