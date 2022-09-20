import type { NotificationProps } from '../src';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Notification } from '../src';

const props: NotificationProps = {
  level: 'info',
  message: <>info</>,
  details: 'This is a detail',
};

describe('Notification', () => {
  it('renders', async () => {
    render(<Notification {...props} />);
    expect(await screen.findByRole('alert')).toBeInTheDocument();
  });

  it('hides details action on click', async () => {
    const user = userEvent.setup();
    render(<Notification {...props} />);

    const button = screen.getByLabelText('More details');

    expect(button).toBeVisible();

    await user.click(button);

    expect(button).not.toBeVisible();
  });

  it('shows details when enter key is pressed', async () => {
    const user = userEvent.setup();
    render(<Notification {...props} />);

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
    const user = userEvent.setup();
    render(<Notification {...props} onDismiss={spy} />);

    await user.hover(screen.getByRole('alert'));
    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('traps focus on hover and blurs when mouse leaves', async () => {
    const user = userEvent.setup();
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

    await user.hover(screen.getByText(/hi there/));
    await user.tab();
    expect(screen.getByRole('link')).toHaveFocus();

    await user.hover(document.body);
    await user.click(document.body);
    await user.tab();
    expect(screen.getByRole('link')).not.toHaveFocus();
  });

  it('dismisses when close button is clicked', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(<Notification {...props} onDismiss={spy} />);

    user.tab();
    user.tab();
    user.tab();
    await user.keyboard('{enter}');

    await waitFor(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
