import type { NavItemStatus } from './types';
import type { MouseEvent } from 'react';

import { Chip } from '@launchpad-ui/chip';
import { cx } from 'classix';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './styles/Nav.module.css';
import { titlecase } from './utils';

type NavItemProps = {
  to: string | { pathname: string; search: string };
  name: string;
  end?: boolean;
  onClick?(event: MouseEvent): void;
  status?: NavItemStatus;
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
      className={({ isActive }) =>
        cx('NavItem', styles.NavItem, isActive ? styles['is-active'] : '')
      }
      data-text={name}
      onClick={onClick}
      role={role}
      aria-selected={role === 'tab' ? selected : undefined}
    >
      {status ? (
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <span className={styles['NavItem-name']}>{name}</span>
          <Chip className={styles['NavItem-chip']} kind={status}>
            {titlecase(status)}
          </Chip>
        </div>
      ) : (
        <span className={styles['NavItem-name']}>{name}</span>
      )}
    </NavLink>
  );
};

export { NavItem };
export type { NavItemProps };
