import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { FormGroup } from '../src';

describe('FormGroup', () => {
  it('renders', () => {
    render(
      <FormGroup testId="testing">
        <></>
      </FormGroup>
    );
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <FormGroup testId="testing">
        <></>
      </FormGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
