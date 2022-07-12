/* eslint-disable functional/no-class */
import type { NotificationLevel } from './types';
import type { ReactNode } from 'react';

import { Button, ButtonSize, ButtonType } from '@launchpad-ui/button';
import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { KindIcon, Close, ExpandMore, IconSize } from '@launchpad-ui/icons';
import { FocusScope } from '@react-aria/focus';
import cx from 'clsx';
import { Component, KeyboardEvent } from 'react';

import './styles/Notification.css';

type NotificationProps = {
  details?: string;
  level: NotificationLevel;
  message: ReactNode;
  onDismiss: () => void;
  ttl?: number;
  json?: string;
};

type StateProps = {
  showDetails?: boolean;
  containFocus?: boolean;
};

class Notification extends Component<NotificationProps, StateProps> {
  timeout?: ReturnType<typeof setTimeout> = undefined;

  static defaultProps = {
    onDismiss: () => undefined,
  };

  componentDidMount() {
    const { ttl, onDismiss } = this.props;

    if (ttl) {
      this.timeout = setTimeout(onDismiss, ttl);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape);

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    if (this.state.containFocus) {
      this.setState({ containFocus: false });
    }
  }

  close() {
    this.props.onDismiss();
  }

  constructor(props: NotificationProps) {
    super(props);
    this.state = { showDetails: false, containFocus: false };
  }

  handleEscape = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  handleMouseEnter = () => {
    this.setState({ containFocus: true });
    document.addEventListener('keydown', this.handleEscape);
  };

  handleMouseLeave = () => {
    this.setState({ containFocus: false });
    document.removeEventListener('keydown', this.handleEscape);
  };

  handleCloseClick = () => {
    this.props.onDismiss();
  };

  handleDetailsKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.handleDetailsClick();
    }
  };

  handleDetailsClick = () => {
    this.setState({ showDetails: true }, () => {
      if (this.timeout) {
        clearTimeout(this.timeout);
        delete this.timeout;
      }
    });
  };

  render() {
    const { level, message, details, onDismiss, json, ...props } = this.props;
    const classes = cx('Notification', `Notification--${level}`);
    const detailsClasses = cx('Notification-details', {
      'is-expanded': this.state.showDetails,
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
                aria-expanded={this.state.showDetails}
                aria-haspopup
                className="Notification-detailsExpand"
                onClick={this.handleDetailsClick}
                onKeyPress={this.handleDetailsKeyPress}
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
          onClick={this.handleCloseClick}
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
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.containFocus ? (
          <FocusScope contain autoFocus>
            {content}
          </FocusScope>
        ) : (
          content
        )}
      </div>
    );
  }
}

export { Notification };
export type { NotificationProps };
