import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from '../../../tests/utils';

import { Lozenge } from '../src';

describe('Lozenge', () => {
  it('renders', () => {
    render(<Lozenge>hi</Lozenge>);
    expect(screen.getByText('hi')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<Lozenge>hi</Lozenge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
