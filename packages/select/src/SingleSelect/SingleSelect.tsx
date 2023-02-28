import type { SingleSelectTriggerProps } from './SingleSelectTrigger';
import type { SingleSelection } from './types';
import type { SharedSelectProps } from '../types';

import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useRef } from 'react';

import { SelectListBox } from '../SelectListBox';
import { SelectPopover } from '../SelectPopover';

import { SingleSelectTrigger } from './SingleSelectTrigger';
import { useSingleSelect } from './useSingleSelect';
import { useSingleSelectState } from './useSingleSelectState';

type SingleSelectProps<T extends object> = SharedSelectProps<T> &
  SingleSelection & {
    trigger?: (props: SingleSelectTriggerProps<T>) => JSX.Element;
  };

const SingleSelect = <T extends object>(props: SingleSelectProps<T>) => {
  const {
    autoFocus,
    // className,
    excludeFromTabOrder,
    isDisabled,
    label,
    trigger = SingleSelectTrigger,
    'data-test-id': testId = 'select',
  } = props;
  const filterInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);

  const state = useSingleSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps } = useSingleSelect(props, state, {
    triggerRef,
    listBoxRef,
  });

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
        <SelectPopover state={state} popoverRef={popoverRef} triggerRef={triggerRef}>
          <SelectListBox
            {...menuProps}
            listBoxRef={listBoxRef}
            filterInputRef={filterInputRef}
            state={state}
          />
        </SelectPopover>
      )}
    </div>
  );
};

export { SingleSelect };
export type { SingleSelectProps };
