import type { MultiSelectTriggerProps } from './MultiSelectTrigger';
import type { SharedSelectProps } from '../types';
import type { MultipleSelection } from '@react-types/shared';

import { Popover } from '@launchpad-ui/primitives';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps, useResizeObserver } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useCallback, useRef, useState } from 'react';

import { SelectListBox } from '../SelectListBox';
import { useSelect } from '../useSelect';

import { MultiSelectMenuHeader } from './MultiSelectMenuHeader';
import { MultiSelectTrigger } from './MultiSelectTrigger';
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
    excludeFromTabOrder,
    isClearable,
    disabled: isDisabled,
    isSelectableAll,
    label,
    trigger = MultiSelectTrigger,
    placeholder,
    'data-test-id': testId = 'select',
  } = props;
  const filterInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);

  const state = useMultiSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps, filterInputProps } = useSelect(
    props,
    state,
    {
      triggerRef,
      listBoxRef,
      filterInputRef,
    }
  );

  const { buttonProps } = useButton(
    { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
    triggerRef
  );

  const { focusProps } = useFocusRing({ autoFocus });

  const renderedTrigger = trigger({
    state,
    triggerProps: mergeProps(buttonProps, focusProps, {
      'data-test-id': 'select-trigger',
    }),
    valueProps,
    triggerRef,
    placeholder,
  });

  const [triggerWidth, setTriggerWidth] = useState<number>();
  const onResize = useCallback(() => {
    const offsetWidth = triggerRef.current?.offsetWidth || 0;
    const minWidth = 400;
    setTriggerWidth(offsetWidth < minWidth ? minWidth : offsetWidth);
  }, [triggerRef]);

  useResizeObserver({
    ref: triggerRef,
    onResize: onResize,
  });

  return (
    <div data-test-id={testId}>
      <VisuallyHidden>
        <label {...labelProps}>{label}</label>
      </VisuallyHidden>

      {renderedTrigger}

      {state.isOpen && (
        <Popover
          state={state}
          popoverRef={popoverRef}
          triggerRef={triggerRef}
          style={{ width: triggerWidth }}
        >
          <MultiSelectMenuHeader
            isSelectableAll={isSelectableAll}
            isClearable={isClearable}
            state={state}
          />

          <SelectListBox
            {...menuProps}
            filterInputRef={filterInputRef}
            filterInputProps={filterInputProps}
            listBoxRef={listBoxRef}
            hasFilter={props.hasFilter}
            state={state}
          />
        </Popover>
      )}
    </div>
  );
};

export { MultiSelect };
export type { MultiSelectProps };
