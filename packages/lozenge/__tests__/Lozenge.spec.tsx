import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Lozenge, LozengeKind, LozengeSize } from '../src';

describe('Lozenge', () => {
  it('renders', () => {
    render(<Lozenge size={LozengeSize.NORMAL}>Default Lozenge</Lozenge>);
    expect(screen.getByText('Default Lozenge')).toBeInTheDocument();
  });

  it('can be clickable', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Lozenge kind={LozengeKind.NEW} isClickable handleClick={spy}>
        New Lozenge
      </Lozenge>
    );

    await user.click(screen.getByRole('button'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
