import { it, expect, describe, vi } from 'vitest';

import { render, screen, waitFor } from '../../../test/utils';
import { AnimationDelay, Progress, ProgressSize } from '../src';

describe('Progress', () => {
  it('renders after a delay', async () => {
    render(<Progress delayMs={500} size={ProgressSize.Small} />);
    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
  });

  it('does not render immediately if a delay is specified', () => {
    vi.spyOn(global, 'setTimeout');
    render(<Progress delayMs={AnimationDelay.LONG} />);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), AnimationDelay.LONG);
    expect(screen.queryByRole('progressbar')).toBeNull();
  });

  it('renders a svg with no delay', async () => {
    render(<Progress value={2} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
