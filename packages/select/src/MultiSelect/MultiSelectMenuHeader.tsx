import type { MultiSelectProps } from './MultiSelect';
import type { MultiSelectState } from './useMultiSelectState';

import { Button, ButtonGroup } from '@launchpad-ui/button';
import { useEffect, useRef } from 'react';

type MultiSelectMenuHeaderProps<T extends object> = Pick<
	MultiSelectProps<T>,
	'isClearable' | 'isSelectableAll'
> & {
	state: MultiSelectState<T>;
};

const MultiSelectMenuHeader = <T extends object>(props: MultiSelectMenuHeaderProps<T>) => {
	const { state, isClearable, isSelectableAll } = props;
	const refAllButton = useRef<HTMLInputElement>(null);

	const isAllSelection = state.selectionManager.isSelectAll;
	const isIndeterminateSelection = !isAllSelection && !state.selectionManager.isEmpty;
	const isMulti = state.selectionMode === 'multiple';
	const hasClearButton = isClearable && state.selectedItems;
	const hasHeader = isMulti && (hasClearButton || isSelectableAll);

	useEffect(() => {
		if (refAllButton.current) {
			refAllButton.current.indeterminate = isIndeterminateSelection;
		}
	}, [isIndeterminateSelection]);

	const handleClear = () => state.selectionManager.clearSelection();
	const handleSelectAll = () => state.selectionManager.toggleSelectAll();

	if (!hasHeader) return null;

	return (
		<div data-test-id='menu-header'>
			<ButtonGroup style={{ margin: '0.5rem 1rem' }}>
				{isSelectableAll && (
					<Button onClick={handleSelectAll} data-test-id='select-all-btn'>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<input
								type='checkbox'
								checked={isAllSelection}
								ref={refAllButton}
								readOnly
								tabIndex={-1}
							/>
							Select all
						</div>
					</Button>
				)}
				{hasClearButton && (
					<Button onClick={handleClear} data-test-id='clear-btn'>
						Clear
					</Button>
				)}
			</ButtonGroup>
		</div>
	);
};

export { MultiSelectMenuHeader };
export type { MultiSelectMenuHeaderProps };
