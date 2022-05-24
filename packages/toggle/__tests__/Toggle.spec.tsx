import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from '../src';

describe('Toggle', () => {
  it('can be reached with the keyboard', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    render(<Toggle {...toggleProps} />);
    const toggle = screen.getByRole('switch');
    const user = userEvent.setup();
    await user.tab();

    expect(toggle).toHaveFocus();
    await user.keyboard('[Space]');
    expect(toggle).toBeChecked();
  });

  it('renders an unchecked Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    render(<Toggle {...toggleProps} />);
    const toggle = screen.getByRole('switch');
    const toggleLabel = screen.getByText('Cats');

    expect(toggleLabel).toBeInTheDocument();
    expect((toggle as HTMLInputElement).value).toBe('cats');
    expect(toggle).not.toBeChecked();
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });

  it('renders a checked Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    render(<Toggle {...toggleProps} />);
    const toggle = screen.getByRole('switch');

    const user = userEvent.setup();
    await waitFor(async () => {
      await user.click(toggle);
    });

    expect(toggle).toBeChecked();
  });

  it('renders a Toggle with an aria-label', async () => {
    const toggleProps = {
      'aria-label': 'Cats',
      value: 'cats',
    };
    render(<Toggle {...toggleProps} />);
    const toggle = screen.getByRole('switch');

    expect(toggle).toHaveAttribute('aria-label', 'Cats');
  });

  it('renders a Toggle with aria-labelledby', async () => {
    const toggleProps = {
      'aria-labelledby': 'CatsId',
      value: 'cats',
    };
    render(
      <div>
        <span id="CatsId">Cats</span>
        <Toggle {...toggleProps} />
      </div>
    );
    const toggle = screen.getByRole('switch');

    expect(toggle).toHaveAttribute('aria-labelledby', 'CatsId');
  });

  it('renders a disabled Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
      disabled: true,
    };
    render(<Toggle {...toggleProps} />);
    const toggle = screen.getByRole('switch');

    expect(toggle).toBeDisabled();
  });

  it('renders a Toggle with custom toggleText', async () => {
    const toggleProps = {
      'aria-label': 'Cats',
      value: 'cats',
      toggleOnText: 'Yas',
      toggleOffText: 'Nope',
    };
    render(<Toggle {...toggleProps} />);
    const toggleOn = screen.getByText('Yas');
    const toggleOff = screen.getByText('Nope');

    expect(toggleOn).toBeInTheDocument();
    expect(toggleOff).toBeInTheDocument();
  });
});
