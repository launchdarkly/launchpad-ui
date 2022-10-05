import type { HTMLAttributes, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Banner.module.css';

type BannerProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
  kind: 'info' | 'warning' | 'error';
  onDismiss?(): void;
  dismissible?: boolean;
  header?: ReactNode;
};

const Banner = ({
  kind,
  className,
  children,
  onDismiss,
  dismissible,
  header,
  'data-test-id': testId = 'banner',
  ...rest
}: BannerProps) => {
  const classes = cx('Banner', styles.Banner, styles[`Banner--${kind}`], className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      <KindIcon kind={kind} className={styles['Banner-icon']} />
      <div className={styles['Banner-content']}>
        {header && <h4 className={styles['Banner-heading']}>{header}</h4>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <IconButton
          aria-label="Close banner"
          icon={<Close size="small" />}
          size="small"
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
