/* eslint-disable testing-library/no-node-access */
import { screen, render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import { NotificationCenter } from '../src';
import { NotificationLevel, NotificationRecord } from '../src/types';

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

describe('notification', () => {
  it('renders', () => {
    render(<NotificationCenter notifications={notifications} onDismiss={() => undefined} />);
    const items = screen.getAllByRole('alert');
    expect(items).toHaveLength(2);
  });
});
