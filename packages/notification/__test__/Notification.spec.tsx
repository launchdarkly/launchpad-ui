import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('hides details action on click', async () => {
    render(<Notification {...props} />);

    const user = userEvent.setup();

    const button = screen.getByText(new RegExp('More details', 'i'));
    const detailsContainer = screen.getByTestId('details-container');

    expect(detailsContainer).not.toHaveClass('is-expanded');

    await user.click(button);

    expect(detailsContainer).toHaveClass('is-expanded');
  });
});
