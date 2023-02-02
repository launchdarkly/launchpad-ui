import type { SelectState, UseSelectStateProps } from './useSelectState';
import type { CollectionBase, FocusableElement, Node } from '@react-types/shared';
import type { ButtonHTMLAttributes, DOMAttributes, ReactNode, RefObject } from 'react';

import { Button, ButtonGroup } from '@launchpad-ui/button';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useEffect, useRef } from 'react';

import { DefaultSelectTrigger } from './DefaultSelectTrigger';
import { SelectListBox } from './SelectListBox';
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
  } = props;

  const refAllButton = useRef<HTMLInputElement>(null);
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
    buttonProps: mergeProps(buttonProps, focusProps),
    valueProps,
    innerRef: ref,
  });

  const isMulti = state.selectionMode === 'multiple';
  // const isActive = state.isOpen || state.selectedItems;
  const isAllSelection = state.selectionManager.isSelectAll;
  const isIndeterminateSelection = !isAllSelection && !state.selectionManager.isEmpty;
  const hasClearButton = isClearable && state.selectedItems;
  const hasSelectAllButton = isSelectableAll && isMulti;
  const hasHeader = hasClearButton || hasSelectAllButton;

  const handleClear = () => state.selectionManager.clearSelection();
  const handleSelectAll = () => state.selectionManager.toggleSelectAll();

  useEffect(() => {
    if (refAllButton.current) {
      refAllButton.current.indeterminate = isIndeterminateSelection;
    }
  }, [isIndeterminateSelection]);

  return (
    <div>
      <div>
        {label && (
          <VisuallyHidden>
            <label {...labelProps}>{label}</label>
          </VisuallyHidden>
        )}

        {renderedTrigger}
        {state.isOpen && (
          <SelectPopover state={state} triggerRef={ref}>
            {hasHeader && (
              <ButtonGroup style={{ margin: '0.8rem 1.6rem' }}>
                {hasSelectAllButton && (
                  <Button onClick={handleSelectAll}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        checked={isAllSelection}
                        ref={refAllButton}
                        readOnly
                        tabIndex={-1}
                      />
                      Select all
                    </div>
                  </Button>
                )}
                {hasClearButton && <Button onClick={handleClear}>Clear</Button>}
              </ButtonGroup>
            )}

            <SelectListBox {...menuProps} state={state} />
          </SelectPopover>
        )}
      </div>
    </div>
  );
};

export { Select };
export type { SelectProps, SelectTriggerProps, SelectTriggerChildrenState };
