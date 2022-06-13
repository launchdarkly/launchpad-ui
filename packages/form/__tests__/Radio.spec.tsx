import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { Radio } from '../src';

describe('Radio', () => {
  it('renders', () => {
    render(
      <Radio value="one" aria-label="Test Radio" onChange={() => undefined}>
        Label
      </Radio>
    );
    expect(screen.getByLabelText('Test Radio')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <Radio value="one" aria-label="radio one" onChange={() => undefined}>
        Label
      </Radio>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
