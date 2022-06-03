import type { NotificationLevel } from './types';
import type { FocusTrap } from 'focus-trap';
import type { ReactNode } from 'react';

import { Button, ButtonType } from '@launchpad-ui/button';
import { KindIcon, Close, ExpandMore, IconSize } from '@launchpad-ui/icons';
import classNames from 'classnames';
import { createFocusTrap } from 'focus-trap';
import { Component, KeyboardEvent } from 'react';

import './styles/Notification.css';

type NotificationProps = {
  details?: string;
  level: NotificationLevel;
  message: ReactNode;
  onDismiss: () => void;
  ttl?: number;
};

type StateProps = {
  showDetails?: boolean;
};

class Notification extends Component<NotificationProps, StateProps> {
  timeout?: ReturnType<typeof setTimeout> = undefined;
  focusTrap?: FocusTrap;
  node?: HTMLDivElement | null;

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

    if (this.focusTrap) {
      this.clearFocus();
    }
  }

  setupFocus() {
    if (!this.node) {
      return;
    }
    if (!this.focusTrap) {
      this.focusTrap = createFocusTrap(this.node, {
        checkCanFocusTrap: () => new Promise((resolve) => setTimeout(resolve, 50)),
      });
    }
    this.focusTrap.activate();
  }

  clearFocus() {
    this.focusTrap?.deactivate();
  }

  close() {
    this.props.onDismiss();
  }

  constructor(props: NotificationProps) {
    super(props);
    this.state = { showDetails: false };
  }

  handleEscape = (event: globalThis.KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.close();
    }
  };

  handleMouseEnter = () => {
    this.setupFocus();
    document.addEventListener('keydown', this.handleEscape);
  };

  handleMouseLeave = () => {
    this.clearFocus();
    document.removeEventListener('keydown', this.handleEscape);
  };

  handleCloseClick = () => {
    this.props.onDismiss();
  };

  handleDetailsKeyPress = (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
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
    const { level, message, details, onDismiss, ...props } = this.props;
    const classes = classNames('Notification', `Notification--${level}`);
    const detailsClasses = classNames('Notification-details', {
      'is-expanded': this.state.showDetails,
    });

    return (
      <div
        role="alert"
        {...props}
        className={classes}
        ref={(node) => {
          this.node = node;
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <KindIcon kind={level} className="Notification-icon" />
        <div className="Notification-body">
          <div className="Notification-message">{message}</div>
          {details && (
            <div className={detailsClasses} data-testid="details-container">
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
              {/* TODO: implement CopyButton for copying JSON to clipboard */}
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
      </div>
    );
  }
}

export { Notification };
export type { NotificationProps };
