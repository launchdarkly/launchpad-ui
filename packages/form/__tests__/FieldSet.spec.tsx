import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FieldSet } from '../src';

describe('FieldSet', () => {
	it('renders', () => {
		render(<FieldSet data-test-id="testing" />);
		expect(screen.getByTestId('testing')).toBeInTheDocument();
	});
});
