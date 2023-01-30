import type { SelectState } from '@react-stately/select';
import type { AriaSelectProps } from '@react-types/select';
import type { FocusableElement } from '@react-types/shared';
import type { ButtonHTMLAttributes, DOMAttributes, ReactNode, RefObject } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useSelect, HiddenSelect } from '@react-aria/select';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useSelectState } from '@react-stately/select';
import cx from 'classix';
import { useMemo, useRef } from 'react';

import { ListBox } from './ListBox';
import { Popover } from './Popover';
import styles from './styles/Combobox.module.css';

const defaultTrigger: SelectProps<object>['renderTrigger'] = (props) => {
  const { state, buttonProps, valueProps, ref } = props;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={cx(styles.container, state.isOpen && styles.isOpen)}
    >
      <span className={styles.valueContainer}>
        <span className={styles.singleValue} {...valueProps}>
          {state.selectedKey ? state.selectedItem.textValue : 'Select an option'}
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

type SelectProps<T extends object> = AriaSelectProps<T> & {
  renderTrigger?: (props: {
    state: SelectState<T>;
    buttonProps: ButtonHTMLAttributes<HTMLButtonElement> & DOMAttributes<FocusableElement>;
    valueProps: DOMAttributes<FocusableElement>;
    ref: RefObject<HTMLButtonElement>;
  }) => ReactNode;
};

const Select = <T extends object>({ renderTrigger = defaultTrigger, ...props }: SelectProps<T>) => {
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = useRef<HTMLButtonElement>(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps } = useFocusRing();

  const trigger = useMemo(() => {
    return renderTrigger({
      state,
      buttonProps: mergeProps(buttonProps, focusProps),
      valueProps,
      ref,
    });
  }, [state, buttonProps, valueProps, focusProps, renderTrigger, ref]);

  console.log(trigger);

  return (
    <div>
      <VisuallyHidden>
        <div {...labelProps}>{props.label}</div>
      </VisuallyHidden>
      <HiddenSelect state={state} triggerRef={ref} label={props.label} name={props.name} />
      {trigger}
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
};

export { Select };
