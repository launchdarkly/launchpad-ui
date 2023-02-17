/* eslint-disable @typescript-eslint/no-use-before-define */
import type { SelectItemProps } from './SelectItem';
import type { SelectState } from './useSelectState';
import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { Node } from '@react-types/shared';
import type { ElementType, RefObject } from 'react';

import { useListBox, useListBoxSection, useOption } from '@react-aria/listbox';
import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Select.module.css';

type SelectListBoxProps<T extends object> = AriaListBoxOptions<T> & {
  listBoxRef?: RefObject<HTMLUListElement>;
  state: SelectState<T>;
};

type SelectListBoxSectionProps<T extends object> = {
  section: Node<T>;
  state: SelectState<T>;
};

const SelectListBox = <T extends object>(props: SelectListBoxProps<T>) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul {...listBoxProps} ref={listBoxRef} className={styles.options} data-test-id="select-menu">
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

type OptionProps<T extends object> = {
  item: Omit<Node<T>, 'props'> & {
    props?: SelectItemProps<T, ElementType>;
  };
  state: SelectState<T>;
};

const Option = <T extends object>(props: OptionProps<T>) => {
  const ref = useRef<HTMLElement>(null);
  const { item, state } = props;
  const { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  const { as: Component = 'li', ...itemProps } = item.props || {};

  console.log(Component);

  return (
    <Component
      {...optionProps}
      {...itemProps}
      ref={ref}
      className={cx(
        styles.option,
        isDisabled && styles.isDisabled,
        isFocused && styles.isFocused,
        isSelected && styles.isSelected
      )}
    >
      {state.selectionMode === 'multiple' && (
        <input type="checkbox" disabled={isDisabled} checked={isSelected} readOnly />
      )}
      {typeof item.rendered === 'string' ? <span>{item.rendered}</span> : item.rendered}
    </Component>
  );
};

export { SelectListBox };
