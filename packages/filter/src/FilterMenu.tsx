import type { ChangeEvent, ReactNode } from 'react';

import { Button } from '@launchpad-ui/button';
import { Icon } from '@launchpad-ui/icons';
import type { MenuProps } from '@launchpad-ui/menu';
import { Menu, MenuDivider, MenuItem, MenuSearch } from '@launchpad-ui/menu';

import styles from './styles/Filter.module.css';

// `FilterOption` is never parameterized by call sites in this codebase (always used bare as
// `FilterOption[]`), yet real usages populate `value` with heterogeneous primitive types
// (strings in some tests/stories, numbers in others) and downstream code reads `value` both
// as a React `Key` (`key={option.value}`) and via string methods (`option.value.includes(...)`)
// without narrowing first. `unknown` and `string` were tried and both broke real call sites
// (see git history on this line) because the actual runtime values aren't homogeneous. `any` is
// the honest type for "whatever primitive the consumer's data uses" until FilterMenu is
// refactored to require callers to parameterize `FilterOption<T>` explicitly.
// oxlint-disable-next-line typescript/no-explicit-any -- open generic default; see comment above for why unknown/string don't work here
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
	const filterOptions = isLoading ? [{ name: 'loading...', value: 'loading...', isDisabled: true }] : options;

	return (
		<>
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
			<Menu enableVirtualization={enableVirtualization} size={size} data-test-id={testId} onSelect={onSelect}>
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
							tooltip={option.isDisabled && disabledOptionTooltip ? disabledOptionTooltip : undefined}
							tooltipPlacement="right"
						>
							{option.name}
						</MenuItem>
					);
				})}
			</Menu>
		</>
	);
};

export { FilterMenu };
export type { FilterOption, FilterMenuProps };
