import type { NotificationRecord } from '../src';

import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { NotificationCenter } from '../src';

const notifications: NotificationRecord[] = [
  {
    _id: '1',
    level: 'info',
    message: 'info',
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
});
