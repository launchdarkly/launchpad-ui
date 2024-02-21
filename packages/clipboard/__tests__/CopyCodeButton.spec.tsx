import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { CopyCodeButton } from '../src';

describe('Button', () => {
  it('renders', () => {
    render(<CopyCodeButton>Copy</CopyCodeButton>);
    expect(screen.getByRole('button', { name: 'Copy' })).toBeInTheDocument();
  });

  it('handles clicks', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(<CopyCodeButton onClick={spy}>Copy</CopyCodeButton>);

    await user.click(screen.getByRole('button', { name: 'Copy' }));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('is focusable', async () => {
    const user = userEvent.setup();
    render(<CopyCodeButton>Copy</CopyCodeButton>);

    await user.tab();
    expect(screen.getByRole('button', { name: 'Copy' })).toHaveFocus();
  });
});
