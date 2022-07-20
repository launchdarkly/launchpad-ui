import type { NotificationRecord } from '../src/types';

import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { NotificationCenter } from '../src';
import { NotificationLevel } from '../src/types';

const notifications: NotificationRecord[] = [
  {
    _id: '1',
    level: NotificationLevel.INFO,
    message: NotificationLevel.INFO,
  },
  {
    _id: '2',
    level: NotificationLevel.INFO,
    message: NotificationLevel.INFO,
  },
];

describe('NotificationCenter', () => {
  it('renders', () => {
    render(<NotificationCenter notifications={notifications} onDismiss={() => undefined} />);
    const items = screen.getAllByRole('alert');
    expect(items).toHaveLength(2);
  });
});
