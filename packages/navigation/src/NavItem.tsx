import type { LozengeKind } from '@launchpad-ui/lozenge';

import { NavLink, useLocation } from 'react-router-dom';

import { NavBarLozenge } from './NavBarLozenge';
import './styles/Nav.css';

type NavItemProps = {
  to: string | { pathname: string; search: string };
  name: string;
  end?: boolean;
  onClick?(event: React.MouseEvent): void;
  activeClassName?: string;
  status?: LozengeKind;
  id?: string;
  role?: string;
};

const NavItem = ({ to, name, onClick, status, role, end, ...other }: NavItemProps) => {
  const { pathname } = useLocation();
  const selected = pathname === to ? 'true' : 'false';

  return (
    <NavLink
      {...other}
      end={end}
      to={to}
      className={({ isActive }) => `NavItem ${isActive ? 'is-active' : ''}`}
      data-text={name}
      onClick={onClick}
      role={role}
      aria-selected={role === 'tab' ? selected : undefined}
    >
      {status ? (
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <span className="NavItem-name">{name}</span>
          <NavBarLozenge kind={status} />
        </div>
      ) : (
        <span className="NavItem-name">{name}</span>
      )}
    </NavLink>
  );
};

export { NavItem };
export type { NavItemProps };
