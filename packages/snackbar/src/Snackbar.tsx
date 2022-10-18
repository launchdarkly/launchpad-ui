import type { HTMLAttributes, ReactElement, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, StatusIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Snackbar.module.css';

type SnackbarBaseProps = {
  kind: 'info' | 'error' | 'warning';
  header?: ReactNode;
  description: ReactNode;
  cta?: ReactElement<HTMLAnchorElement>;
  onDismiss?: () => void;
  'data-test-id'?: string;
};

type SnackbarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & SnackbarBaseProps;

const Snackbar = ({
  className,
  kind,
  header,
  description,
  cta,
  onDismiss,
  'data-test-id': testId = 'snackbar',
  ...rest
}: SnackbarProps) => {
  return (
    <div
      {...rest}
      className={cx('Snackbar', styles.Snackbar, styles[`Snackbar--${kind}`], className)}
      data-test-id={testId}
      role="status"
    >
      <StatusIcon kind={kind} className={styles['Snackbar-icon']} />
      <div className={styles['Snackbar-content']}>
        {header && <h4 className={styles['Snackbar-heading']}>{header}</h4>}
        <span className={styles['Snackbar-description']}>{description}</span> {cta}
      </div>
      <IconButton
        icon={<Close size="small" />}
        size="small"
        aria-label="Dismiss"
        kind="close"
        className={styles['Snackbar-close']}
        data-test-id="snackbar-dismiss"
        onClick={onDismiss}
      />
    </div>
  );
};

export { Snackbar };
export type { SnackbarBaseProps, SnackbarProps };
