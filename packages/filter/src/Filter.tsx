import type { FilterOption } from './FilterMenu';
import type { MenuProps } from '@launchpad-ui/menu';
import type { ReactNode, SyntheticEvent } from 'react';

import { Dropdown } from '@launchpad-ui/dropdown';
import cx from 'clsx';

import { FilterButton } from './FilterButton';
import { FilterMenu } from './FilterMenu';

const SEARCH_INPUT_THRESHOLD = 4;

type FilterProps = Pick<MenuProps<string>, 'size' | 'enableVirtualization'> & {
  searchValue?: string;
  onSearchChange?(event: React.ChangeEvent<HTMLInputElement>): void;
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
  testId?: string;
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
  testId,
  size,
  enableVirtualization,
  ...props
}: FilterProps) => {
  const enableSearch =
    onSearchChange && (!!searchValue || options.length > SEARCH_INPUT_THRESHOLD || !isEmpty);

  const dropdownClasses = cx('Filter-target', className);

  const handleClear = (event: SyntheticEvent) => {
    event.preventDefault();
    onClear?.();
  };

  return (
    <Dropdown targetClassName={dropdownClasses} {...props}>
      <FilterButton
        isClearable={isClearable}
        onClear={handleClear}
        name={name}
        hideName={hideName}
        isSelected={isSelected}
        onClickFilterButton={onClickFilterButton}
        testId={testId}
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
