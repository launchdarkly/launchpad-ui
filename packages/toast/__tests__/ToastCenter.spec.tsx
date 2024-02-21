import type { ToastRecord } from '../src';

import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToastCenter } from '../src';

const toasts: ToastRecord[] = [
  {
    _id: '1',
    kind: 'info',
    content: 'A toast.',
  },
  {
    _id: '2',
    kind: 'info',
    content: 'A toast.',
  },
];

describe('ToastCenter', () => {
  it('renders', () => {
    render(<ToastCenter toasts={toasts} onDismiss={() => undefined} />);
    const items = screen.getAllByRole('status');
    expect(items).toHaveLength(2);
  });
});
