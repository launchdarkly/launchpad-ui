import { describe, expect, it } from 'vitest';

import { render, screen } from '@launchpad-ui/test-utils';

import { FormGroup } from '../src';

describe('FormGroup', () => {
	it('renders', () => {
		render(<FormGroup data-test-id="testing" isInvalid />);
		expect(screen.getByTestId('testing')).toBeInTheDocument();
	});
});
