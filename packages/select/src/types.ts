import type { AriaListBoxOptions } from 'react-aria';
import type { MenuTriggerState } from 'react-stately';
import type { AriaButtonProps } from '@react-types/button';
import type { OverlayTriggerProps } from '@react-types/overlays';
import type { AriaSelectProps } from '@react-types/select';
import type {
  AriaLabelingProps,
  CollectionBase,
  DOMProps,
  FocusableElement,
} from '@react-types/shared';
import type {
  ButtonHTMLAttributes,
  DOMAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';

type SharedSelectProps<T extends object> = CollectionBase<T> &
  DOMProps &
  AriaLabelingProps & {
    autoFocus?: boolean;

    className?: string;

    /** Sets the default open state of the field (uncontrolled). */
    defaultOpen?: boolean;

    disallowEmptySelection?: boolean;

    formatLabel?: (items: Iterator<T>[]) => ReactNode;

    excludeFromTabOrder?: boolean;

    /** Whether the field is disabled. */
    disabled?: boolean;

    /** Sets the open state of the field (controlled). */
    isOpen?: boolean;

    /** The content to display as the label. */
    label: string;

    onOpenChange?: OverlayTriggerProps['onOpenChange'];

    'data-test-id'?: string;

    defaultItems?: Iterable<T>;

    isLoading?: boolean;

    defaultFilter?: FilterFn;

    filterValue?: string;
    /** The default value of the filter input (uncontrolled). */
    defaultFilterValue?: string;
    /** Handler that is called when the filter input value changes. */
    onFilterChange?: (value: string) => void;
    /** Whether the select allows a non-item matching input value to be set. */
    allowsCustomValue?: boolean;

    hasFilter?: boolean;
  };

type SelectAria<T extends object> = {
  /** Props for the label element. */
  labelProps: HTMLAttributes<HTMLElement>;

  /** Props for the popup trigger element. */
  triggerProps: AriaButtonProps;

  /** Props for the element representing the selected value. */
  valueProps: HTMLAttributes<HTMLElement>;

  /** Props for the popup. */
  menuProps: AriaListBoxOptions<T>;

  filterInputProps: InputHTMLAttributes<HTMLInputElement>;
};

type FilterFn = (textValue: string, inputValue: string) => boolean;

type SharedSelectState = MenuTriggerState & {
  isFocused: boolean;
  setFocused(isFocused: boolean): void;
  filterValue?: string;
  setFilterValue?: (val: string) => void;
  commit: () => void;
  revert: () => void;
};

type SharedSelectTriggerProps = {
  triggerProps: ButtonHTMLAttributes<HTMLButtonElement> & DOMAttributes<FocusableElement>;
  valueProps: DOMAttributes<FocusableElement>;
  triggerRef: RefObject<HTMLButtonElement>;
};

type SharedUseSelectProps<T extends object> = Omit<AriaSelectProps<T>, 'onSelectionChange'> & {
  disallowEmptySelection?: boolean;
};

export type {
  SharedSelectProps,
  SelectAria,
  SharedSelectState,
  SharedUseSelectProps,
  FilterFn,
  SharedSelectTriggerProps,
};
