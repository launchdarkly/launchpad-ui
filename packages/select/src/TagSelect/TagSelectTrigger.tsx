import type { TagSelectState } from './useTagSelectState';
import type { SharedSelectTriggerProps } from '../types';
import type { Node } from '@react-types/shared';
import type { InputHTMLAttributes, ReactNode, RefObject } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';

import styles from '../styles/Select.module.css';
import { TagGroup, TagItem } from '@launchpad-ui/tag';
import { IconButton } from '@launchpad-ui/button';

type TagSelectTriggerChildrenState<T extends object> = TagSelectState<T> & {
  selectedItems: Node<T>[];
};

type TagSelectTriggerProps<T extends object> = SharedSelectTriggerProps & {
  state: TagSelectState<T>;
  children?: (state: TagSelectTriggerChildrenState<T>) => ReactNode;
  filterInputRef: RefObject<HTMLInputElement>;
  filterInputProps: InputHTMLAttributes<HTMLInputElement>;
};

const TagSelectTrigger = <T extends object>(props: TagSelectTriggerProps<T>) => {
  const {
    state,
    triggerProps,
    valueProps,
    triggerRef,
    filterInputProps,
    filterInputRef,
    children,
    placeholder = 'Select options',
  } = props;

  const formatItems = (items: Node<T>[] | null) => {
    if (!items || items.length === 0) {
      return <span className={styles.placeholder}>{placeholder}</span>;
    }

    if (children) return children(state as TagSelectTriggerChildrenState<T>);

    if (items.length > 3) {
      return `${items.length} selected`;
    }

    return items.map((item) => item.textValue).join(', ');
  };

  console.log(filterInputProps);

  return (
    <div className={styles.tagSelectContainer}>
      <div className={styles.tagGroupContainer}>
        <TagGroup
          items={(state.selectedItems || []) as Node<T>[]}
          allowsRemoving
          onRemove={(key) => state.selectionManager.select(key)}
        >
          {(item) => <TagItem key={item.key}>{item.textValue}</TagItem>}
        </TagGroup>
      </div>
      <input
        {...filterInputProps}
        ref={filterInputRef}
        className={styles.tagFilterInput}
        onFocus={() => state.open()}
        onBlur={() => state.close()}
      />
      <IconButton
        className={styles.tagFilterButton}
        aria-label="Show options"
        size="small"
        {...triggerProps}
        icon={<ExpandMore />}
      />
    </div>
  );
};

export { TagSelectTrigger };
export type { TagSelectTriggerProps, TagSelectTriggerChildrenState };
