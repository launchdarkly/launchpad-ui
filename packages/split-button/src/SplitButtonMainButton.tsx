import type { ButtonProps, PolymorphicButtonProps } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';
import { cx } from 'classix';
import { forwardRef, useContext, useMemo } from 'react';

import { SplitButtonContext } from './context';
import './styles/SplitButton.css';

type BaseProps = Omit<ButtonProps, 'kind' | 'size'> & {
  icon?: React.ReactElement<{ size?: string; key: string; 'aria-hidden': boolean }>;
};

type SplitButtonMainButtonProps = PolymorphicButtonProps<BaseProps>;

const SplitButtonMainButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SplitButtonMainButtonProps
>((props, ref) => {
  const { disabled, children, className, 'aria-label': ariaLabel } = props;
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

  const sharedProps = {
    disabled: isDisabled,
    'aria-label': label,
    kind: kind,
    size: size,
    className: cx('SplitButton-main', className),
  };

  return (
    <Button {...props} {...sharedProps} ref={ref}>
      {children}
    </Button>
  );
});

SplitButtonMainButton.displayName = 'SplitButtonMainButton';

export { SplitButtonMainButton };
export type { SplitButtonMainButtonProps };
