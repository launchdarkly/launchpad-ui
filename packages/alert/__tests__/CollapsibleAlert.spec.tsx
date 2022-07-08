import { axe } from 'jest-axe';

import { render, screen, userEvent } from '../../../tests/utils';
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
