import type { ButtonGroupProps } from '@launchpad-ui/button';

import { ButtonGroup } from '@launchpad-ui/button';
import cx from 'clsx';

const AlertActions = ({ children, className, ...rest }: ButtonGroupProps) => {
  const classes = cx('Alert-actions', className);

  return (
    <ButtonGroup className={classes} {...rest}>
      {children}
    </ButtonGroup>
  );
};
export { AlertActions };
