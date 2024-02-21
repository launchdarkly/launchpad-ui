import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { CopyToClipboardProps } from './CopyToClipboard';

import { Icon } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { forwardRef } from 'react';

import styles from './styles/CopyCodeButton.module.css';

type CopyCodeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  'data-test-id'?: string;
  kind?: CopyToClipboardProps['kind'];
};

const CopyCodeButton = forwardRef<HTMLButtonElement, CopyCodeButtonProps>(
  ({ className, children, 'data-test-id': testId = 'copy-code-button', kind, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        data-test-id={testId}
        type="button"
        className={cx(styles['CopyCodeButton'], className, kind && styles[kind])}
        {...rest}
      >
        {children}
        {(kind === 'basic' || kind === 'minimal') && (
          <Icon
            name="copy-clipboard"
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
