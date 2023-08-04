import type { MultiSelectState } from './MultiSelect';
import type { SingleSelectState } from './SingleSelect';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ComponentProps, RefObject } from 'react';

import { Icon } from '@launchpad-ui/icons';
import { ListBox } from '@launchpad-ui/primitives';
import { getItemId } from '@react-aria/listbox';
import { useTextField } from '@react-aria/textfield';
import { useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import styles from './styles/Select.module.css';

type SelectListBoxProps<T extends object> = AriaListBoxOptions<T> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  filterInputRef?: RefObject<HTMLInputElement>;
  state: SingleSelectState<T> | MultiSelectState<T>;
  filterInputProps: ComponentProps<'input'>;
  hasFilter?: boolean;
};

const SelectListBox = <T extends object>(props: SelectListBoxProps<T>) => {
  const { state, hasFilter, listBoxRef, filterInputRef, ...rest } = props;

  const filterRef = useObjectRef<HTMLInputElement>(filterInputRef);

  const { inputProps: filterInputProps, labelProps: filterLabelProps } = useTextField(
    {
      autoFocus: true,
      onChange: state.setFilterValue,
      onKeyDown: props.filterInputProps.onKeyDown,
      'aria-label': 'Search options',
      label: 'Search options',
      value: state.filterValue,
    },
    filterRef
  );

  const focusedItem =
    state.selectionManager.focusedKey != null
      ? state.collection.getItem(state.selectionManager.focusedKey)
      : undefined;

  return (
    <>
      {hasFilter && (
        <div data-test-id="search-filter" className={styles.search}>
          <Icon name="search" size="medium" className={styles.searchIcon} />
          <VisuallyHidden>
            <label id={filterLabelProps.id} htmlFor={filterInputProps.id}>
              Search options
            </label>
          </VisuallyHidden>
          <input
            {...filterInputProps}
            aria-controls={rest.id}
            role="combobox"
            placeholder="Search"
            aria-expanded
            aria-activedescendant={focusedItem ? getItemId(state, focusedItem.key) : undefined}
            ref={filterInputRef}
          />
        </div>
      )}

      <ListBox {...rest} ref={listBoxRef} state={state} />
    </>
  );
};

export { SelectListBox };
