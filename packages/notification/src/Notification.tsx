import type { NotificationLevel } from './types';
import type { KeyboardEvent, ReactNode } from 'react';

import { Button, ButtonSize, ButtonType } from '@launchpad-ui/button';
import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { KindIcon, Close, ExpandMore, IconSize } from '@launchpad-ui/icons';
import { FocusScope } from '@react-aria/focus';
import cx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

import './styles/Notification.css';

type NotificationProps = {
  details?: string;
  level: NotificationLevel;
  message: ReactNode;
  onDismiss: () => void;
  ttl?: number;
  json?: string;
};

const Notification = ({
  level,
  message,
  details,
  onDismiss = () => undefined,
  json,
  ttl,
  ...props
}: NotificationProps) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [showDetails, setShowDetails] = useState(false);
  const [containFocus, setContainFocus] = useState(false);

  const close = useCallback(() => {
    onDismiss();
  }, [onDismiss]);

  const handleEscape = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (ttl) {
      timeout.current = setTimeout(onDismiss, ttl);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (timeout) {
        clearTimeout(timeout.current);
      }
      if (containFocus) {
        setContainFocus(false);
      }
    };
  }, [containFocus, handleEscape, onDismiss, ttl]);

  useEffect(() => {
    if (showDetails && timeout.current) {
      clearTimeout(timeout.current);
      delete timeout.current;
    }
  }, [showDetails]);

  const handleMouseOver = () => {
    setContainFocus(true);
    document.addEventListener('keydown', handleEscape);
  };

  const handleMouseOut = () => {
    setContainFocus(false);
    document.removeEventListener('keydown', handleEscape);
  };

  const handleCloseClick = () => {
    onDismiss();
  };

  const handleDetailsKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDetailsClick();
    }
  };

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const classes = cx('Notification', `Notification--${level}`);
  const detailsClasses = cx('Notification-details', {
    'is-expanded': showDetails,
  });

  const content = (
    <>
      <KindIcon kind={level} className="Notification-icon" />
      <div className="Notification-body">
        <div className="Notification-message">{message}</div>
        {details && (
          <div className={detailsClasses} data-test-id="details-container">
            <button
              aria-label="More details"
              aria-expanded={showDetails}
              aria-haspopup
              className="Notification-detailsExpand"
              onClick={handleDetailsClick}
              onKeyPress={handleDetailsKeyPress}
            >
              More details <ExpandMore size={IconSize.SMALL} />
            </button>

            <div className="Notification-detailsContent">{details}</div>
            {json && (
              <CopyToClipboard text={json}>
                <Button
                  component="span"
                  size={ButtonSize.TINY}
                  className="Notification-copyDetailsButton"
                >
                  Copy details
                </Button>
              </CopyToClipboard>
            )}
          </div>
        )}
      </div>
      <Button
        type={ButtonType.ICON}
        icon={<Close size={IconSize.SMALL} />}
        className="Notification-close"
        onClick={handleCloseClick}
        aria-label="Close"
        tabIndex={0}
        data-test-id="notification-close"
      />
    </>
  );

  return (
    <div
      role="alert"
      {...props}
      className={classes}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleMouseOver}
      onBlur={handleMouseOut}
    >
      {containFocus ? (
        <FocusScope contain autoFocus>
          {content}
        </FocusScope>
      ) : (
        content
      )}
    </div>
  );
};

export { Notification };
export type { NotificationProps };
