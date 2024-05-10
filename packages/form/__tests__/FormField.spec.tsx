import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FormField } from '../src';

const renderFormField = () => (
	<FormField isRequired label="My Form Field" htmlFor="testing" name="My Form Field" hint="hint">
		<input type="text" aria-label="My Form Field" id="testing" onChange={() => undefined} />
	</FormField>
);

describe('FormField', () => {
	it('renders', () => {
		render(renderFormField());
		expect(screen.getByLabelText('My Form Field')).toBeInTheDocument();
	});
});
