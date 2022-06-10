import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { InputGroup } from '../src';

describe('InputGroup', () => {
  it('renders', () => {
    render(
      <InputGroup data-test-id="testing">
        <></>
      </InputGroup>
    );
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <InputGroup data-test-id="testing">
        <></>
      </InputGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
