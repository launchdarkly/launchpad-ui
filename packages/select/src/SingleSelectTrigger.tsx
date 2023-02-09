import type { SelectTriggerChildrenState, SelectTriggerProps } from './Select';

import { ExpandMore } from '@launchpad-ui/icons';
import cx from 'classix';

import styles from './styles/Select.module.css';

const SingleSelectTrigger = <T extends object>(props: SelectTriggerProps<T>) => {
  const { state, buttonProps, valueProps, innerRef, children } = props;

  const getRenderedSelected = () => {
    const items = state.selectedItems;

    if (!items) return 'Select option';

    if (children) return children(state as SelectTriggerChildrenState<T>);

    return <span>{items[0].textValue}</span>;
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
