import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../tests/utils';
import { Popover } from '../src';

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

  it('is accessible', async () => {
    const { container } = render(
      <Popover isOpen>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('opens on click of the target', async () => {
    render(
      <Popover>
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    userEvent.setup();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('opens and closes on mouse hover/unhover of the target', async () => {
    render(
      <Popover interactionKind="hover">
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    userEvent.setup();
    await userEvent.hover(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
    await userEvent.unhover(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).toBeNull();
    });
  });

  it('opens and closes on mouse focus/blur of the target', async () => {
    render(
      <Popover interactionKind="hover-or-focus">
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    userEvent.setup();
    await userEvent.tab();
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
    await userEvent.tab({ shift: true });
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).toBeNull();
    });
  });

  it('closes when the Escape key is pressed', async () => {
    render(
      <Popover interactionKind="hover">
        <button>Target</button>
        <span>Content</span>
      </Popover>
    );

    userEvent.setup();
    await userEvent.hover(screen.getByRole('button'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).toBeNull();
    });
  });
});
