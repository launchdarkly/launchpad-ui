import type { ButtonProps } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';
import { ExpandMore } from '@launchpad-ui/icons';
import { forwardRef } from 'react';

type DropdownButtonProps = ButtonProps & {
  hideCaret?: boolean;
};

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const { children, hideCaret, 'data-test-id': testId = 'dropdown-button', ...rest } = props;

  return (
    <Button {...rest} data-test-id={testId} ref={ref}>
      {children} {!hideCaret && <ExpandMore size="small" />}
    </Button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export { DropdownButton };
export type { DropdownButtonProps };
