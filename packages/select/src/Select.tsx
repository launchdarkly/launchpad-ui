import type { SelectState, UseSelectStateProps } from './useSelectState';
import type { CollectionBase, FocusableElement, Node } from '@react-types/shared';
import type { ButtonHTMLAttributes, DOMAttributes, ReactNode, RefObject } from 'react';

import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import { DefaultSelectTrigger } from './DefaultSelectTrigger';
import { SelectListBox } from './SelectListBox';
import { SelectMenuHeader } from './SelectMenuHeader';
import { SelectPopover } from './SelectPopover';
import { useSelect } from './useSelect';
import { useSelectState } from './useSelectState';

type SelectTriggerChildrenState<T extends object> = SelectState<T> & { selectedItems: Node<T>[] };

type SelectTriggerProps<T extends object> = {
  state: SelectState<T>;
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement> & DOMAttributes<FocusableElement>;
  valueProps: DOMAttributes<FocusableElement>;
  innerRef: RefObject<HTMLButtonElement>;
  children?: (state: SelectTriggerChildrenState<T>) => ReactNode;
};

type SelectProps<T extends object> = CollectionBase<T> & {
  autoFocus?: boolean;

  className?: string;

  /** Sets the default open state of the field (uncontrolled). */
  defaultOpen?: boolean;

  disallowEmptySelection?: boolean;

  formatLabel?: (items: Iterator<T>[]) => ReactNode;

  excludeFromTabOrder?: boolean;

  /** Whether the field can be emptied. */
  isClearable?: boolean;

  /** Whether the field is disabled. */
  isDisabled?: boolean;

  /** Whether to show a button to select all items. */
  isSelectableAll?: boolean;

  /** Sets the open state of the field (controlled). */
  isOpen?: boolean;

  /** The content to display as the label. */
  label: string;

  onOpenChange?: UseSelectStateProps<T>['onOpenChange'];

  onSelectionChange?: UseSelectStateProps<T>['onSelectionChange'];

  selectedKeys?: UseSelectStateProps<T>['selectedKeys'];

  /** The type of selection that is allowed in the collection. */
  selectionMode: 'single' | 'multiple';

  innerRef?: RefObject<HTMLButtonElement | null>;

  trigger?: (props: SelectTriggerProps<T>) => JSX.Element;

  'data-test-id'?: string;
};

const Select = <T extends object>(props: SelectProps<T>) => {
  const {
    autoFocus,
    // className,
    excludeFromTabOrder,
    isClearable,
    isDisabled,
    isSelectableAll,
    label,
    innerRef,
    trigger = DefaultSelectTrigger,
    'data-test-id': testId = 'select',
  } = props;
  const ref = useObjectRef(innerRef);

  const state = useSelectState(props);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
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
          <SelectMenuHeader
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

export { Select };
export type { SelectProps, SelectTriggerProps, SelectTriggerChildrenState };
