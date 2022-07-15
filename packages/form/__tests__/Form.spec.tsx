import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Form } from '../src';

describe('Form', () => {
  it('renders', () => {
    render(
      <Form id="testing" name="My Form" ariaLabel="My Form">
        <></>
      </Form>
    );
    expect(screen.getByLabelText('My Form')).toBeInTheDocument();
  });
});
