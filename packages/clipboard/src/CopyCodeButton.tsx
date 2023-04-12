import type { CopyToClipboardProps } from './CopyToClipboard';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { ClipboardCopy } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/CopyCodeButton.module.css';

type CopyCodeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  'data-test-id'?: string;
  variant?: CopyToClipboardProps['variant'];
};

const CopyCodeButton = forwardRef<HTMLButtonElement, CopyCodeButtonProps>(
  ({ className, children, 'data-test-id': testId = 'copy-code-button', variant, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        data-test-id={testId}
        type="button"
        className={cx(styles['CopyCodeButton'], className, variant && styles[variant])}
        {...rest}
      >
        {children}
        {variant && (
          <ClipboardCopy
            className={cx(styles['CopyCodeButton--icon'])}
            aria-hidden="true"
            size="small"
          />
        )}
      </button>
    );
  }
);

CopyCodeButton.displayName = 'CopyCodeButton';

export { CopyCodeButton };
export type { CopyCodeButtonProps };
