import type { FilterOption } from './FilterMenu';
import type { ReactNode } from 'react';

import { Dropdown } from '@launchpad-ui/dropdown';
import cx from 'clsx';

import { AppliedFilterButton } from './AppliedFilterButton';
import { FilterMenu } from './FilterMenu';

const SEARCH_INPUT_THRESHOLD = 4;

type AppliedFilterProps = {
  searchValue?: string;
  onSearchChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onClearFilter?(): void;
  searchPlaceholder?: string;
  name?: ReactNode;
  description: ReactNode;
  options: FilterOption[];
  className?: string;
  onStateChange?({ isOpen }: { isOpen?: boolean }): void;
  isSelected?: boolean;
  onSelect?(item: FilterOption): void;
  isEmpty?: boolean;
  isLoading?: boolean;
  onClickFilterButton?(): void;
  searchAriaLabel?: string;
};

const AppliedFilter = ({
  searchValue,
  onSearchChange,
  searchPlaceholder,
  name,
  description,
  options,
  className,
  isEmpty,
  isLoading,
  onClickFilterButton,
  onClearFilter,
  searchAriaLabel,
  ...props
}: AppliedFilterProps) => {
  const enableSearch =
    onSearchChange && (!!searchValue || options.length > SEARCH_INPUT_THRESHOLD || !isEmpty);

  const dropdownClasses = cx('Filter-target', className);
  return (
    <Dropdown
      targetClassName={dropdownClasses}
      placement="bottom-start"
      showArrow={false}
      {...props}
    >
      <AppliedFilterButton name={name} onClickFilterButton={onClickFilterButton}>
        {description}
      </AppliedFilterButton>

      <FilterMenu
        options={options}
        searchValue={searchValue}
        searchPlaceholder={searchPlaceholder}
        enableSearch={enableSearch}
        onSearchChange={onSearchChange}
        onClearFilter={onClearFilter}
        isLoading={isLoading}
        searchAriaLabel={searchAriaLabel}
      />
    </Dropdown>
  );
};

export type { AppliedFilterProps };
export { AppliedFilter };
