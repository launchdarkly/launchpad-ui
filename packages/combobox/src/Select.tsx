import type { AriaSelectProps } from '@react-types/select';

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

const Select = <T extends object>(props: AriaSelectProps<T>) => {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

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
        <span
          {...valueProps}
          className={`text-md ${state.selectedItem ? 'text-gray-800' : 'text-gray-500'}`}
        >
          {console.log(state.selectedItem)}
          {state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
        </span>
        <ExpandMore className={styles.expandMore} />
      </button>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start" className="w-52">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
};

export { Select };
