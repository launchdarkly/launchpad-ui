import { Add } from '@launchpad-ui/icons';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, ButtonKind, ButtonSize, ButtonType } from '../src';

describe('Button', () => {
  it('renders', () => {
    render(
      <Button size={ButtonSize.NORMAL} type={ButtonType.BUTTON}>
        Default Button
      </Button>
    );
    expect(screen.getByText('Default Button')).toBeInTheDocument();
  });

  it('can render as a link', () => {
    const { container } = render(<Button href="#">Default Button Link</Button>);
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

  it('clicks the link when spacebar is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Button href="#" onClick={spy}>
        Default Button Link
      </Button>
    );

    await user.type(screen.getByRole('link'), '{space}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('is focusable', async () => {
    const user = userEvent.setup();
    render(<Button kind={ButtonKind.PRIMARY}>Primary Button</Button>);

    await user.tab();
    expect(screen.getByRole('button')).toHaveFocus();
  });

  it('can render an icon', async () => {
    const { container } = render(<Button kind={ButtonKind.PRIMARY} icon={<Add />} />);
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
