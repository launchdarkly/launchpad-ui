import type { MenuSize } from './types';

import { cx } from 'classix';
import { forwardRef } from 'react';

import './styles/Menu.css';

type MenuBaseProps = React.ComponentPropsWithRef<'div'> & {
  isVirtual?: boolean;
  size?: MenuSize;
};

const MenuBase = forwardRef<HTMLDivElement, MenuBaseProps>(
  ({ children, size, isVirtual, ...props }, ref) => {
    const classes = cx('Menu', isVirtual && 'Menu--isVirtual', size && `MenuSize--${size}`);

    return (
      <div {...props} role="menu" className={classes} ref={ref}>
        {children}
      </div>
    );
  }
);

MenuBase.displayName = 'MenuBase';

export { MenuBase };
export type { MenuBaseProps };
