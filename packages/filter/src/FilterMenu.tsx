import type { MenuProps } from '@launchpad-ui/menu';
import type { ChangeEvent, ReactNode } from 'react';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Button } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import { Menu, MenuDivider, MenuItem, MenuSearch } from '@launchpad-ui/menu';

import styles from './styles/Filter.module.css';

// biome-ignore lint/suspicious/noExplicitAny: ignore
type FilterOption<T = any> = {
	name?: ReactNode;
	isDisabled?: boolean;
	isDivider?: boolean;
	isChecked?: boolean;
	value: T | null;
	projKey?: string;
	nested?: boolean;
	groupHeader?: boolean;
};

type FilterMenuProps = Pick<MenuProps<string>, 'enableVirtualization' | 'size' | 'data-test-id'> & {
	options: FilterOption[];
	onClearFilter?(): void;
	enableSearch?: boolean;
	searchValue?: string;
	searchId?: string;
	searchPlaceholder?: string;
	searchAriaLabel?: string;
	onSearchChange?(event: ChangeEvent<HTMLInputElement>): void;
	onSelect?(): void;
	isLoading?: boolean;
	disabledOptionTooltip?: string;
};

const FilterMenu = ({
	options,
	onClearFilter,
	enableSearch,
	searchValue,
	searchPlaceholder,
	searchAriaLabel,
	searchId,
	onSelect,
	onSearchChange,
	isLoading = false,
	disabledOptionTooltip,
	enableVirtualization,
	size,
	'data-test-id': testId = 'filter-menu',
}: FilterMenuProps) => {
	const filterOptions = isLoading
		? [{ name: 'loading...', value: 'loading...', isDisabled: true }]
		: options;

	return (
		<div {...addLaunchPadAttribution('FilterMenu')}>
			{onClearFilter && (
				<Button
					tabIndex={0}
					className={styles.filterClearButton}
					onClick={onClearFilter}
					kind="link"
					data-test-id="clear-filter-button"
				>
					CLEAR FILTER
				</Button>
			)}
			<Menu
				enableVirtualization={enableVirtualization}
				size={size}
				data-test-id={testId}
				onSelect={onSelect}
			>
				{enableSearch && (
					<MenuSearch
						value={searchValue}
						id={searchId}
						placeholder={searchPlaceholder}
						onChange={onSearchChange}
						ariaLabel={searchAriaLabel}
					/>
				)}
				{filterOptions.map((option, index) => {
					if (option.isDivider) {
						// biome-ignore lint/suspicious/noArrayIndexKey: ignore
						return <MenuDivider key={`divider-${index}`} />;
					}
					return (
						<MenuItem
							item={option}
							disabled={option.isDisabled}
							icon={option.isChecked ? <Icon name="check" /> : undefined}
							key={option.value}
							role="menuitemradio"
							aria-checked={option.isChecked ? 'true' : undefined}
							nested={option.nested}
							groupHeader={option.groupHeader}
							tooltip={
								option.isDisabled && disabledOptionTooltip ? disabledOptionTooltip : undefined
							}
							tooltipPlacement="right"
						>
							{option.name}
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
};

export { FilterMenu };
export type { FilterOption, FilterMenuProps };
