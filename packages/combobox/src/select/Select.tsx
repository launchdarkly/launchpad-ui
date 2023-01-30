import type { MultiSelectState } from './useMultiSelectState';
import type { CollectionChildren, Node } from '@react-types/shared';
import type { ReactNode, RefObject } from 'react';

import { useButton } from '@react-aria/button';
import { FocusRing } from '@react-aria/focus';
import { useObjectRef } from '@react-aria/utils';
import { Item, Section } from '@react-stately/collections';
import cx from 'classix';
import { forwardRef, useEffect, useRef } from 'react';

import { SelectListBox } from './SelectListBox';
import { SelectPopover } from './SelectPopover';
import { useMultiSelect } from './useMultiSelect';
import { useMultiSelectState } from './useMultiSelectState';

type OptionItem<T extends object> = T & {
  children?: never;

  id: string;

  name: string | React.ReactNode;

  /** Textual representation of `name` in case it is not a string. Used for searching. */
  textValue?: string;
};

type OptionSection<T extends object> = {
  children: OptionItem<T>[];
  name: string;
};

type Option<T extends object> = OptionItem<T> | OptionSection<T>;

type SelectProps<T extends object> = {
  /** Whether the element should receive focus on render. */
  autoFocus?: boolean;

  /** Sets the CSS [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
  className?: string;

  /** Sets the default open state of the field (uncontrolled). */
  defaultOpen?: boolean;

  children: CollectionChildren<Option<T>>;

  /** Item objects in the collection. */
  items: Option<T>[];

  formatLabel?: (items: Option<T>[]) => ReactNode;

  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKeys?: Parameters<typeof useMultiSelectState>['0']['defaultSelectedKeys'];

  /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
  disabledKeys?: Parameters<typeof useMultiSelectState>['0']['disabledKeys'];

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

  /** Handler that is called when the select's open state changes. */
  onOpenChange?: Parameters<typeof useMultiSelectState>['0']['onOpenChange'];

  /** Handler that is called when the selection changes. */
  onSelectionChange?: Parameters<typeof useMultiSelectState>['0']['onSelectionChange'];

  /** The currently selected keys in the collection (controlled). */
  selectedKeys?: Parameters<typeof useMultiSelectState>['0']['selectedKeys'];

  /** The type of selection that is allowed in the collection. */
  selectionMode: 'single' | 'multiple';

  innerRef: RefObject<HTMLButtonElement | null> 
};

const SelectContainer = <T extends object>(props: SelectProps<T>) => {
  const {
    autoFocus,
    className,
    excludeFromTabOrder,
    isClearable,
    isDisabled,
    isSelectableAll,
    label,
    innerRef
  } = props;

  const refAllButton = useRef<HTMLInputElement>(null);
  const ref = useObjectRef(innerRef);
  const disallowEmptySelection = !isClearable;

  const state = useMultiSelectState({ ...props, disallowEmptySelection });
  const { labelProps, triggerProps, valueProps, menuProps } = useMultiSelect(
    {
      ...props,
      disallowEmptySelection,
    },
    state,
    ref
  );
  const { buttonProps } = useButton(
    { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
    ref
  );

  const isActive = state.isOpen || state.selectedItems;
  const isAllSelection = state.selectionManager.isSelectAll;
  const isIndeterminateSelection = !isAllSelection && !state.selectionManager.isEmpty;
  const hasClearButton = isClearable && state.selectedItems;
  const hasHeader = isSelectableAll;

  const handleClear = () => state.selectionManager.clearSelection();
  const handleSelectAll = () => state.selectionManager.toggleSelectAll();

  const formatItems = (items: NonNullable<MultiSelectState<Node<T>>['selectedItems']>) => (
    <span className="truncate block">
      {items.length > 1 ? `${items.length} selected` : items[0].textValue}
    </span>
  );

  useEffect(() => {
    if (refAllButton.current) {
      refAllButton.current.indeterminate = isIndeterminateSelection;
    }
  }, [isIndeterminateSelection]);

  return (
    <div className={cx('select-wrapper', state.isOpen && 'select-wrapper--open', className)}>
      <div className="select-wrapper__input">
        {label && (
          <label
            {...labelProps}
            className={cx('select__label', isActive && 'select__label--active')}
          >
            {label}
          </label>
        )}
        <FocusRing focusRingClass="select--focused" autoFocus={autoFocus}>
          <button
            {...buttonProps}
            className={cx(
              'select',
              state.isOpen && 'select--open',
              state.selectedItems && 'select--active',
              isDisabled && 'select--disabled'
            )}
            type="button"
            ref={ref}
          >
            <span {...valueProps}>
              {state.selectedItems ? formatItems(state.selectedItems) : undefined}
            </span>
          </button>
        </FocusRing>
        {state.isOpen && (
          <SelectPopover
            isOpen={state.isOpen}
            onClose={state.close}
            className="select__popover"
            triggerRef={ref}
          >
            {hasHeader && (
              <>
                {isSelectableAll && (
                  <button type="button" onClick={handleSelectAll} className="select__all-button">
                    <input
                      type="checkbox"
                      checked={isAllSelection}
                      ref={refAllButton}
                      readOnly
                      tabIndex={-1}
                    />
                    Select all
                  </button>
                )}
                <div className="select__divider" />
              </>
            )}
            <SelectListBox {...menuProps} state={state} />
            {hasClearButton && (
              <>
                <div className="select__divider" />
                <button type="button" className="select__clear-button" onClick={handleClear}>
                  Clear
                </button>
              </>
            )}
          </SelectPopover>
        )}
      </div>
    </div>
  );
});

SelectContainer.displayName = 'SelectContainer';

type SelectContainerProps = Omit<SelectProps, 'children' | 'items'> & {
  options: Option[];
};

const Select = forwardRef<HTMLButtonElement, SelectContainerProps>(({ options, ...props }, ref) => (
  <SelectContainer {...props} items={options} ref={ref}>
    {(section) =>
      section.children ? (
        <Section key={section.name} items={section.children} title={section.name}>
          {(item) => <Item textValue={item.textValue}>{item.name}</Item>}
        </Section>
      ) : (
        <Item textValue={section.textValue}>{section.name}</Item>
      )
    }
  </SelectContainer>
));

Select.displayName = 'Select';

export { Select };
export type { Option, OptionItem };
