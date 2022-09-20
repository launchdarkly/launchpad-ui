import type { AlertProps } from './Alert';
import type { HTMLAttributes } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useRef, useState } from 'react';

import { Alert } from './Alert';
import './styles/CollapsibleAlert.css';

type CollapsibleAlertProps = HTMLAttributes<HTMLElement> & {
  /**
   * Passing in one of `info`, `success`, `warning`, `error`, `striped`
   * displays the style and icon pair associated with the variant.
   * The default is info.
   */
  kind?: AlertProps['kind'];
  /**
   * The message to pass into the Alert.
   */
  message: string | JSX.Element;
  'data-test-id'?: string;
};

const CollapsibleAlert = ({
  children,
  className,
  kind,
  message,
  'data-test-id': testId = 'collapsible-alert',
  ...rest
}: CollapsibleAlertProps) => {
  const [alertCollapsed, setAlertCollapsed] = useState(true);
  const buttonRef = useRef(null);

  const classes = cx('CollapsibleAlert--container', className);

  const toggleOpen = () => {
    setAlertCollapsed(!alertCollapsed);
  };

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      <Alert kind={kind} size="medium" className="CollapsibleAlert">
        <div>{message}</div>
        <button
          aria-expanded={!alertCollapsed}
          aria-haspopup
          ref={buttonRef}
          onClick={toggleOpen}
          className="CollapsibleAlert-button"
        >
          {alertCollapsed ? (
            <>
              <span>Show more</span>
              <ExpandMore className="CollapsibleAlert--icon" size="medium" />
            </>
          ) : (
            <>
              <span>Show less</span>
              <ExpandMore className="CollapsibleAlert--icon" size="medium" />
            </>
          )}
        </button>
        <div className="CollapsibleAlert--contentContainer">
          {!alertCollapsed && <>{children}</>}
        </div>
      </Alert>
    </div>
  );
};

export { CollapsibleAlert };
export type { CollapsibleAlertProps };
