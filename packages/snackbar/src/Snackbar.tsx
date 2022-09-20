import type { HTMLAttributes, ReactElement } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Snackbar.module.css';

type SnackbarBaseProps = {
  kind: 'info' | 'error' | 'warning';
  header?: string;
  description: string;
  cta?: ReactElement<HTMLAnchorElement>;
  onDismiss: () => void;
};

type SnackbarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & SnackbarBaseProps;

const Snackbar = ({
  className,
  kind,
  header,
  description,
  cta,
  onDismiss,
  ...rest
}: SnackbarProps) => {
  return (
    <div
      {...rest}
      className={cx('Snackbar', styles.Snackbar, styles[`Snackbar--${kind}`], className)}
      role="status"
    >
      <KindIcon kind={kind} className={styles['Snackbar-icon']} />
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
