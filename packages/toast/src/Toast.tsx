import type { HTMLAttributes, ReactNode } from 'react';

import { KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { useEffect } from 'react';

import styles from './styles/Toast.module.css';

type ToastBaseProps = {
  kind: 'info' | 'success' | 'error' | 'warning';
  onDismiss: () => void;
  content: ReactNode;
};

type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & ToastBaseProps;

const Toast = ({ className, kind, onDismiss, content, ...rest }: ToastProps) => {
  useEffect(() => {
    setTimeout(() => {
      onDismiss();
    }, 6000);
  }, []);

  return (
    <div
      {...rest}
      className={cx('Toast', styles.Toast, styles[`Toast--${kind}`], className)}
      role="status"
    >
      {kind !== 'info' && <KindIcon kind={kind} className={styles['Toast-icon']} />}
      <p className={styles['Toast-content']}>{content}</p>
    </div>
  );
};

export { Toast };
export type { ToastBaseProps, ToastProps };
