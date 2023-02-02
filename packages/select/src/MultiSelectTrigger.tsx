import type { SelectTriggerChildrenState, SelectTriggerProps } from './Select';
import type { Node } from '@react-types/shared';

import { ExpandMore } from '@launchpad-ui/icons';
import cx from 'classix';

import styles from './styles/Select.module.css';

const MultiSelectTrigger = <T extends object>(props: SelectTriggerProps<T>) => {
  const { state, buttonProps, valueProps, innerRef, children } = props;

  const formatItems = (items: Node<T>[] | null) => {
    if (!items || items.length === 0) {
      return 'Select options';
    }

    if (children) return children(state as SelectTriggerChildrenState<T>);

    if (items.length > 3) {
      return `${items.length} selected`;
    }

    return items.map((item) => item.textValue).join(', ');
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
