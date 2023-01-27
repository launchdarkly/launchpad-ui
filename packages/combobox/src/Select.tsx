import type { SelectState } from '@react-stately/select';
import type { AriaSelectProps } from '@react-types/select';
import type { ReactNode } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useSelect, HiddenSelect } from '@react-aria/select';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useSelectState } from '@react-stately/select';
import cx from 'classix';
import { useRef } from 'react';

import { ListBox } from './ListBox';
import { Popover } from './Popover';
import styles from './styles/Combobox.module.css';

type SelectProps<T extends object> = AriaSelectProps<T> & {
  renderSelectedItem?: (state: SelectState<T>) => ReactNode;
};

const Select = <T extends object>({ renderSelectedItem, ...props }: SelectProps<T>) => {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  const renderSelected = () => {
    if (state.selectedItem) {
      if (renderSelectedItem) {
        return renderSelectedItem(state);
      }
      return state.selectedItem.rendered;
    }

    return 'Select an option';
  };

  return (
    <div>
      <VisuallyHidden>
        <div {...labelProps}>{props.label}</div>
      </VisuallyHidden>
      <HiddenSelect state={state} triggerRef={ref} label={props.label} name={props.name} />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={cx(styles.container, state.isOpen && styles.isOpen)}
      >
        <span className={styles.valueContainer}>
          <span className={styles.singleValue} {...valueProps}>
            {renderSelected()}
          </span>
        </span>
        <span className={styles.indicatorsContainer}>
          <span className={styles.expandIndicatorContainer} aria-hidden="true">
            <ExpandMore />
          </span>
        </span>
      </button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
};

export { Select };
