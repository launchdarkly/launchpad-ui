import type { AlertKind } from '@launchpad-ui/alert';
import type { HTMLAttributes } from 'react';

import { ButtonKind, IconButton, IconButtonSize } from '@launchpad-ui/button';
import { Close, IconSize, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import './styles/Banner.css';

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
  kind: AlertKind;
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
