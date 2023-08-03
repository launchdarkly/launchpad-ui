import type { AriaListBoxProps } from '@react-aria/listbox';
import type { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';
import type { ForwardedRef } from 'react';

import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox';
import { useObjectRef } from '@react-aria/utils';
import { useListState } from '@react-stately/list';
import { cx } from 'classix';
import { forwardRef } from 'react';

import { list, listSection, sectionHeader, sectionOptions, option } from './styles/Primitives.css';

type ListBoxProps<T extends object> = AriaListBoxProps<T>;

const ListBox = forwardRef(
  <T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLUListElement>) => {
    const state = useListState(props);
    const listBoxRef = useObjectRef(ref);

    const { listBoxProps, labelProps } = useListBox(props, state, listBoxRef);

    return (
      <>
        {props.label && <div {...labelProps}>{props.label}</div>}
        <ul {...listBoxProps} ref={listBoxRef} className={list}>
          {[...state.collection].map((item) =>
            item.type === 'section' ? (
              <ListBoxSection key={item.key} section={item} state={state} />
            ) : item.type === 'item' ? (
              <Option key={item.key} item={item} state={state} />
            ) : null
          )}
        </ul>
      </>
    );
  }
);

ListBox.displayName = 'ListBox';

type ListBoxSectionProps<T extends object> = {
  section: Node<T>;
  state: ListState<T>;
};

const ListBoxSection = <T extends object>({ section, state }: ListBoxSectionProps<T>) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <li {...itemProps} className={listSection}>
        {section.rendered && (
          <span {...headingProps} className={sectionHeader}>
            {section.rendered}
          </span>
        )}
        <ul {...groupProps} className={sectionOptions}>
          {[...state.collection.getChildren!(section.key)].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
};

type OptionProps<T extends object> = {
  item: Node<T>;
  state: ListState<T>;
};

const Option = <T extends object>({ item, state }: OptionProps<T>) => {
  const ref = useObjectRef<HTMLLIElement>(item.props.ref);
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
        option({
          disabled: isDisabled,
          selected: isSelected,
          focused: isFocused,
        })
      )}
    >
      {item.rendered}
    </li>
  );
};

export { ListBox, ListBoxSection, Option };
export type { ListBoxProps, ListBoxSectionProps, OptionProps };
