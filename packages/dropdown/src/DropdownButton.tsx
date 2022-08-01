import type { ButtonKind, ButtonSize } from '@launchpad-ui/button';

import { Button } from '@launchpad-ui/button';
import { ExpandMore, IconSize } from '@launchpad-ui/icons';
import { forwardRef } from 'react';

type DropdownButtonProps = {
  hideCaret?: boolean;
  kind?: ButtonKind;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?(v: React.MouseEvent): void;
  testId?: string;
};

const DropdownButton = forwardRef<React.ElementRef<typeof Button>, DropdownButtonProps>(
  (props, ref) => {
    const { children, hideCaret, ...rest } = props;

    return (
      <Button {...rest} ref={ref}>
        {children} {!hideCaret && <ExpandMore size={IconSize.SMALL} />}
      </Button>
    );
  }
);

DropdownButton.displayName = 'DropdownButton';

export { DropdownButton };
export type { DropdownButtonProps };
