import type { DropdownButtonProps } from '@launchpad-ui/dropdown';

import { DropdownButton } from '@launchpad-ui/dropdown';
import { cx } from 'classix';
import { forwardRef, useContext, useMemo } from 'react';

import { SplitButtonContext } from './context';
import styles from './styles/SplitButton.module.css';

type SplitButtonDropdownButtonProps = Omit<DropdownButtonProps, 'kind' | 'size' | 'children'>;

const SplitButtonDropdownButton = forwardRef<HTMLButtonElement, SplitButtonDropdownButtonProps>(
  (props, ref) => {
    const {
      disabled,
      className,
      'aria-label': ariaLabel,
      'data-test-id': testId = 'split-button-dropdown-button',
      ...rest
    } = props;
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
        className={cx(styles.SplitButtonDrop, className)}
        kind={kind}
        disabled={isDisabled}
        size={size}
        data-test-id={testId}
        aria-label={label}
      />
    );
  }
);

SplitButtonDropdownButton.displayName = 'SplitButtonDropdownButton';

export { SplitButtonDropdownButton };
export type { SplitButtonDropdownButtonProps };
