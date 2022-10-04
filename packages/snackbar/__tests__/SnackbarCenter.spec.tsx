import type { SnackbarRecord } from '../src';

import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
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
    render(<SnackbarCenter snackbars={snackbars} onDismiss={() => undefined} />);
    const items = screen.getAllByRole('status');
    expect(items).toHaveLength(2);
  });
});
