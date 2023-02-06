import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/CopyCodeButton.module.css';

type CopyCodeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  'data-test-id'?: string;
};

const CopyCodeButton = forwardRef<HTMLButtonElement, CopyCodeButtonProps>(
  ({ className, children, 'data-test-id': testId = 'copy-code-button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        data-test-id={testId}
        type="button"
        className={cx(styles['CopyCodeButton'], className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

CopyCodeButton.displayName = 'CopyCodeButton';

export { CopyCodeButton };
export type { CopyCodeButtonProps };
