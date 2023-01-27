import type { GridListProps } from '@react-aria/gridlist';
import type { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';

import { useFocusRing } from '@react-aria/focus';
import { useGridList, useGridListItem } from '@react-aria/gridlist';
import { useListBoxSection } from '@react-aria/listbox';
import { useSeparator } from '@react-aria/separator';
import { mergeProps } from '@react-aria/utils';
import { useListState } from '@react-stately/list';
import { useRef } from 'react';

import styles from './styles/Combobox.module.css';

const GridBox = <T extends object>(props: GridListProps<T>) => {
  const state = useListState(props);
  const ref = useRef(null);
  const { gridProps } = useGridList(props, state, ref);

  return (
    <ul {...gridProps} ref={ref} className={styles.options}>
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <GridBoxSection key={item.key} section={item} state={state} />
        ) : (
          <GridBoxItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
};

const GridBoxSection = ({ section, state }: any) => {
  const { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  const { separatorProps } = useSeparator({
    elementType: 'li',
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          style={{
            borderTop: '1px solid gray',
            margin: '2px 5px',
          }}
        />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <span
            {...headingProps}
            style={{
              fontWeight: 'bold',
              fontSize: '1.1em',
              padding: '2px 5px',
            }}
          >
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: 'none',
          }}
        >
          {[...section.childNodes].map((node) => (
            <GridBoxItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
};

type ListItemProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
};

const GridBoxItem = ({ item, state }: ListItemProps) => {
  const ref = useRef(null);
  const { rowProps, gridCellProps, isPressed } = useGridListItem({ node: item }, state, ref);

  const { isFocusVisible, focusProps } = useFocusRing();
  // const showCheckbox =
  //   state.selectionManager.selectionMode !== 'none' &&
  //   state.selectionManager.selectionBehavior === 'toggle';

  return (
    <li
      {...mergeProps(rowProps, focusProps)}
      ref={ref}
      className={`${styles.option} ${isPressed ? 'pressed' : ''} ${
        isFocusVisible ? 'focus-visible' : ''
      }`}
    >
      <div {...gridCellProps}>
        {/* {showCheckbox && <ListCheckbox item={item} state={state} />} */}
        {item.rendered}
      </div>
    </li>
  );
};

export { GridBox };
