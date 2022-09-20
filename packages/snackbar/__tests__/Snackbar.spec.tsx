import type { SnackbarProps } from '../src';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Snackbar } from '../src';

const props: SnackbarProps = {
  kind: 'info',
  description: 'This is a message',
  header: 'Snackbar header',
  onDismiss: () => undefined,
};

describe('Snackbar', () => {
  it('renders', () => {
    render(<Snackbar {...props} />);
    expect(screen.getByRole('status')).toBeVisible();
  });

  it('dismisses when close button is clicked', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(<Snackbar {...props} onDismiss={spy} />);

    await user.click(screen.getByTestId('snackbar-dismiss'));

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
