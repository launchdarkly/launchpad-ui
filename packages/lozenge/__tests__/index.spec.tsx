import { it, expect, describe, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { axe } from '../../../tests/utils';
import { Lozenge, LozengeKind, LozengeSize } from '../src';

describe('Lozenge', () => {
  it('renders', () => {
    render(<Lozenge size={LozengeSize.NORMAL}>Default Lozenge</Lozenge>);
    expect(screen.getByText('Default Lozenge')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<Lozenge>Default Lozenge</Lozenge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('can be clickable', async () => {
    const spy = vi.fn();
    render(
      <Lozenge kind={LozengeKind.NEW} isClickable handleClick={spy}>
        New Lozenge
      </Lozenge>
    );

    fireEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
