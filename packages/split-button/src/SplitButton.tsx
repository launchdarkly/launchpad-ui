import type { ButtonProps } from '@launchpad-ui/button';
import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import { SplitButtonContext } from './context';
import './styles/SplitButton.css';

type SplitButtonProps = HTMLAttributes<HTMLDivElement> & {
  kind?: Extract<ButtonProps['kind'], 'primary' | 'default'>;
  size?: ButtonProps['size'];
  disabled?: boolean;
};

const SplitButton = ({ disabled, kind, size, children, className, ...rest }: SplitButtonProps) => {
  return (
    <SplitButtonContext.Provider value={{ disabled: !!disabled, kind, size }}>
      <div {...rest} className={cx('SplitButton', className)}>
        {children}
      </div>
    </SplitButtonContext.Provider>
  );
};

SplitButton.displayName = 'SplitButton';

export { SplitButton };
export type { SplitButtonProps };
