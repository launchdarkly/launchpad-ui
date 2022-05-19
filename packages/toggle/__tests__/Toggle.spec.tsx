import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Toggle } from '../src';

describe('Toggle', () => {
  it('renders a Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('can be reached with the keyboard', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);
    const toggle = screen.getByRole('switch');
    const user = userEvent.setup();
    await user.tab();

    expect(results).toHaveNoViolations();
    expect(toggle).toHaveFocus();
    await user.keyboard('[Space]');
    expect(toggle).toBeChecked();
  });

  it('renders an unchecked Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);
    const toggle = screen.getByRole('switch');
    const toggleLabel = screen.getByText('Cats');

    expect(toggleLabel).toBeInTheDocument();
    expect((toggle as HTMLInputElement).value).toBe('cats');
    expect(toggle).not.toBeChecked();
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    expect(results).toHaveNoViolations();
  });

  it('renders a checked Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);
    const toggle = screen.getByRole('switch');

    const user = userEvent.setup();
    await waitFor(async () => {
      await user.click(toggle);
    });

    expect(results).toHaveNoViolations();
    expect(toggle).toBeChecked();
  });

  it('renders a Toggle with an aria-label', async () => {
    const toggleProps = {
      'aria-label': 'Cats',
      value: 'cats',
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);
    const toggle = screen.getByRole('switch');

    expect(toggle).toHaveAttribute('aria-label', 'Cats');
    expect(results).toHaveNoViolations();
  });

  it('renders a Toggle with aria-labelledby', async () => {
    const toggleProps = {
      'aria-labelledby': 'CatsId',
      value: 'cats',
    };
    const { container } = render(
      <div>
        <span id="CatsId">Cats</span>
        <Toggle {...toggleProps} />
      </div>
    );
    const results = await axe(container);
    const toggle = screen.getByRole('switch');

    expect(toggle).toHaveAttribute('aria-labelledby', 'CatsId');
    expect(results).toHaveNoViolations();
  });

  it('renders a disabled Toggle', async () => {
    const toggleProps = {
      value: 'cats',
      children: 'Cats',
      disabled: true,
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);
    const toggle = screen.getByRole('switch');

    expect(toggle).toBeDisabled();
    expect(results).toHaveNoViolations();
  });

  it('renders a Toggle with custom toggleText', async () => {
    const toggleProps = {
      'aria-label': 'Cats',
      value: 'cats',
      toggleOnText: 'Yas',
      toggleOffText: 'Nope',
    };
    const { container } = render(<Toggle {...toggleProps} />);
    const results = await axe(container);
    const toggleOn = screen.getByText('Yas');
    const toggleOff = screen.getByText('Nope');

    expect(toggleOn).toBeInTheDocument();
    expect(toggleOff).toBeInTheDocument();
    expect(results).toHaveNoViolations();
  });
});
