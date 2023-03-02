/* eslint-disable @typescript-eslint/no-use-before-define */
import type { MultiSelectState } from './MultiSelect';
import type { SingleSelectState } from './SingleSelect';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';
import type { InputHTMLAttributes, RefObject } from 'react';

import { Search } from '@launchpad-ui/icons';
import { getItemId, useListBox, useListBoxSection, useOption } from '@react-aria/listbox';
import { useTextField } from '@react-aria/textfield';
import { useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Select.module.css';

type SelectListBoxProps<T extends object> = AriaListBoxOptions<T> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  filterInputRef?: RefObject<HTMLInputElement>;
  state: SingleSelectState<T> | MultiSelectState<T>;
  filterInputProps: InputHTMLAttributes<HTMLInputElement>;
  hasFilter?: boolean;
};

type SelectListBoxSectionProps<T extends object> = {
  section: Node<T>;
  state: ListState<T>;
};

type SelectListBoxOptionProps<T extends object> = {
  item: Node<T>;
  state: ListState<T>;
};

const SelectListBox = <T extends object>(props: SelectListBoxProps<T>) => {
  const { state, hasFilter } = props;

  const listBoxRef = useObjectRef<HTMLUListElement>(props.listBoxRef);

  const filterInputRef = useObjectRef<HTMLInputElement>(props.filterInputRef);

  const { listBoxProps } = useListBox(props, state, listBoxRef);

  const { inputProps: filterInputProps, labelProps: filterLabelProps } = useTextField(
    {
      autoFocus: true,
      onChange: state.setFilterValue,
      onKeyDown: props.filterInputProps.onKeyDown,
      'aria-label': 'Search options',
      label: 'Search options',
      value: state.filterValue,
    },
    filterInputRef
  );

  const focusedItem =
    state.selectionManager.focusedKey != null
      ? state.collection.getItem(state.selectionManager.focusedKey)
      : undefined;

  return (
    <div>
      {hasFilter && (
        <div data-test-id="search-filter" className={styles.search}>
          <Search size="medium" className={styles.searchIcon} />
          <VisuallyHidden>
            <label id={filterLabelProps.id} htmlFor={filterInputProps.id}>
              Search options
            </label>
          </VisuallyHidden>
          <input
            // {...props.filterInputProps}
            {...filterInputProps}
            aria-controls={listBoxProps.id}
            role="combobox"
            placeholder="Search"
            aria-expanded
            aria-activedescendant={focusedItem ? getItemId(state, focusedItem.key) : undefined}
            ref={filterInputRef}
          />
        </div>
      )}

      <ul
        {...listBoxProps}
        ref={listBoxRef}
        role="listbox"
        className={styles.options}
        data-test-id="select-menu"
      >
        {[...state.collection].map((item) =>
          item.type === 'section' ? (
            <Section key={item.key} section={item} state={state} />
          ) : (
            <Option key={item.key} item={item} state={state} />
          )
        )}
      </ul>
    </div>
  );
};

const Section = <T extends object>({ section, state }: SelectListBoxSectionProps<T>) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <li {...itemProps} className={styles.section}>
        {section.rendered && (
          <div {...headingProps} className={styles.sectionHeader}>
            {section.rendered}
          </div>
        )}
        <ul {...groupProps} className={styles.sectionOptions}>
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
};

const Option = <T extends object>({ item, state }: SelectListBoxOptionProps<T>) => {
  const ref = useRef<HTMLLIElement>(null);
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      className={cx(
        styles.option,
        isDisabled && styles.isDisabled,
        isFocused && styles.isFocused,
        isSelected && styles.isSelected
      )}
    >
      {state.selectionManager.selectionMode === 'multiple' && (
        <input type="checkbox" disabled={isDisabled} checked={isSelected} readOnly />
      )}
      {typeof item.rendered === 'string' ? <span>{item.rendered}</span> : item.rendered}
    </li>
  );
};

export { SelectListBox };
