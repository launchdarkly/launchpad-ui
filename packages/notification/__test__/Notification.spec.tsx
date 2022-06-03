/* eslint-disable testing-library/no-node-access */
import { screen, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { Notification } from '../src';
import { NotificationLevel } from '../src/types';

const props = {
  level: NotificationLevel.INFO,
  ttl: 0,
  message: <>{NotificationLevel.INFO}</>,
  details: 'This is a detail',
};

describe('notification', () => {
  it('renders', () => {
    render(<Notification {...props} />);
    expect(screen.getByRole('alert')).not.toBeNull();
  });

  it('is accessible', async () => {
    const { container } = render(<Notification {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
