import type { MenuProps } from '@launchpad-ui/menu';
import type { ReactNode } from 'react';

import { Button, ButtonKind } from '@launchpad-ui/button';
import { Check } from '@launchpad-ui/icons';
import { Menu, MenuDivider, MenuItem, MenuSearch } from '@launchpad-ui/menu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

type FilterMenuProps = Pick<MenuProps<string>, 'enableVirtualization' | 'size'> & {
  options: FilterOption[];
  onClearFilter?(): void;
  enableSearch?: boolean;
  searchValue?: string;
  searchPlaceholder?: string;
  searchAriaLabel?: string;
  onSearchChange?(event: React.ChangeEvent<HTMLInputElement>): void;
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
  onSelect,
  onSearchChange,
  isLoading = false,
  disabledOptionTooltip,
  enableVirtualization,
  size,
}: FilterMenuProps) => {
  const filterOptions = isLoading
    ? [{ name: 'loading...', value: 'loading...', isDisabled: true }]
    : options;

  return (
    <>
      {onClearFilter && (
        <Button tabIndex={0} className="Menu-clear" onClick={onClearFilter} kind={ButtonKind.LINK}>
          CLEAR FILTER
        </Button>
      )}
      <Menu enableVirtualization={enableVirtualization} size={size} onSelect={onSelect}>
        {enableSearch && (
          <MenuSearch
            value={searchValue}
            placeholder={searchPlaceholder}
            onChange={onSearchChange}
            ariaLabel={searchAriaLabel}
          />
        )}
        {filterOptions.map((option, index) => {
          if (option.isDivider) {
            return <MenuDivider key={`divider-${index}`} />;
          }
          return (
            <MenuItem
              item={option}
              disabled={option.isDisabled}
              icon={option.isChecked ? Check : null}
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
    </>
  );
};

export { FilterMenu };
export type { FilterOption, FilterMenuProps };
