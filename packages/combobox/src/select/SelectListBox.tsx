import type { MultiSelectState } from './useMultiSelectState';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { Node } from '@react-types/shared';
import type { RefObject } from 'react';

import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox';
import cx from 'classix';
import { useRef } from 'react';

type ListBoxProps<T extends object> = AriaListBoxOptions<T> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  state: MultiSelectState<T>;
};

type SectionProps<T extends object> = {
  section: Node<T>;
  state: MultiSelectState<T>;
};

type OptionProps<T extends object> = {
  item: Node<T>;
  state: MultiSelectState<T>;
};

const Option = <T extends object>({ item, state }: OptionProps<T>) => {
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
        'select__option',
        isDisabled && 'select__option--disabled',
        isFocused && 'select__option--focused',
        isSelected && 'select__option--selected'
      )}
    >
      {state.selectionMode === 'multiple' && (
        <input type="checkbox" disabled={isDisabled} checked={isSelected} readOnly />
      )}
      {typeof item.rendered === 'string' ? (
        <span className="truncate block">{item.rendered}</span>
      ) : (
        item.rendered
      )}
    </li>
  );
};

const Section = <T extends object>({ section, state }: SectionProps<T>) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <li {...itemProps} className="select__section">
        {section.rendered && (
          <span {...headingProps} className="select__section-heading">
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
};

const SelectListBox = <T extends object>(props: ListBoxProps<T>) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;

  const { listBoxProps } = useListBox(
    {
      ...props,
      // When Select is clearable, do not clear the selection once ESC key is pressed, see https://github.com/adobe/react-spectrum/blob/main/packages/@react-aria/selection/src/useSelectableCollection.ts#L226
      disallowEmptySelection: true,
    },
    state,
    listBoxRef
  );

  return (
    <ul {...listBoxProps} className="select__listbox" ref={listBoxRef}>
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <Section key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
};

export { SelectListBox };
