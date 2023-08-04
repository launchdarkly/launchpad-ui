import type { SingleSelectTriggerProps } from './SingleSelectTrigger';
import type { SingleSelection } from './types';
import type { SharedSelectProps } from '../types';

import { Popover } from '@launchpad-ui/primitives';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps, useResizeObserver } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useCallback, useRef, useState } from 'react';

import { SelectListBox } from '../SelectListBox';

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
    excludeFromTabOrder,
    disabled: isDisabled,
    label,
    trigger = SingleSelectTrigger,
    'data-test-id': testId = 'select',
    placeholder,
  } = props;
  const filterInputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);

  const state = useSingleSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps, filterInputProps } = useSingleSelect(
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
    triggerProps: mergeProps(buttonProps, focusProps, { 'data-test-id': 'select-trigger' }),
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
          <SelectListBox
            {...menuProps}
            listBoxRef={listBoxRef}
            filterInputRef={filterInputRef}
            filterInputProps={filterInputProps}
            hasFilter={props.hasFilter}
            state={state}
          />
        </Popover>
      )}
    </div>
  );
};

export { SingleSelect };
export type { SingleSelectProps };
