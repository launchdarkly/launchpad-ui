import type { CopyToClipboardProps } from '../src';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { it, expect, describe, vi } from 'vitest';

import { CopyToClipboard } from '../src';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.navigator = { clipboard: { writeText: vi.fn() } };

const createComponent = (props?: Partial<CopyToClipboardProps>) => (
  <CopyToClipboard text="Copy content" tooltipOptions={{ hoverOpenDelay: 0 }} {...props}>
    <span>Copy content</span>
  </CopyToClipboard>
);

describe('CopyToClipboard', () => {
  it('is accessible', async () => {
    const { container } = render(createComponent());
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('copies text when clicked on', async () => {
    render(createComponent());
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy content');
  });

  it('handles MouseEnter and MouseLeave', async () => {
    render(createComponent());
    expect(screen.queryByRole('tooltip')).toBeNull();

    const user = userEvent.setup();
    await user.hover(screen.getByText('Copy content'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    await user.unhover(screen.getByText('Copy content'));
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('handles keyboard interactions', async () => {
    render(createComponent());
    expect(screen.queryByRole('tooltip')).toBeNull();

    const user = userEvent.setup();
    await user.tab();
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    await user.tab();
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('does not show copy tooltip on hover', async () => {
    render(createComponent({ shouldOnlyShowTooltipAfterCopy: true }));
    const user = userEvent.setup();
    await user.hover(screen.getByText('Copy content'));
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('shows the confirmation tooltip when clicked', async () => {
    render(createComponent({ shouldOnlyShowTooltipAfterCopy: true }));
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    await waitFor(async () => {
      expect(await screen.findByText('Copied!')).toBeVisible();
    });
  });

  it('uses the custom copied text when provided', async () => {
    const FAKE_CUSTOM_COPIED_TEXT = 'Fake custom text';
    render(createComponent({ customCopiedText: FAKE_CUSTOM_COPIED_TEXT }));
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    await waitFor(async () => {
      expect(await screen.findByText(FAKE_CUSTOM_COPIED_TEXT)).toBeVisible();
    });
  });
});
