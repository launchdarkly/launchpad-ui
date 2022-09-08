import type { AlertProps } from '@launchpad-ui/alert';
import type { HTMLAttributes } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Banner.css';

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
  kind: AlertProps['kind'];
  onDismiss?(): void;
  dismissible?: boolean;
  header?: string;
};

const Banner = ({
  kind,
  className,
  children,
  onDismiss,
  dismissible,
  header,
  'data-test-id': testId,
  ...rest
}: BannerProps) => {
  const classes = cx('Banner', `Banner--${kind}`, className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      <KindIcon kind={kind} className="Banner-icon" />
      <div className="Banner-content">
        {header && <h4 className="Banner-heading">{header}</h4>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <IconButton
          aria-label="Close banner"
          icon={<Close size="small" />}
          size="small"
          className="Banner-close"
          onClick={onDismiss}
          kind="close"
          data-test-id={testId ? `${testId}-dismiss-button` : undefined}
        />
      )}
    </div>
  );
};

export { Banner };
export type { BannerProps };
