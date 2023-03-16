import type { HTMLAttributes, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, StatusIcon } from '@launchpad-ui/icons';
import { useControlledState } from '@react-stately/utils';
import { cx } from 'classix';

import styles from './styles/Alert.module.css';

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
   * Passing in one of `info`, `success`, `warning`, `error`
   * displays the style and icon pair associated with the variant.
   * The default is info.
   */
  kind?: 'info' | 'success' | 'warning' | 'error';
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
   * Controlled dismissed handler
   */
  dismissed?: boolean;

  /**
   * When true no icon is rendered
   */
  noIcon?: boolean;

  header?: ReactNode;
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
  header,
  'data-test-id': testId = 'alert',
  ...rest
}: AlertProps) => {
  const [dismissed, setDismissed] = useControlledState(!!rest.dismissed, false, (val) =>
    val && onDismiss ? onDismiss() : null
  );

  const defaultClasses = `${styles.Alert} ${styles[`Alert--${kind}`]}`;
  const sizeClass = size === 'small' && styles[`Alert--${size}`];
  const classes = cx(
    defaultClasses,
    className,
    isInline ? styles['Alert--inline'] : styles['Alert--bordered'],
    sizeClass,
    compact && styles['Alert--compact'],
    wide && styles['Alert--wide']
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
        <StatusIcon
          kind={kind}
          className={styles['Alert-icon']}
          size={size}
          data-test-id={`${testId}-status-icon`}
        />
      )}
      <div className={styles['Alert-content']}>
        {header && (
          <h4 className={styles['Alert-heading']} data-test-id={`${testId}-header`}>
            {header}
          </h4>
        )}
        <div>{children}</div>
      </div>
      {dismissible && (
        <IconButton
          aria-label="Close this alert."
          size="small"
          className={styles['Alert-close']}
          icon={<Close size="small" />}
          kind="close"
          onClick={handleDismissClicked}
          data-test-id={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Alert };
export type { AlertProps };
