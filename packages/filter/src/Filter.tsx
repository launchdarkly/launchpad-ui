import type { FilterOption } from './FilterMenu';
import type { MenuProps } from '@launchpad-ui/menu';
import type { ChangeEvent, ReactNode, SyntheticEvent } from 'react';

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
  onSelect?(item: FilterOption): void;
  isEmpty?: boolean;
  isLoading?: boolean;
  onClickFilterButton?(): void;
  disabledOptionTooltip?: string;
  'data-test-id'?: string;
  triggerTestId?: string;
};

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
  isLoading,
  onClickFilterButton,
  disabledOptionTooltip,
  'data-test-id': testId = 'filter',
  size,
  enableVirtualization,
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
    <Dropdown data-test-id={testId} targetClassName={dropdownClasses} {...props}>
      <FilterButton
        isClearable={isClearable}
        onClear={handleClear}
        name={name}
        hideName={hideName}
        isSelected={isSelected}
        onClickFilterButton={onClickFilterButton}
      >
        {description}
      </FilterButton>
      <FilterMenu
        options={options}
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
