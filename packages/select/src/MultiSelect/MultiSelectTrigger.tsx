import type { MultiSelectState } from './useMultiSelectState';
import type { SharedSelectTriggerProps } from '../types';
import type { Node } from '@react-types/shared';
import type { ReactNode } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import cx from 'classix';

import styles from '../styles/Select.module.css';

type MultiSelectTriggerChildrenState<T extends object> = MultiSelectState<T> & {
  selectedItems: Node<T>[];
};

type MultiSelectTriggerProps<T extends object> = SharedSelectTriggerProps & {
  state: MultiSelectState<T>;
  children?: (state: MultiSelectTriggerChildrenState<T>) => ReactNode;
};

const MultiSelectTrigger = <T extends object>(props: MultiSelectTriggerProps<T>) => {
  const {
    state,
    triggerProps,
    valueProps,
    triggerRef,
    children,
    placeholder = 'Select options',
  } = props;

  const formatItems = (items: Node<T>[] | null) => {
    if (!items || items.length === 0) {
      return <span className={styles.placeholder}>{placeholder}</span>;
    }

    if (children) return children(state as MultiSelectTriggerChildrenState<T>);

    if (items.length > 3) {
      return `${items.length} selected`;
    }

    return items.map((item) => item.textValue).join(', ');
  };

  return (
    <button
      {...triggerProps}
      ref={triggerRef}
      className={cx(
        styles.trigger,
        state.isOpen && styles.isOpen,
        state.isFocused && styles.isFocused
      )}
    >
      <span className={styles.valueContainer}>
        <span className={styles.singleValue} {...valueProps}>
          {formatItems(state.selectedItems)}
        </span>
      </span>
      <span className={styles.indicatorsContainer}>
        <span className={styles.expandIndicatorContainer} aria-hidden="true">
          <ExpandMore />
        </span>
      </span>
    </button>
  );
};

export { MultiSelectTrigger };
export type { MultiSelectTriggerProps, MultiSelectTriggerChildrenState };
