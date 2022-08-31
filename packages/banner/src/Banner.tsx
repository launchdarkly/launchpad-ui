import type { AlertKind } from '@launchpad-ui/alert';

import { Button, ButtonType } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Banner.css';

type BannerProps = {
  kind: AlertKind;
  className?: string;
  children: React.ReactNode;
  onDismiss?(): void;
  dismissible?: boolean;
  testId?: string;
  title?: string;
};

const Banner = ({
  kind,
  className,
  children,
  onDismiss,
  dismissible,
  testId,
  title,
}: BannerProps) => {
  return (
    <div className={cx('Banner', `Banner--${kind}`, className)} data-test-id={testId}>
      <KindIcon kind={kind} className="Banner-icon" />
      <div className="Banner-content">
        {title && <h4 className="Banner-heading">{title}</h4>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <Button
          aria-label="Close banner"
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
