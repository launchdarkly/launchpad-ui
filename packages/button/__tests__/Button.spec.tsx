import { Add } from '@launchpad-ui/icons';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button } from '../src';

describe('Button', () => {
  it('renders', () => {
    render(
      <Button size="normal" type="button">
        Default Button
      </Button>
    );
    expect(screen.getByText('Default Button')).toBeInTheDocument();
  });

  it('can render links into child slot', () => {
    const { container } = render(
      <Button asChild>
        <a href="/">Default Button Link</a>
      </Button>
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('handles clicks', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={spy}>Default Button</Button>);

    await user.click(screen.getByRole('button'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('clicks a slotted link when spacebar is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Button onClick={spy} asChild>
        <a href="/">Default Button Link</a>
      </Button>
    );

    await user.type(screen.getByRole('link'), '{space}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('is focusable', async () => {
    const user = userEvent.setup();
    render(<Button kind="primary">Primary Button</Button>);

    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('can render an icon', async () => {
    const { container } = render(<Button kind="primary" icon={<Add />} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('shows loading text when loading', async () => {
    render(
      <Button isLoading loadingText="loading">
        Primary Button
      </Button>
    );
    expect(screen.getByText('loading')).toBeInTheDocument();
  });
});
