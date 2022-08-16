import type { ChipKind } from '@launchpad-ui/chip';

import { NavLink, useLocation } from 'react-router-dom';

import { NavBarChip } from './NavBarChip';
import './styles/Nav.css';

type NavItemProps = {
  to: string | { pathname: string; search: string };
  name: string;
  end?: boolean;
  onClick?(event: React.MouseEvent): void;
  activeClassName?: string;
  status?: ChipKind;
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
          <NavBarChip kind={status} />
        </div>
      ) : (
        <span className="NavItem-name">{name}</span>
      )}
    </NavLink>
  );
};

export { NavItem };
export type { NavItemProps };
