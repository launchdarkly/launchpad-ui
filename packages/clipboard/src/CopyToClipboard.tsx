import type { KeyboardEventHandler } from 'react';

import { Button, ButtonSize } from '@launchpad-ui/button';
import { CheckCircle, IconSize } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { Slot } from '@radix-ui/react-slot';
import { announce } from '@react-aria/live-announcer';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

import './styles/Clipboard.css';

type CopyToClipboardProps = {
  children: React.ReactNode;
  testId?: string;
  ariaLabel?: string;
  customCopiedText?: string;
  text: string;
  tooltip?: string | JSX.Element;
  tooltipOptions?: object;
  popoverTargetClassName?: string;
  onClick?(): void;
  asChild?: boolean;
};

type CopyToClipboardHandleRef = {
  handleCopy: () => void;
};

const CopyConfirmation = () => (
  <span className="Clipboard-confirmation">
    <CheckCircle className="Clipboard-checkmark" size={IconSize.MEDIUM} />
    <span className="Clipboard-copied">Copied!</span>
  </span>
);

const CopyToClipboard = forwardRef<CopyToClipboardHandleRef, CopyToClipboardProps>(
  (
    {
      customCopiedText,
      text,
      tooltip,
      tooltipOptions = {
        placement: 'bottom',
      },
      popoverTargetClassName,
      children,
      ariaLabel,
      testId,
      onClick,
      asChild,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [wasCopied, setWasCopied] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleCopy = useCallback(async () => {
      await navigator.clipboard.writeText(text);
      const node = buttonRef.current;

      if (node) {
        node.focus();
      }

      setIsOpen(true);
      setWasCopied(true);
      announce('Copied!', 'polite', 300);

      onClick?.();
    }, [onClick, buttonRef, text, setIsOpen, setWasCopied]);

    // this imperative handle is useful when a parent needs to programmatically
    // call `handleCopy`, e.g. when the parent node is clicked
    useImperativeHandle(
      ref,
      () => ({
        handleCopy,
      }),
      [handleCopy]
    );

    const tooltipText = wasCopied
      ? customCopiedText || <CopyConfirmation />
      : tooltip || 'Copy to clipboard';
    const ariaLabelText = ariaLabel ? ariaLabel : `Copy ${text} to your clipboard.`;
    const testIdOrFallback = testId ? testId : 'temp-test-id';

    const handleInteraction = (isOpen: boolean) => {
      setIsOpen(isOpen);
      setTimeout(() => setWasCopied((prev) => (!isOpen ? isOpen : prev)));
    };

    const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
      const validKeys = ['Spacebar', ' ', 'Enter'];

      if (validKeys.includes(event.key)) {
        event.preventDefault();
        handleCopy();
      }
    };

    const Component = asChild ? Slot : Button;

    return (
      <span className="CopyToClipboard" data-test-id={testIdOrFallback}>
        <Tooltip
          {...tooltipOptions}
          isOpen={isOpen}
          content={tooltipText}
          onInteraction={handleInteraction}
          targetClassName={popoverTargetClassName}
        >
          <Component
            onClick={handleCopy}
            onKeyDown={handleKeyDown}
            size={ButtonSize.TINY}
            ref={buttonRef}
            aria-label={ariaLabelText}
            role="button"
            className="CopyToClipboard-trigger"
            tabIndex={0}
          >
            {children}
          </Component>
        </Tooltip>
      </span>
    );
  }
);

CopyToClipboard.displayName = 'CopyToClipboard';

export { CopyConfirmation, CopyToClipboard };
export type { CopyToClipboardProps, CopyToClipboardHandleRef };
