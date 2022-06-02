/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
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
    expect(document.querySelector('.Notification')).not.toBeNull();
  });

  it('is accessible', async () => {
    render(<Notification {...props} />);
    const notification = document.querySelector('.Notification') as Element;
    const results = await axe(notification);
    expect(results).toHaveNoViolations();
  });
});
