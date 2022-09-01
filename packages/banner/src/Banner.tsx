import type { AlertKind } from '@launchpad-ui/alert';
import type { ReactNode } from 'react';

import { ButtonKind, IconButton, IconButtonSize } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Banner.css';

type BannerProps = {
  kind: AlertKind;
  className?: string;
  children: ReactNode;
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
        <IconButton
          aria-label="Close this notification."
          icon={<Close size={IconSize.SMALL} />}
          size={IconButtonSize.SMALL}
          className="Banner-close"
          onClick={onDismiss}
          kind={ButtonKind.CLOSE}
          data-test-id={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Banner };
export type { BannerProps };
