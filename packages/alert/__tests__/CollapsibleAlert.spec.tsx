import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertKind, CollapsibleAlert } from '../src';

describe('CollapsibleAlert', () => {
  it('renders', () => {
    render(<CollapsibleAlert message="A test message." kind={AlertKind.WARNING} />);
    expect(screen.getByText('A test message.')).toBeInTheDocument();
  });

  test('shows and hides child component on click', async () => {
    render(
      <CollapsibleAlert message="A test message." kind={AlertKind.WARNING}>
        Hello
      </CollapsibleAlert>
    );

    userEvent.setup();
    await userEvent.click(screen.getByText(/Show more/i));

    expect(screen.getByText(/Hello/i)).toBeTruthy();
  });
});
