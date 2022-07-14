import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FormField } from '../src';

const renderFormField = () => (
  <FormField isRequired={false} label="My Form Field" htmlFor="testing" name="My Form Field">
    <input type="text" aria-label="My Form Field" id="testing" onChange={() => undefined} />
  </FormField>
);

describe('FormField', () => {
  it('renders', () => {
    render(renderFormField());
    expect(screen.getByLabelText('My Form Field')).toBeInTheDocument();
  });
});
