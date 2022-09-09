import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Form } from '../src';

describe('Form', () => {
  it('renders', () => {
    render(
      <Form id="testing" name="My Form" data-test-id="My Form" inline>
        <></>
      </Form>
    );
    expect(screen.getByTestId('My Form')).toBeInTheDocument();
  });
});
