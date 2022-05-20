import { useState } from 'react';
import cx from 'classnames';
import { Button, ButtonType } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';

import './styles/Alert.css';

import { AlertKind, AlertSize } from './types';

export type AlertProps = {
  /**
   * Child nodes to pass into the Alert.
   */
  children?: React.ReactNode;
  /**
   * Custom classname(s) to add to the Alert.
   */
  className?: string;
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
   * Sets the value for the `data-test-id` attribute.
   */
  testId?: string;
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
  testId,
  wide,
  dismissible,
  onDismiss,
  noIcon,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  const defaultClasses = ['Alert', `Alert--${kind}`, className];
  const borderedClasses = `Alert--${kind}--bordered Alert--bordered`;
  const sizeClass = `Alert--${size}`;
  const classes = cx(defaultClasses, {
    [borderedClasses]: !isInline,
    [sizeClass]: size,
    'Alert--compact': compact,
    'Alert--inline': isInline,
    'Alert--wide': wide,
    LegacyStyles: true,
  });

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
      className={classes}
      data-test-id={testId}
      role={[AlertKind.INFO, AlertKind.SUCCESS].includes(kind) ? 'status' : 'alert'}
    >
      {!noIcon && (
        <KindIcon
          kind={kind}
          className="Alert-icon"
          size={size === AlertSize.SMALL ? IconSize.SMALL : IconSize.MEDIUM}
        />
      )}
      <div className="Alert-content">{children}</div>
      {dismissible && (
        <Button
          aria-label="Close this alert."
          type={ButtonType.ICON}
          icon={<Close size={IconSize.SMALL} />}
          className="Alert-close"
          onClick={handleDismissClicked}
          testId={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Alert };
