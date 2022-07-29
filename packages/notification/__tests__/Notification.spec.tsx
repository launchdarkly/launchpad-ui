import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Notification, NotificationLevel } from '../src';

const props = {
  level: NotificationLevel.INFO,
  message: <>{NotificationLevel.INFO}</>,
  details: 'This is a detail',
  onDismiss: () => undefined,
};

describe('Notification', () => {
  it('renders', async () => {
    render(<Notification {...props} />);
    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });

  it('hides details action on click', async () => {
    render(<Notification {...props} />);

    const user = userEvent.setup();

    const button = screen.getByLabelText('More details');

    expect(button).toBeVisible();

    await user.click(button);

    expect(button).not.toBeVisible();
  });

  it('shows details when enter key is pressed', async () => {
    render(<Notification {...props} />);

    const user = userEvent.setup();

    await user.tab();
    await user.keyboard('{enter}');

    expect(screen.getByText('This is a detail')).toBeVisible();
  });

  it('dismisses after timeout', async () => {
    const spy = vi.fn();
    render(<Notification {...props} ttl={100} onDismiss={spy} />);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  it('dismisses when hovered and escape key is pressed', async () => {
    const spy = vi.fn();
    render(<Notification {...props} onDismiss={spy} />);

    const user = userEvent.setup();

    await user.hover(screen.getByRole('alert'));
    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('traps focus on hover and blurs when mouse leaves', async () => {
    render(
      <Notification
        {...props}
        message={
          <>
            hi there <a href="link">link</a>
          </>
        }
      />
    );

    const user = userEvent.setup();

    await user.hover(screen.getByText(/hi there/));
    await user.tab();
    expect(screen.getByRole('link')).toHaveFocus();

    await user.hover(document.body);
    await user.click(document.body);
    await user.tab();
    expect(screen.getByRole('link')).not.toHaveFocus();
  });
});
