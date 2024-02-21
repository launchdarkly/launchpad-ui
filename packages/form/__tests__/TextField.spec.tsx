import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { TextField } from '../src';

describe('TextField', () => {
	it('renders', () => {
		render(
			<TextField
				value='my text'
				aria-label='My Text Field'
				name='myTextField'
				onChange={() => undefined}
			/>,
		);
		expect(screen.getByLabelText('My Text Field')).toBeInTheDocument();
	});

	it('renders with suffix', () => {
		render(
			<TextField
				value='my text'
				suffix='my suffix'
				aria-label='My Text Field'
				name='myTextField'
				onChange={() => undefined}
			/>,
		);
		expect(screen.getByText('my suffix')).toBeInTheDocument();
	});
});
