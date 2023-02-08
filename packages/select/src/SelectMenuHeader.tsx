import type { SelectProps } from './Select';
import type { SelectState } from './useSelectState';

import { Button, ButtonGroup } from '@launchpad-ui/button';
import { useEffect, useRef } from 'react';

type SelectMenuHeaderProps<T extends object> = Pick<
  SelectProps<T>,
  'isClearable' | 'isSelectableAll'
> & {
  state: SelectState<T>;
};

const SelectMenuHeader = <T extends object>(props: SelectMenuHeaderProps<T>) => {
  const { state, isClearable, isSelectableAll } = props;
  const refAllButton = useRef<HTMLInputElement>(null);

  const isAllSelection = state.selectionManager.isSelectAll;
  const isIndeterminateSelection = !isAllSelection && !state.selectionManager.isEmpty;
  const isMulti = state.selectionMode === 'multiple';
  const hasClearButton = isClearable && state.selectedItems;
  const hasSelectAllButton = isSelectableAll && isMulti;
  const hasHeader = hasClearButton || hasSelectAllButton;

  useEffect(() => {
    if (refAllButton.current) {
      refAllButton.current.indeterminate = isIndeterminateSelection;
    }
  }, [isIndeterminateSelection]);

  const handleClear = () => state.selectionManager.clearSelection();
  const handleSelectAll = () => state.selectionManager.toggleSelectAll();

  if (!hasHeader) return null;

  return (
    <ButtonGroup style={{ margin: '0.8rem 1.6rem' }}>
      {hasSelectAllButton && (
        <Button onClick={handleSelectAll}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={isAllSelection}
              ref={refAllButton}
              readOnly
              tabIndex={-1}
            />
            Select all
          </div>
        </Button>
      )}
      {hasClearButton && <Button onClick={handleClear}>Clear</Button>}
    </ButtonGroup>
  );
};

export { SelectMenuHeader };
export type { SelectMenuHeaderProps };
