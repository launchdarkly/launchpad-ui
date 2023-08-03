import type { AriaButtonProps } from '@react-types/button';

import { useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
import { forwardRef } from 'react';

type ButtonProps = AriaButtonProps & {
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    const buttonRef = useObjectRef(ref);
    const { buttonProps } = useButton(props, buttonRef);

    return (
      <button {...buttonProps} ref={buttonRef} className={className}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
