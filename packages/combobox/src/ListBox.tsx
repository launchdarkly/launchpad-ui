/* eslint-disable @typescript-eslint/no-use-before-define */
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';
import type { RefObject } from 'react';

import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox';
import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Combobox.module.css';

type ListBoxProps = AriaListBoxOptions<unknown> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  state: ListState<unknown>;
};

type SectionProps = {
  section: Node<unknown>;
  state: ListState<unknown>;
};

type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
};

const ListBox = (props: ListBoxProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef} className={styles.options}>
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
};

const ListBoxSection = ({ section, state }: SectionProps) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <li {...itemProps} className="pt-2">
        {section.rendered && (
          <span {...headingProps} className="text-xs font-bold uppercase text-gray-500 mx-3">
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

const Option = ({ item, state }: OptionProps) => {
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
      className={cx(styles.option, isFocused && styles.isFocused, isSelected && styles.isSelected)}
    >
      {item.rendered}
    </li>
  );
};

export { ListBox, ListBoxSection, Option };
