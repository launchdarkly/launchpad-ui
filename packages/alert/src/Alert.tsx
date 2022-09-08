import type { HTMLAttributes } from 'react';

import { ButtonKind, IconButton, IconButtonSize } from '@launchpad-ui/button';
import { Close, IconSize, StatusIcon, StatusIconKind } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useState } from 'react';

import './styles/Alert.css';
import { AlertKind, AlertSize } from './types';

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
  /**
   * When true, shows the compact Alert variant,
   * width of Alert fits content.
   */
  compact?: boolean;
  /**
   * When true, shows Alert without background/border colors.
   */
  isInline?: boolean;
  /**
   * Passing in one of `info`, `success`, `warning`, `error`, `striped`
   * displays the style and icon pair associated with the variant.
   * The default is AlertKind.INFO.
   */
  kind?: AlertKind;
  /**
   * Passing in one of `AlertSize.SMALL`, `AlertSize.MEDIUM`
   * displays either a small or medium Alert.
   * The default is AlertSize.MEDIUM.
   */
  size?: AlertSize;
  /**
   * When true, shows the wide Alert variant, adds top margin,
   * sets width to 86% (why?).
   */
  wide?: boolean;

  /**
   * When true, shows the close button. When button is clicked, the Alert
   * is removed.
   */
  dismissible?: boolean;

  /**
   * Function fired on click of close button.
   */
  onDismiss?(): void;

  /**
   * When true no icon is rendered
   */
  noIcon?: boolean;
};

const Alert = ({
  children,
  className,
  compact,
  isInline,
  kind = AlertKind.INFO,
  size = AlertSize.MEDIUM,
  wide,
  dismissible,
  onDismiss,
  noIcon,
  'data-test-id': testId,
  ...rest
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  const defaultClasses = ['Alert', `Alert--${kind}`, className];
  const borderedClasses = `Alert--${kind}--bordered Alert--bordered`;
  const sizeClass = `Alert--${size}`;
  const classes = cx(
    ...defaultClasses,
    !isInline && borderedClasses,
    size && sizeClass,
    compact && 'Alert--compact',
    isInline && 'Alert--inline',
    wide && 'Alert--wide'
  );

  const handleDismissClicked = () => {
    if (onDismiss) {
      onDismiss();
    }

    setDismissed(true);
  };

  if (dismissed) {
    return null;
  }

  return (
    <div
      {...rest}
      className={classes}
      data-test-id={testId}
      role={[AlertKind.INFO, AlertKind.SUCCESS].includes(kind) ? 'status' : 'alert'}
    >
      {!noIcon && (
        <StatusIcon
          kind={StatusIconKind[kind.toUpperCase() as keyof typeof AlertKind]}
          className="Alert-icon"
          size={size === AlertSize.SMALL ? IconSize.SMALL : IconSize.MEDIUM}
        />
      )}
      <div className="Alert-content">{children}</div>
      {dismissible && (
        <IconButton
          aria-label="Close this alert."
          size={IconButtonSize.SMALL}
          icon={<Close size={IconSize.SMALL} />}
          kind={ButtonKind.CLOSE}
          className="Alert-close"
          onClick={handleDismissClicked}
          data-test-id={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Alert };
export type { AlertProps };
