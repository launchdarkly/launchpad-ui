import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Chip, ChipKind, ChipSize } from '../src';

describe('Chip', () => {
  it('renders', () => {
    render(<Chip size={ChipSize.NORMAL}>Default Chip</Chip>);
    expect(screen.getByText('Default Chip')).toBeInTheDocument();
  });

  it('can be clickable', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Chip kind={ChipKind.NEW} onClick={spy}>
        New Chip
      </Chip>
    );

    await user.click(screen.getByRole('button'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
