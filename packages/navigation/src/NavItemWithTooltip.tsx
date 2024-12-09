import type { Offset, PopoverPlacement } from '@launchpad-ui/popover';
import type { JSX, MouseEvent } from 'react';

import { Tooltip } from '@launchpad-ui/tooltip';

import { NavItem } from './NavItem';
import styles from './styles/Navigation.module.css';

type NavItemWithTooltipProps = {
	to: string;
	name: string;
	end?: boolean;
	tooltipContent?: string | JSX.Element;
	tooltipPlacement?: PopoverPlacement;
	tooltipOffset?: Offset;
	onClick?(event: MouseEvent): void;
	id?: string;
	role?: string;
	'aria-controls'?: string;
	'data-test-id'?: string;
};

const defaultContent = (
	<>
		Upgrade your plan to use this feature.
		<br />
		Click to learn more.
	</>
);

const NavItemWithTooltip = ({
	to,
	name,
	tooltipContent = defaultContent,
	onClick,
	tooltipPlacement = 'top',
	tooltipOffset,
	role,
	end,
	id,
	'aria-controls': ariaControls,
	'data-test-id': testId = 'nav-item-with-tooltip',
}: NavItemWithTooltipProps) => {
	const centeredContent = <div className={styles['NavItem-tooltip']}>{tooltipContent}</div>;
	return (
		<Tooltip
			content={centeredContent}
			placement={tooltipPlacement}
			offset={tooltipOffset}
			allowBoundaryElementOverflow
			targetClassName={styles['NavPopover-target']}
			data-test-id={testId}
		>
			<NavItem
				end={end}
				to={to}
				name={name}
				onClick={onClick}
				role={role}
				id={id}
				aria-controls={ariaControls}
			/>
		</Tooltip>
	);
};

export { NavItemWithTooltip };
export type { NavItemWithTooltipProps };
