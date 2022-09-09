import type { HTMLAttributes, ReactNode } from 'react';

import { KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Toast.module.css';
import { ToastKind } from './types';

type ToastBaseProps = {
  kind: ToastKind;
  onDismiss?: () => void;
  content: ReactNode;
};

type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & ToastBaseProps;

const Toast = ({ className, kind, onDismiss, content, ...rest }: ToastProps) => {
  return (
    <div
      {...rest}
      className={cx('Toast', styles.Toast, styles[`Toast--${kind}`], className)}
      role="status"
    >
      {kind !== ToastKind.INFO && <KindIcon kind={kind} className={styles['Toast-icon']} />}
      <p className={styles['Toast-content']}>{content}</p>
    </div>
  );
};

export { Toast };
export type { ToastBaseProps, ToastProps };
