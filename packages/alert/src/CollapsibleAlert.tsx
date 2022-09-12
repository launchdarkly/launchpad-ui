import type { AlertKind } from './types';
import type { HTMLAttributes } from 'react';

import { ExpandMore, IconSize } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useRef, useState } from 'react';

import { Alert } from './Alert';
import styles from './styles/CollapsibleAlert.module.css';
import { AlertSize } from './types';

type CollapsibleAlertProps = HTMLAttributes<HTMLElement> & {
  /**
   * Passing in one of `info`, `success`, `warning`, `error`, `striped`
   * displays the style and icon pair associated with the variant.
   * The default is AlertKind.INFO.
   */
  kind?: AlertKind;
  /**
   * The message to pass into the Alert.
   */
  message: string | JSX.Element;
};

const CollapsibleAlert = ({
  children,
  className,
  kind,
  message,
  ...rest
}: CollapsibleAlertProps) => {
  const [alertCollapsed, setAlertCollapsed] = useState(true);
  const buttonRef = useRef(null);

  const classes = cx(styles['CollapsibleAlert--container'], className);

  const toggleOpen = () => {
    setAlertCollapsed(!alertCollapsed);
  };

  return (
    <div className={classes} {...rest}>
      <Alert
        kind={kind}
        size={AlertSize.MEDIUM}
        className={cx('CollapsibleAlert', styles.CollapsibleAlert)}
      >
        <div>{message}</div>
        <button
          aria-expanded={!alertCollapsed}
          aria-haspopup
          ref={buttonRef}
          onClick={toggleOpen}
          className={styles['CollapsibleAlert-button']}
        >
          {alertCollapsed ? (
            <>
              <span>Show more</span>
              <ExpandMore className={styles['CollapsibleAlert--icon']} size={IconSize.MEDIUM} />
            </>
          ) : (
            <>
              <span>Show less</span>
              <ExpandMore className={styles['CollapsibleAlert--icon']} size={IconSize.MEDIUM} />
            </>
          )}
        </button>
        <div className={styles['CollapsibleAlert--contentContainer']}>
          {!alertCollapsed && <>{children}</>}
        </div>
      </Alert>
    </div>
  );
};

export { CollapsibleAlert };
export type { CollapsibleAlertProps };
