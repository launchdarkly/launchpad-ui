import { CheckCircle, IconSize } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { announce } from '@react-aria/live-announcer';
import { useRef, useState } from 'react';

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
  shouldOnlyShowTooltipAfterCopy?: boolean;
  onClick?(): void;
};

const CopyConfirmation = () => (
  <span className="u-flex-middle">
    <CheckCircle className="Clipboard-checkmark" size={IconSize.MEDIUM} />
    <span className="u-ml-s">Copied!</span>
  </span>
);

const CopyToClipboard = ({
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
  shouldOnlyShowTooltipAfterCopy,
  onClick,
}: CopyToClipboardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [wasCopied, setWasCopied] = useState(false);
  const buttonElement = useRef<HTMLButtonElement>(null);

  const tooltipText = wasCopied
    ? customCopiedText || <CopyConfirmation />
    : tooltip || 'Copy to clipboard';
  const ariaLabelText = ariaLabel ? ariaLabel : `Copy ${text} to your clipboard.`;
  const testIdOrFallback = testId ? testId : 'temp-test-id';

  const handleClick = async () => {
    await navigator.clipboard.writeText(text);
    buttonElement.current?.focus();
    setIsOpen(true);
    setWasCopied(true);
    announce('Copied!', 'polite', 300);

    onClick?.();
  };

  const handleFocus = () => {
    if (!shouldOnlyShowTooltipAfterCopy) {
      setIsOpen(true);
    }
  };

  const handleBlur = () => {
    setIsOpen(false);
    setWasCopied(false);
  };

  // This is only triggered when hovering over it
  const handleInteraction = (isOpen: boolean) => {
    setIsOpen(shouldOnlyShowTooltipAfterCopy ? false : isOpen);
    setWasCopied((prev) => (!isOpen ? isOpen : prev));
  };

  return (
    <span className="CopyToClipboard" data-test-id={testIdOrFallback}>
      <button
        className="CopyToClipboard-button"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onClick={handleClick}
        ref={buttonElement}
        aria-label={ariaLabelText}
      >
        <Tooltip
          {...tooltipOptions}
          isOpen={isOpen}
          content={tooltipText}
          onInteraction={handleInteraction}
          targetClassName={popoverTargetClassName}
        >
          {children}
        </Tooltip>
      </button>
    </span>
  );
};

export { CopyConfirmation, CopyToClipboard };
export type { CopyToClipboardProps };
