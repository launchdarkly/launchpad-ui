import type { CopyToClipboardProps } from '../src';
import type { CopyToClipboardHandleRef } from '../src/CopyToClipboard';

import { useRef } from 'react';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { CopyToClipboard } from '../src';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.navigator = { clipboard: { writeText: vi.fn() } };

const createComponent = ({ children, ...rest }: Partial<CopyToClipboardProps>) => (
  <CopyToClipboard text="Copy content" tooltipOptions={{ hoverOpenDelay: 0 }} {...rest}>
    {children || 'Copy content'}
  </CopyToClipboard>
);

describe('CopyToClipboard', () => {
  it('copies text when clicked on', async () => {
    render(createComponent({}));
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy content');
  });

  it('handles MouseEnter and MouseLeave', async () => {
    render(createComponent({}));
    expect(screen.queryByRole('tooltip')).toBeNull();

    const user = userEvent.setup();
    await user.hover(screen.getByText('Copy content'));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    await user.unhover(screen.getByText('Copy content'));
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('handles keyboard interactions', async () => {
    render(createComponent({}));
    expect(screen.queryByRole('tooltip')).toBeNull();

    const user = userEvent.setup();
    await user.tab();
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();

    await user.tab();
    expect(screen.queryByRole('tooltip')).toBeNull();
  });

  it('shows the confirmation tooltip when clicked', async () => {
    render(createComponent({}));
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

  it('copies imperatively when a ref is passed', async () => {
    const WrappedComponent = () => {
      const ref = useRef<CopyToClipboardHandleRef>(null);

      const handleClick = () => {
        ref.current?.handleCopy();
      };

      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div data-test-id="wrapper" onClick={handleClick}>
          <CopyToClipboard text="Copy content" ref={ref}>
            Copy
          </CopyToClipboard>
        </div>
      );
    };

    render(<WrappedComponent />);

    const user = userEvent.setup();
    await user.click(screen.getByTestId('wrapper'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Copy content');
  });

  it('renders a button when asChild is false', async () => {
    render(createComponent({}));
    const trigger = screen.getByTestId('copyToClipboardTrigger');
    expect(trigger.tagName).toBe('BUTTON');
  });

  it('renders as child when asChild is true', async () => {
    render(createComponent({ asChild: true, children: <span>click me</span> }));
    const trigger = screen.getByTestId('copyToClipboardTrigger');
    expect(trigger.tagName).toBe('SPAN');
  });
});
