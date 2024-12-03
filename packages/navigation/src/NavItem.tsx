import type { ChipProps } from '@launchpad-ui/chip';
import type { MouseEvent } from 'react';

import { Chip } from '@launchpad-ui/chip';
import { cx } from 'classix';
import { NavLink, useLocation } from 'react-router';

import styles from './styles/Navigation.module.css';
import { titlecase } from './utils';

type NavItemProps = {
	to: string | { pathname: string; search: string };
	name: string;
	end?: boolean;
	onClick?(event: MouseEvent): void;
	activeClassName?: string;
	status?: ChipProps['kind'];
	id?: string;
	role?: string;
	'data-test-id'?: string;
};

const NavItem = ({
	to,
	name,
	onClick,
	status,
	role,
	end,
	'data-test-id': testId = 'nav-item',
	...other
}: NavItemProps) => {
	const { pathname } = useLocation();
	const selected = pathname === to ? 'true' : 'false';

	return (
		<NavLink
			{...other}
			end={end}
			to={to}
			className={({ isActive }) => cx(styles.NavItem, isActive && styles['is-active'])}
			data-text={name}
			onClick={onClick}
			role={role}
			data-nav-target="true" // used by Navigation to check rendered width
			data-test-id={testId}
			aria-selected={role === 'tab' ? selected : undefined}
		>
			{status ? (
				<div style={{ display: 'flex', alignItems: 'flex-end' }}>
					<span className={styles['NavItem-name']}>
						{name}
						<Chip
							className={styles['NavItem-chip']}
							size="tiny"
							data-test-id="nav-item-chip"
							kind={status}
						>
							{titlecase(status)}
						</Chip>
					</span>
				</div>
			) : (
				<span className={styles['NavItem-name']}>{name}</span>
			)}
		</NavLink>
	);
};

export { NavItem };
export type { NavItemProps };
