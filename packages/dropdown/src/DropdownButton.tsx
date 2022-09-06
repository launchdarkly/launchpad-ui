import type { ButtonProps } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';
import { ExpandMore, IconSize } from '@launchpad-ui/icons';
import { forwardRef } from 'react';

type DropdownButtonProps = ButtonProps & {
  hideCaret?: boolean;
};

const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>((props, ref) => {
  const { children, hideCaret, ...rest } = props;

  return (
    <Button {...rest} ref={ref}>
      {children} {!hideCaret && <ExpandMore size={IconSize.SMALL} />}
    </Button>
  );
});

DropdownButton.displayName = 'DropdownButton';

export { DropdownButton };
export type { DropdownButtonProps };
