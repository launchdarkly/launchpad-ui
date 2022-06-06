import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { Notification } from '../src';
import { NotificationLevel } from '../src/types';

const props = {
  level: NotificationLevel.INFO,
  message: <>{NotificationLevel.INFO}</>,
  details: 'This is a detail',
};

describe('Notification', () => {
  it('renders', async () => {
    render(<Notification {...props} />);
    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<Notification {...props} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('hides details action on click', async () => {
    render(<Notification {...props} />);

    const user = userEvent.setup();

    const button = screen.getByLabelText('More details');

    expect(button).toBeVisible();

    await user.click(button);

    expect(button).not.toBeVisible();
  });
});
