import { render, screen, userEvent } from '../../../test/utils';
import { CollapsibleAlert } from '../src';

describe('CollapsibleAlert', () => {
  it('renders', () => {
    render(<CollapsibleAlert message="A test message." kind="warning" />);
    expect(screen.getByText('A test message.')).toBeInTheDocument();
  });

  test('shows and hides child component on click', async () => {
    const user = userEvent.setup();
    render(
      <CollapsibleAlert message="A test message." kind="warning">
        Hello
      </CollapsibleAlert>
    );

    await user.click(screen.getByText(/Show more/i));

    expect(screen.getByText(/Hello/i)).toBeTruthy();
  });
});
