import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../tests/utils';
import { FieldSet } from '../src';

describe('FieldSet', () => {
  it('renders', () => {
    render(<FieldSet testId="testing" />);
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<FieldSet />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
