import { ExpandMore, IconSize } from '@launchpad-ui/icons';
import { useRef, useState } from 'react';

import { Alert } from './Alert';
import './styles/CollapsibleAlert.css';
import { AlertKind, AlertSize } from './types';

export type CollapsibleAlertProps = {
  /**
   * Child nodes to pass into the Alert.
   */
  children?: React.ReactNode;
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

export function CollapsibleAlert({ children, kind, message }: CollapsibleAlertProps) {
  const [alertCollapsed, setAlertCollapsed] = useState(true);
  const buttonRef = useRef(null);

  const toggleOpen = () => {
    setAlertCollapsed(!alertCollapsed);
  };

  return (
    <>
      <div className="CollapsibleAlert--container">
        <Alert kind={kind} size={AlertSize.MEDIUM} className="CollapsibleAlert">
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
                <ExpandMore className="CollapsibleAlert--icon" size={IconSize.MEDIUM} />
              </>
            ) : (
              <>
                <span>Show less</span>
                <ExpandMore className="CollapsibleAlert--icon" size={IconSize.MEDIUM} />
              </>
            )}
          </button>
          <div className="CollapsibleAlert--contentContainer">
            {!alertCollapsed && <>{children}</>}
          </div>
        </Alert>
      </div>
    </>
  );
}
