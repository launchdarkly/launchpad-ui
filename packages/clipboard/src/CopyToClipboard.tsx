/* eslint-disable functional/no-class */
import { CheckCircle, IconSize } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { announce } from '@react-aria/live-announcer';
import { Component } from 'react';

import './styles.css';

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

type State = {
  isOpen: boolean;
  wasCopied: boolean;
};

const CopyConfirmation = () => (
  <span className="u-flex-middle">
    <CheckCircle className="Clipboard-checkmark" size={IconSize.MEDIUM} />
    <span className="u-ml-s">Copied!</span>
  </span>
);

class CopyToClipboard extends Component<CopyToClipboardProps, State> {
  buttonElement?: HTMLButtonElement;
  static defaultProps = {
    tooltipOptions: {
      placement: 'bottom',
    },
  };

  public state = {
    isOpen: false,
    wasCopied: false,
  };

  render() {
    const {
      customCopiedText,
      text,
      tooltip,
      tooltipOptions,
      popoverTargetClassName,
      children,
      ariaLabel,
      testId,
    } = this.props;
    const { isOpen, wasCopied } = this.state;
    const tooltipText = wasCopied
      ? customCopiedText || <CopyConfirmation />
      : tooltip || 'Copy to clipboard';
    const ariaLabelText = ariaLabel ? ariaLabel : `Copy ${text} to your clipboard.`;
    const testIdOrFallback = testId ? testId : 'temp-test-id';
    return (
      <span className="CopyToClipboard" data-test-id={testIdOrFallback}>
        <button
          className="CopyToClipboard-button"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onClick={this.handleClick}
          ref={this.setButtonRef}
          aria-label={ariaLabelText}
        >
          <Tooltip
            {...tooltipOptions}
            isOpen={isOpen}
            content={tooltipText}
            onInteraction={this.handleInteraction}
            targetClassName={popoverTargetClassName}
          >
            {children}
          </Tooltip>
        </button>
      </span>
    );
  }

  setButtonRef = (node: HTMLButtonElement) => {
    this.buttonElement = node;
  };

  handleClick = async () => {
    const { onClick, text } = this.props;
    await navigator.clipboard.writeText(text);
    this.buttonElement?.focus();
    this.setState(() => ({
      isOpen: true,
      wasCopied: true,
    }));
    announce('Copied!', 'polite', 300);

    onClick?.();
  };

  handleFocus = () => {
    const { shouldOnlyShowTooltipAfterCopy } = this.props;
    if (!shouldOnlyShowTooltipAfterCopy) {
      this.setState(() => ({
        isOpen: true,
      }));
    }
  };

  handleBlur = () => {
    this.setState({
      isOpen: false,
      wasCopied: false,
    });
  };

  // This is only triggered when hovering over it
  handleInteraction = (isOpen: boolean) => {
    const { shouldOnlyShowTooltipAfterCopy } = this.props;
    this.setState((prevState) => ({
      isOpen: shouldOnlyShowTooltipAfterCopy ? false : isOpen,
      wasCopied: !isOpen ? isOpen : prevState.wasCopied,
    }));
  };
}

export { CopyConfirmation, CopyToClipboard };
export type { CopyToClipboardProps };
