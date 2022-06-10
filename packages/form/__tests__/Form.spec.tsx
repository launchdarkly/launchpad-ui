import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

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

  it('is accessible', async () => {
    const { container } = render(
      <Form id="testing" name="My Form" ariaLabel="My Form">
        <></>
      </Form>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
