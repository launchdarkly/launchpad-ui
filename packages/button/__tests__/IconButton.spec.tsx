import { Close } from '@launchpad-ui/icons';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { IconButton } from '../src';

describe('Button', () => {
  it('renders', () => {
    render(<IconButton aria-label="Close" icon={<Close />} />);
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('can render as a link', () => {
    const { container } = render(
      <IconButton aria-label="Close" icon={<Close />} as="a" href="#" />
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('a')).not.toBeNull();
  });

  it('handles clicks', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(<IconButton aria-label="Close" icon={<Close />} onClick={spy} />);

    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('clicks the link when spacebar is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(<IconButton aria-label="Close" icon={<Close />} as="a" href="#" onClick={spy} />);

    await user.type(screen.getByRole('link'), '{space}');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('is focusable', async () => {
    const user = userEvent.setup();
    render(<IconButton aria-label="Close" icon={<Close />} />);

    await user.tab();
    expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
  });

  it('can render an icon', async () => {
    const { container } = render(<IconButton aria-label="Close" icon={<Close />} />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
