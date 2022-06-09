import type { AlertKind } from '@launchpad-ui/alert';

import { Button, ButtonType } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';
import cx from 'clsx';

import './styles.css';

type BannerProps = {
  kind: AlertKind;
  className?: string;
  children: React.ReactNode;
  onDismiss?(): void;
  dismissible?: boolean;
  testId?: string;
};

const Banner = ({ kind, className, children, onDismiss, dismissible, testId }: BannerProps) => {
  return (
    <div className={cx('Banner', `Banner--${kind}`, className)} data-test-id={testId}>
      <KindIcon kind={kind} className="Banner-icon" />
      <span className="Banner-text">{children}</span>
      {dismissible && (
        <Button
          aria-label="Close this notification."
          type={ButtonType.ICON}
          icon={<Close size={IconSize.SMALL} />}
          className="Banner-close"
          onClick={onDismiss}
          testId={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Banner };
export type { BannerProps };
