import type { HTMLAttributes } from 'react';

import { ButtonKind, IconButton, IconButtonSize } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useState } from 'react';

import styles from './styles/Alert.module.css';
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

  header?: string;
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
  header,
  'data-test-id': testId,
  ...rest
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  const defaultClasses = `Alert ${styles.Alert} ${styles[`Alert--${kind}`]}`;
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
      role={[AlertKind.INFO, AlertKind.SUCCESS].includes(kind) ? 'status' : 'alert'}
    >
      {!noIcon && (
        <KindIcon
          kind={kind}
          className={styles['Alert-icon']}
          size={size === AlertSize.SMALL ? IconSize.SMALL : IconSize.MEDIUM}
        />
      )}
      <div className={styles['Alert-content']}>
        {header && <h4 className={styles['Alert-heading']}>{header}</h4>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <IconButton
          aria-label="Close this alert."
          size={IconButtonSize.SMALL}
          icon={<Close size={IconSize.SMALL} />}
          kind={ButtonKind.CLOSE}
          onClick={handleDismissClicked}
          data-test-id={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Alert };
export type { AlertProps };
