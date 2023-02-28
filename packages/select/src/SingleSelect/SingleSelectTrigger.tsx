import type { SingleSelectState } from './useSingleSelectState';
import type { FocusableElement, Node } from '@react-types/shared';
import type { ButtonHTMLAttributes, DOMAttributes, ReactNode, RefObject } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import cx from 'classix';

import styles from '../styles/Select.module.css';

type SingleSelectTriggerChildrenState<T extends object> = SingleSelectState<T> & {
  selectedItem: Node<T>;
};

type SingleSelectTriggerProps<T extends object> = {
  state: SingleSelectState<T>;
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement> & DOMAttributes<FocusableElement>;
  valueProps: DOMAttributes<FocusableElement>;
  innerRef: RefObject<HTMLButtonElement>;
  children?: (state: SingleSelectTriggerChildrenState<T>) => ReactNode;
};

const SingleSelectTrigger = <T extends object>(props: SingleSelectTriggerProps<T>) => {
  const { state, buttonProps, valueProps, innerRef, children } = props;

  const getRenderedSelected = () => {
    const item = state.selectedItem;

    if (!item) return 'Select option';

    if (children) return children(state as SingleSelectTriggerChildrenState<T>);

    return <span>{item.textValue}</span>;
  };

  return (
    <button
      {...buttonProps}
      ref={innerRef}
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
