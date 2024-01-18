import type { ButtonGroupVariants } from './styles/ButtonGroup.css';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { ButtonContext } from 'react-aria-components';

import { variants } from './styles/ButtonGroup.css';

type ButtonGroupProps = ComponentPropsWithRef<'div'> &
  ButtonGroupVariants & {
    isDisabled?: boolean;
  };

const ButtonGroup = forwardRef(
  (
    { children, className, spacing = 'basic', isDisabled, ...props }: ButtonGroupProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div {...props} ref={ref} className={clsx(variants({ spacing }), className)}>
        <ButtonContext.Provider value={{ isDisabled }}>{children}</ButtonContext.Provider>
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };
