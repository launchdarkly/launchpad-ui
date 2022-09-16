import type { NotificationRecord } from '../src';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, waitFor } from '../../../test/utils';
import { NotificationCenter } from '../src';

const notifications: NotificationRecord[] = [
  {
    _id: '1',
    level: 'info',
    message: 'info',
    ttl: 100,
  },
  {
    _id: '2',
    level: 'info',
    message: 'info',
  },
];

describe('NotificationCenter', () => {
  it('renders', () => {
    render(<NotificationCenter notifications={notifications} onDismiss={() => undefined} />);
    const items = screen.getAllByRole('alert');
    expect(items).toHaveLength(2);
  });

  it('calls onDsimiss', async () => {
    const spy = vi.fn();
    render(<NotificationCenter notifications={notifications} onDismiss={spy} />);
    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
