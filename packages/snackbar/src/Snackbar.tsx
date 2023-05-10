import type { ComponentProps, ReactElement, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, StatusIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { cloneElement } from 'react';

import styles from './styles/Snackbar.module.css';

type SnackbarBaseProps = {
  kind: 'info' | 'error' | 'warning' | 'success';
  header?: ReactNode;
  description: ReactNode;
  cta?: ReactElement<ComponentProps<'a'>>;
  onDismiss?: () => void;
  'data-test-id'?: string;
};

type SnackbarProps = Omit<ComponentProps<'div'>, 'children'> & SnackbarBaseProps;

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
  const CTA =
    cta &&
    cloneElement(cta, {
      onClick: onDismiss,
    });

  return (
    <div
      {...rest}
      className={cx(styles.Snackbar, styles[`Snackbar--${kind}`], className)}
      data-test-id={testId}
      role="status"
    >
      <StatusIcon kind={kind} className={styles['Snackbar-icon']} />
      <div className={styles['Snackbar-content']}>
        {header && <h4 className={styles['Snackbar-heading']}>{header}</h4>}
        <span className={styles['Snackbar-description']}>{description}</span> {CTA}
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
