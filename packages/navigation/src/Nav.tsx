import type { Ref } from 'react';

import cx from 'clsx';
import { forwardRef } from 'react';

import './styles/Nav.css';
import { NavKind } from './types';

type NavBaseProps = {
  kind?: NavKind;
  className?: string;
  children?: React.ReactNode;
  role?: string;
  innerRef?: Ref<HTMLDivElement>;
};

const NavBase = ({ kind = NavKind.PRIMARY, className, children, role, innerRef }: NavBaseProps) => {
  return (
    <nav
      aria-label={`${kind} navigation`}
      className={cx('Nav', `Nav--${kind}`, className)}
      role={role}
      ref={innerRef}
    >
      {children}
    </nav>
  );
};

type NavProps = Omit<NavBaseProps, 'innerRef'>;

const Nav = forwardRef<HTMLDivElement, NavBaseProps>((props, ref) => (
  <NavBase {...props} innerRef={ref} />
));

Nav.displayName = 'Nav';

export { Nav };
export type { NavProps };
