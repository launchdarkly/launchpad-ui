import type { SnackbarRecord } from '../src';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { SnackbarCenter } from '../src';

const snackbars: SnackbarRecord[] = [
  {
    _id: '1',
    kind: 'info',
    description: 'A snackbar.',
  },
  {
    _id: '2',
    kind: 'info',
    description: 'A snackbar.',
  },
];

describe('SnackbarCenter', () => {
  it('renders', () => {
    render(<SnackbarCenter snackbars={snackbars} dismissSnackbar={() => undefined} />);
    const items = screen.getAllByRole('status');
    expect(items).toHaveLength(2);
  });

  it.only('fires Snackbar onDimiss', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    snackbars[0].onDismiss = spy;
    render(<SnackbarCenter snackbars={snackbars} dismissSnackbar={() => undefined} />);

    await user.click(screen.getAllByTestId('snackbar-dismiss')[0]);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledOnce();
    });
  });
});
