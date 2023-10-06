import type { ButtonProps } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';
import { cx } from 'classix';
import { forwardRef, useContext, useMemo } from 'react';

import { SplitButtonContext } from './context';
import styles from './styles/SplitButton.module.css';

type SplitButtonMainButtonProps = Omit<ButtonProps, 'kind' | 'size'>;

const SplitButtonMainButton = forwardRef<HTMLButtonElement, SplitButtonMainButtonProps>(
  (props, ref) => {
    const {
      disabled,
      children,
      className,
      'aria-label': ariaLabel,
      'data-test-id': testId = 'split-button-main-button',
      ...rest
    } = props;
    const { disabled: parentDisabled, kind, size } = useContext(SplitButtonContext);

    const isDisabled = parentDisabled || disabled;

    const classes = cx(styles.SplitButtonMain, className);

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
        className={classes}
        disabled={isDisabled}
        kind={kind}
        size={size}
        aria-label={label}
        ref={ref}
        data-test-id={testId}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

SplitButtonMainButton.displayName = 'SplitButtonMainButton';

export { SplitButtonMainButton };
export type { SplitButtonMainButtonProps };
