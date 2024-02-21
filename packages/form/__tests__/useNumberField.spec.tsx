import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FormField } from '../src/FormField';
import { useNumberField } from '../src/useNumberField';

const Component = () => {
	const { labelProps, formHintProps, fieldErrorProps, renderNumberField } = useNumberField({
		id: 'Number',
	});
	return (
		<FormField
			isRequired={false}
			label='Number'
			name='Number'
			htmlFor='Number'
			LabelProps={labelProps}
			FormHintProps={formHintProps}
			FieldErrorProps={fieldErrorProps}
		>
			{renderNumberField()}
		</FormField>
	);
};

describe('useNumberField', () => {
	it('renders', () => {
		render(<Component />);
		expect(screen.getByLabelText('Number')).toBeInTheDocument();
	});
});
