import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { AlertKind, CollapsibleAlert } from '../src';

describe('CollapsibleAlert', () => {
  it('renders', () => {
    render(<CollapsibleAlert message="A test message." kind={AlertKind.WARNING} />);
    expect(screen.getByText('A test message.')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <CollapsibleAlert message="A test message." kind={AlertKind.WARNING}>
        Hello
      </CollapsibleAlert>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('shows and hides child component on click', async () => {
    const node = render(
      <CollapsibleAlert message="A test message." kind={AlertKind.WARNING}>
        Hello
      </CollapsibleAlert>
    );

    userEvent.setup();
    await userEvent.click(node.getByText(/Show more/i));

    expect(node.queryByText(/Hello/i)).toBeTruthy();
  });
});
