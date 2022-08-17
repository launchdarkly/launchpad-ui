import type { ButtonKind, ButtonSize } from '@launchpad-ui/button';
import type { PopoverPlacement } from '@launchpad-ui/popover';
import type { TooltipProps } from '@launchpad-ui/tooltip';

import { Button } from '@launchpad-ui/button';
import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Tooltip } from '@launchpad-ui/tooltip';
import cx from 'clsx';
import { forwardRef } from 'react';

import './styles/SplitButton.css';

type SplitButtonProps = {
  className?: string;
  kind: ButtonKind.PRIMARY | ButtonKind.DEFAULT;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  name?: string | JSX.Element;
  icon?: React.ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
  placement?: PopoverPlacement;
  onClickMainButton(v: React.MouseEvent): void;
  onClickDropdownButton?(v: React.MouseEvent): void;
  loadingText?: string;
  onSelect(item: string | object | number): void;
  testId?: string;
  isOpen?: boolean;
  onInteraction?(): void;
  isMainButtonDisabled?: boolean;
  isDropdownButtonDisabled?: boolean;
  mainButtonTooltip?: string;
  dropButtonTooltip?: string;
  tooltipOptions?: Partial<TooltipProps>;
  dropdownAriaLabel?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
};

const SplitButton = forwardRef<React.ElementRef<typeof Button>, SplitButtonProps>(
  (
    {
      disabled,
      isMainButtonDisabled,
      isDropdownButtonDisabled,
      mainButtonTooltip,
      dropButtonTooltip,
      name,
      kind,
      size,
      children,
      onClickMainButton,
      onClickDropdownButton,
      placement,
      isLoading,
      loadingText,
      onSelect,
      testId,
      className,
      isOpen,
      onInteraction,
      tooltipOptions,
      dropdownAriaLabel,
      icon,
      ariaLabel: buttonAriaLabel,
    },
    ref
  ) => {
    let ariaLabel;
    if (disabled) {
      ariaLabel = 'These options are unavailable';
    } else if (dropdownAriaLabel) {
      ariaLabel = dropdownAriaLabel;
    } else if (dropButtonTooltip) {
      ariaLabel = `Explore ${dropButtonTooltip.toLowerCase()}`;
    } else {
      ariaLabel = 'More options';
    }

    const dropdownButton = (
      <DropdownButton
        className="SplitButton-drop"
        kind={kind}
        disabled={disabled || isDropdownButtonDisabled}
        size={size}
        onClick={onClickDropdownButton}
        aria-label={ariaLabel}
      />
    );

    const mainButton = (
      <Button
        aria-label={buttonAriaLabel}
        kind={kind}
        size={size}
        icon={icon}
        className="SplitButton-main"
        disabled={disabled || isMainButtonDisabled}
        isLoading={isLoading}
        loadingText={loadingText}
        onClick={onClickMainButton}
        testId={testId}
        ref={ref}
      >
        {name}
      </Button>
    );

    return (
      <div className={cx('SplitButton', className)}>
        {mainButtonTooltip ? (
          <Tooltip content={mainButtonTooltip} {...tooltipOptions}>
            {mainButton}
          </Tooltip>
        ) : (
          mainButton
        )}
        <Dropdown
          enableArrow={false}
          placement={placement}
          disabled={disabled || isDropdownButtonDisabled}
          onSelect={onSelect}
          isOpen={isOpen}
          onInteraction={onInteraction}
          restrictWidth={false}
        >
          {dropButtonTooltip ? (
            <Tooltip content={dropButtonTooltip} {...tooltipOptions}>
              {dropdownButton}
            </Tooltip>
          ) : (
            dropdownButton
          )}
          {children}
        </Dropdown>
      </div>
    );
  }
);

SplitButton.displayName = 'SplitButton';

export { SplitButton };
export type { SplitButtonProps };
