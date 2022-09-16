import type { HTMLAttributes } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useState } from 'react';

import './styles/Alert.css';

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
   * The default is info.
   */
  kind?: 'info' | 'success' | 'warning' | 'error' | 'striped';
  /**
   * Passing in one of `small`, `medium`
   * displays either a small or medium Alert.
   * The default is medium.
   */
  size?: 'small' | 'medium';
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
  kind = 'info',
  size = 'medium',
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
      role={['info', 'success'].includes(kind) ? 'status' : 'alert'}
    >
      {!noIcon && (
        <KindIcon kind={kind} className="Alert-icon" size={size === 'small' ? 'small' : 'medium'} />
      )}
      <div className="Alert-content">{children}</div>
      {dismissible && (
        <IconButton
          aria-label="Close this alert."
          size="small"
          icon={<Close size="small" />}
          kind="close"
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
