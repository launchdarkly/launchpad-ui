import type { MultiSelectTriggerProps } from './MultiSelectTrigger';
import type { SharedSelectProps } from '../types';
import type { MultipleSelection } from '@react-types/shared';

import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useRef } from 'react';

import { SelectListBox } from '../SelectListBox';
import { SelectPopover } from '../SelectPopover';

import { MultiSelectMenuHeader } from './MultiSelectMenuHeader';
import { MultiSelectTrigger } from './MultiSelectTrigger';
import { useMultiSelect } from './useMultiSelect';
import { useMultiSelectState } from './useMultiSelectState';

type MultiSelectProps<T extends object> = SharedSelectProps<T> &
  Omit<MultipleSelection, 'selectionMode'> & {
    trigger?: (props: MultiSelectTriggerProps<T>) => JSX.Element;
    /** Whether the field can be emptied. */
    isClearable?: boolean;
    /** Whether to show a button to select all items. */
    isSelectableAll?: boolean;
  };

const MultiSelect = <T extends object>(props: MultiSelectProps<T>) => {
  const {
    autoFocus,
    // className,
    excludeFromTabOrder,
    isClearable,
    isDisabled,
    isSelectableAll,
    label,
    trigger = MultiSelectTrigger,
    'data-test-id': testId = 'select',
  } = props;
  const triggerRef = useRef<HTMLButtonElement>(null);

  const state = useMultiSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps } = useMultiSelect(
    {
      ...props,
    },
    state,
    triggerRef
  );

  const { buttonProps } = useButton(
    { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
    triggerRef
  );

  const { focusProps } = useFocusRing({ autoFocus });

  const renderedTrigger = trigger({
    state,
    triggerProps: mergeProps(buttonProps, focusProps, { 'data-test-id': 'select-trigger' }),
    valueProps,
    triggerRef,
  });

  return (
    <div data-test-id={testId}>
      <VisuallyHidden>
        <label {...labelProps}>{label}</label>
      </VisuallyHidden>

      {renderedTrigger}

      {state.isOpen && (
        <SelectPopover state={state} triggerRef={triggerRef}>
          <MultiSelectMenuHeader
            isSelectableAll={isSelectableAll}
            isClearable={isClearable}
            state={state}
          />

          <SelectListBox {...menuProps} state={state} />
        </SelectPopover>
      )}
    </div>
  );
};

export { MultiSelect };
export type { MultiSelectProps };
