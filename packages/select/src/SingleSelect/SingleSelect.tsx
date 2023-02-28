import type { SingleSelectTriggerProps } from './SingleSelectTrigger';
import type { SingleSelection } from './types';
import type { SharedSelectProps } from '../types';

import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';

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
    innerRef,
    trigger = SingleSelectTrigger,
    'data-test-id': testId = 'select',
  } = props;
  const ref = useObjectRef(innerRef);

  const state = useSingleSelectState(props);

  const { labelProps, triggerProps, valueProps, menuProps } = useSingleSelect(
    {
      ...props,
    },
    state,
    ref
  );

  const { buttonProps } = useButton(
    { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
    ref
  );

  const { focusProps } = useFocusRing({ autoFocus });

  const renderedTrigger = trigger({
    state,
    buttonProps: mergeProps(buttonProps, focusProps, { 'data-test-id': 'select-trigger' }),
    valueProps,
    innerRef: ref,
  });

  return (
    <div data-test-id={testId}>
      <VisuallyHidden>
        <label {...labelProps}>{label}</label>
      </VisuallyHidden>

      {renderedTrigger}

      {state.isOpen && (
        <SelectPopover state={state} triggerRef={ref}>
          <SelectListBox {...menuProps} state={state} />
        </SelectPopover>
      )}
    </div>
  );
};

export { SingleSelect };
export type { SingleSelectProps };
