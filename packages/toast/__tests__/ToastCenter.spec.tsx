import type { ToastRecord } from '../src/types';

import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { ToastCenter } from '../src';
import { ToastKind } from '../src/types';

const toasts: ToastRecord[] = [
  {
    _id: '1',
    kind: ToastKind.INFO,
    content: 'A toast.',
  },
  {
    _id: '2',
    kind: ToastKind.INFO,
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
