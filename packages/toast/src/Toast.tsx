import type { ToastKind } from './types';
import type { HTMLAttributes } from 'react';

import { KindIcon } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Toast.module.css';

type ToastProps = HTMLAttributes<HTMLDivElement> & {
  kind: ToastKind;
  content: string;
  onDismiss?: () => void;
};

const Toast = ({ className, kind, content, onDismiss, ...rest }: ToastProps) => {
  return (
    <div {...rest} className={cx(styles.Toast, styles[`Toast--${kind}`], className)} role="status">
      <KindIcon kind={kind} className={styles['Toast-icon']} />
      <p className={styles['Toast-content']}>{content}</p>
    </div>
  );
};

export { Toast };
export type { ToastProps };
