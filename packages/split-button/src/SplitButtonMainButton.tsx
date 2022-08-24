import type { ButtonProps } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';
import { cx } from 'classix';
import { forwardRef, useContext, useMemo } from 'react';

import { SplitButtonContext } from './context';
import './styles/SplitButton.css';

type SplitButtonMainButtonProps = Omit<ButtonProps, 'kind' | 'size'> & {
  icon?: React.ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
};

const SplitButtonMainButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SplitButtonMainButtonProps
>((props, ref) => {
  const { disabled, children, className, 'aria-label': ariaLabel, ...rest } = props;
  const { disabled: parentDisabled, kind, size } = useContext(SplitButtonContext);

  const isDisabled = parentDisabled || disabled;

  const label = useMemo(() => {
    let value;

    if (isDisabled) {
      value = 'These options are unavailable';
    } else if (ariaLabel) {
      value = ariaLabel;
    } else {
      value = 'More options';
    }

    return value;
  }, [ariaLabel, isDisabled]);

  return (
    <Button
      {...rest}
      disabled={isDisabled}
      aria-label={label}
      kind={kind}
      size={size}
      className={cx('SplitButton-main', className)}
      ref={ref}
    >
      {children}
    </Button>
  );
});

SplitButtonMainButton.displayName = 'SplitButtonMainButton';

export { SplitButtonMainButton };
export type { SplitButtonMainButtonProps };
