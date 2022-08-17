import type { DropdownButtonProps } from '@launchpad-ui/dropdown';

import { DropdownButton } from '@launchpad-ui/dropdown';
import cx from 'clsx';
import { forwardRef, useContext, useMemo } from 'react';

import { SplitButtonContext } from './context';
import './styles/SplitButton.css';

type SplitButtonDropdownButtonProps = Omit<DropdownButtonProps, 'kind' | 'size'>;

const SplitButtonDropdownButton = forwardRef<HTMLButtonElement, SplitButtonDropdownButtonProps>(
  (props, ref) => {
    const { disabled, children, testId, className, 'aria-label': ariaLabel, ...rest } = props;
    const { disabled: parentDisabled, kind, size } = useContext(SplitButtonContext);

    const isDisabled = parentDisabled || disabled;

    const label = useMemo(() => {
      let value = 'More options';

      if (isDisabled) {
        value = 'These options are unavailable';
      } else if (ariaLabel) {
        value = ariaLabel;
      }

      return value;
    }, [ariaLabel, isDisabled]);

    return (
      <DropdownButton
        {...rest}
        ref={ref}
        className={cx('SplitButton-drop', className)}
        kind={kind}
        disabled={isDisabled}
        size={size}
        aria-label={label}
      />
    );
  }
);

SplitButtonDropdownButton.displayName = 'SplitButtonDropdownButton';

export { SplitButtonDropdownButton };
export type { SplitButtonDropdownButtonProps };
