import { it, expect, describe } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Popover, PopoverInteractionKind } from '../src';

describe('Popover', () => {
  it('renders', () => {
    render(
      <Popover isOpen>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('opens on click of the target', async () => {
    render(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('does not open when content is empty string', async () => {
    render(
      <Popover content="">
        <button>Target</button>
      </Popover>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('opens and closes on mouse hover/unhover of the target', async () => {
    render(
      <Popover interactionKind={PopoverInteractionKind.HOVER}>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    const user = userEvent.setup();
    await user.hover(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
    await user.unhover(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('opens and closes on mouse focus/blur of the target', async () => {
    render(
      <Popover interactionKind={PopoverInteractionKind.HOVER_OR_FOCUS}>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    const user = userEvent.setup();
    await user.tab();
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
    await user.tab({ shift: true });
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('closes when the Escape key is pressed', async () => {
    render(
      <Popover interactionKind={PopoverInteractionKind.HOVER}>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    const user = userEvent.setup();
    await user.hover(screen.getByRole('button'));
    await user.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('updates to fixed position in a modal', async () => {
    document.body.classList.add('has-modal');
    render(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('tooltip').style.position).toBe('fixed');
  });
});
