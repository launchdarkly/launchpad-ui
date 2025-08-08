import type { MenuProps } from '@launchpad-ui/menu';
import type { ChangeEvent, ReactNode, SyntheticEvent } from 'react';
import type { FilterOption } from './FilterMenu';

import { addLaunchPadAttribution } from '@launchpad-ui/attribution';
import { Dropdown } from '@launchpad-ui/dropdown';
import { cx } from 'classix';

import { FilterButton } from './FilterButton';
import { FilterMenu } from './FilterMenu';
import styles from './styles/Filter.module.css';

const SEARCH_INPUT_THRESHOLD = 4;

type FilterProps = Pick<MenuProps<string>, 'size' | 'enableVirtualization'> & {
	searchValue?: string;
	onSearchChange?(event: ChangeEvent<HTMLInputElement>): void;
	searchPlaceholder?: string;
	searchAriaLabel?: string;
	name: ReactNode;
	hideName?: boolean;
	description: ReactNode;
	options: FilterOption[];
	isClearable?: boolean;
	onClear?(): void;
	className?: string;
	onStateChange?({ isOpen }: { isOpen?: boolean }): void;
	isSelected?: boolean;
	searchId?: string;
	onSelect?(item: FilterOption): void;
	isEmpty?: boolean;
	isLoading?: boolean;
	disabled?: boolean;
	onClickFilterButton?(): void;
	disabledOptionTooltip?: string;
	'data-test-id'?: string;
	triggerTestId?: string;
	clearAriaLabel?: string;
};

/**
 * @deprecated use `Menu` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-menu--docs
 */
const Filter = ({
	searchValue,
	onSearchChange,
	searchPlaceholder,
	searchAriaLabel,
	name,
	hideName,
	description,
	options,
	isClearable,
	onClear,
	isSelected,
	className,
	isEmpty,
	searchId,
	isLoading,
	onClickFilterButton,
	disabledOptionTooltip,
	'data-test-id': testId = 'filter',
	size,
	disabled,
	enableVirtualization,
	clearAriaLabel,
	...props
}: FilterProps) => {
	const enableSearch =
		onSearchChange && (!!searchValue || options.length > SEARCH_INPUT_THRESHOLD || !isEmpty);

	const dropdownClasses = cx(styles.filter, className);

	const handleClear = (event: SyntheticEvent) => {
		event.preventDefault();
		onClear?.();
	};

	return (
		<Dropdown
			{...addLaunchPadAttribution('Filter')}
			targetTestId={testId}
			disabled={disabled}
			targetClassName={dropdownClasses}
			{...props}
		>
			<FilterButton
				isClearable={isClearable}
				onClear={handleClear}
				name={name}
				hideName={hideName}
				disabled={disabled}
				isSelected={isSelected}
				onClickFilterButton={onClickFilterButton}
				ariaLabel={clearAriaLabel}
			>
				{description}
			</FilterButton>
			<FilterMenu
				options={options}
				searchId={searchId}
				searchValue={searchValue}
				searchPlaceholder={searchPlaceholder}
				searchAriaLabel={searchAriaLabel}
				enableSearch={enableSearch}
				onSearchChange={onSearchChange}
				isLoading={isLoading}
				disabledOptionTooltip={disabledOptionTooltip}
				size={size}
				enableVirtualization={enableVirtualization}
			/>
		</Dropdown>
	);
};

export { Filter };
export type { FilterProps };
