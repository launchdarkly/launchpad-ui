import type { SingleSelectState } from './useSingleSelectState';
import type { SharedSelectTriggerProps } from '../types';
import type { Node } from '@react-types/shared';
import type { ReactNode } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from '../styles/Select.module.css';

type SingleSelectTriggerChildrenState<T extends object> = SingleSelectState<T> & {
  selectedItem: Node<T>;
};

type SingleSelectTriggerProps<T extends object> = SharedSelectTriggerProps & {
  state: SingleSelectState<T>;
  children?: (state: SingleSelectTriggerChildrenState<T>) => ReactNode;
};

const SingleSelectTrigger = <T extends object>(props: SingleSelectTriggerProps<T>) => {
  const {
    state,
    triggerProps,
    valueProps,
    triggerRef,
    children,
    placeholder = 'Select option',
  } = props;

  const getRenderedSelected = () => {
    const item = state.selectedItem;

    if (!item) return <span className={styles.placeholder}>{placeholder}</span>;

    if (children) return children(state as SingleSelectTriggerChildrenState<T>);

    return <span>{item.textValue}</span>;
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
          {getRenderedSelected()}
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

export { SingleSelectTrigger };
export type { SingleSelectTriggerProps, SingleSelectTriggerChildrenState };
