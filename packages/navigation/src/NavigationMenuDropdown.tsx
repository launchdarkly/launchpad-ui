import type { CollectionBase } from '@react-types/shared';
import type { NavProps } from './Nav';

import { Chip } from '@launchpad-ui/chip';
import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Icon } from '@launchpad-ui/icons';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { useListState } from '@react-stately/list';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router';

import styles from './styles/Navigation.module.css';
import { titlecase } from './utils';

type NavigationMenuDropdownProps<T extends object> = CollectionBase<T> & {
	kind: NavProps['kind'];
	title: string;
};

const NavigationMenuDropdown = <T extends object>(props: NavigationMenuDropdownProps<T>) => {
	const state = useListState(props);
	const { pathname } = useLocation();
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [buttonWidth, setButtonWidth] = useState<string | undefined>(undefined);

	// Adapted from https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L506-L510
	// ...recreate the `isActive` behavior of a NavLink to map the current route to the selected option
	const [selectedItem] = useState<string>(() => {
		return (
			[...state.collection].find(({ props }) => {
				return (
					pathname === props.to ||
					(pathname.startsWith(props.to) && pathname.charAt(props.to.length) === '/')
				);
			})?.props.name || props.title
		);
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: ignore
	useEffect(() => {
		if (!buttonRef.current) {
			return;
		}

		const rect = buttonRef.current.getBoundingClientRect();
		setButtonWidth(`${rect.width}px`);
	}, [selectedItem]);

	return (
		<nav aria-label={`${props.kind} navigation`}>
			<Dropdown placement="bottom-start">
				<DropdownButton data-test-id="navigation-menu-button" ref={buttonRef}>
					{selectedItem}
				</DropdownButton>
				<Menu menuItemClassName={styles.NavigationMenuItem}>
					{[...state.collection].map((item) => (
						<MenuItem
							key={item.key}
							item={item.key}
							component={NavLink}
							to={item.props.to}
							onClick={(e: unknown) => {
								item.props.onClick?.(e, {
									collapsed: true,
								});
							}}
							icon={item.props.name === selectedItem ? <Icon name="check" /> : undefined}
						>
							<div
								style={{
									display: 'flex',
									gap: 'var(--lp-spacing-300)',
									alignItems: 'center',
									minWidth: buttonWidth,
								}}
							>
								<div>{item.props.name}</div>
								{item.props.status ? (
									<div>
										<Chip kind={item.props.status}>{titlecase(item.props.status)}</Chip>
									</div>
								) : undefined}
							</div>
						</MenuItem>
					))}
				</Menu>
			</Dropdown>
		</nav>
	);
};

export { NavigationMenuDropdown };
export type { NavigationMenuDropdownProps };
