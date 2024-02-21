import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { TextArea } from '../src';

describe('TextArea', () => {
	it('renders', () => {
		render(
			<TextArea
				value='my text'
				aria-label='My Text Area'
				name='mytextarea'
				onChange={() => undefined}
			/>,
		);
		expect(screen.getByLabelText('My Text Area')).toBeInTheDocument();
	});

	it('handles arrows and escape keys', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(<TextArea value='my text' onKeyDown={spy} />);

		await user.type(screen.getByRole('textbox'), '{arrowleft}');
		expect(spy).toHaveBeenCalledTimes(0);

		await user.type(screen.getByRole('textbox'), '{escape}');
		expect(spy).toHaveBeenCalledTimes(0);
	});
});
