import type { TagSelectTriggerProps } from './TagSelectTrigger';
import type { SharedSelectProps } from '../types';
import type { MultipleSelection } from '@react-types/shared';

import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useRef } from 'react';

import { SelectListBox } from '../SelectListBox';
import { SelectPopover } from '../SelectPopover';

import { TagSelectTrigger } from './TagSelectTrigger';
import { useTagSelect } from './useTagSelect';
import { useTagSelectState } from './useTagSelectState';

type TagSelectProps<T extends object> = SharedSelectProps<T> &
  MultipleSelection & {
    trigger?: (props: TagSelectTriggerProps<T>) => JSX.Element;
    /** Whether the field can be emptied. */
    isClearable?: boolean;
  };

const TagSelect = <T extends object>(props: TagSelectProps<T>) => {
  const {
    autoFocus,
    excludeFromTabOrder,
    isClearable,
    disabled: isDisabled,
    label,
    trigger = TagSelectTrigger,
    placeholder,
    'data-test-id': testId = 'select',
  } = props;
  const filterInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const listBoxRef = useRef<HTMLDivElement>(null);

  const state = useTagSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps, filterInputProps } = useTagSelect(
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
    filterInputRef,
    filterInputProps,
  });

  return (
    <div data-test-id={testId}>
      <VisuallyHidden>
        <label {...labelProps}>{label}</label>
      </VisuallyHidden>

      {renderedTrigger}

      {state.isOpen && (
        <SelectPopover state={state} popoverRef={popoverRef} triggerRef={triggerRef}>
          <SelectListBox
            {...menuProps}
            filterInputRef={filterInputRef}
            filterInputProps={filterInputProps}
            listBoxRef={listBoxRef}
            hasFilter={false}
            state={state}
          />
        </SelectPopover>
      )}
    </div>
  );
};

export { TagSelect };
export type { TagSelectProps };
