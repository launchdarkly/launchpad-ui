import type { AriaSelectProps } from '@react-types/select';

import { ExpandMore, UnfoldMore } from '@launchpad-ui/icons';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { useSelect, HiddenSelect } from '@react-aria/select';
import { mergeProps } from '@react-aria/utils';
import { useSelectState } from '@react-stately/select';
import { useRef } from 'react';

import { ListBox } from './ListBox';
import { Popover } from './Popover';

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
    <div className="inline-flex flex-col relative w-52 mt-4">
      <div
        {...labelProps}
        className="block text-sm font-medium text-gray-700 text-left cursor-default"
      >
        {props.label}
      </div>
      <HiddenSelect state={state} triggerRef={ref} label={props.label} name={props.name} />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={`p-1 pl-3 py-1 relative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default shadow-sm border-2 outline-none ${
          isFocusVisible ? 'border-pink-500' : 'border-gray-300'
        } ${state.isOpen ? 'bg-gray-100' : 'bg-white'}`}
      >
        <span
          {...valueProps}
          className={`text-md ${state.selectedItem ? 'text-gray-800' : 'text-gray-500'}`}
        >
          {state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
        </span>
        <ExpandMore className={`w-5 h-5 ${isFocusVisible ? 'text-pink-500' : 'text-gray-500'}`} />
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
