import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { CompactTextField } from '../src';

describe('CompactTextField', () => {
  it('renders', () => {
    render(<CompactTextField label="Email" aria-label="Email" onChange={() => undefined} />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('calls onFocus when focused', async () => {
    const spy = vi.fn();
    render(
      <CompactTextField label="Email" aria-label="Email" onChange={() => undefined} onFocus={spy} />
    );

    userEvent.setup();
    await userEvent.tab();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when blurred', async () => {
    const spy = vi.fn();
    render(
      <CompactTextField label="Email" aria-label="Email" onChange={() => undefined} onBlur={spy} />
    );

    userEvent.setup();
    await userEvent.tab();
    await userEvent.tab();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
