import type { MenuProps } from './Menu';
import type { ComponentPropsWithRef } from 'react';

import { cx } from 'classix';
import { forwardRef } from 'react';

import './styles/Menu.css';

type MenuBaseProps = ComponentPropsWithRef<'div'> & {
  isVirtual?: boolean;
  size?: MenuProps<string>['size'];
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
