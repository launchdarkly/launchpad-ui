import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/CopyCodeButton.module.css';

type CopyCodeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const CopyCodeButton = forwardRef<HTMLButtonElement, CopyCodeButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button ref={ref} className={cx(styles['CopyCodeButton'], className)} {...rest}>
        {children}
      </button>
    );
  }
);

CopyCodeButton.displayName = 'CopyCodeButton';

export { CopyCodeButton };
export type { CopyCodeButtonProps };
