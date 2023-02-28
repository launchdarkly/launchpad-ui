import type { AriaListBoxOptions } from '@react-aria/listbox';
import type { MenuTriggerState } from '@react-stately/menu';
import type { AriaButtonProps } from '@react-types/button';
import type { OverlayTriggerProps } from '@react-types/overlays';
import type { AriaSelectProps } from '@react-types/select';
import type {
  CollectionBase,
  FocusableProps,
  InputBase,
  LabelableProps,
  TextInputBase,
  Validation,
} from '@react-types/shared';
import type { HTMLAttributes, ReactNode, RefObject } from 'react';

type SharedSelectProps<T extends object> = CollectionBase<T> & {
  autoFocus?: boolean;

  className?: string;

  /** Sets the default open state of the field (uncontrolled). */
  defaultOpen?: boolean;

  disallowEmptySelection?: boolean;

  formatLabel?: (items: Iterator<T>[]) => ReactNode;

  excludeFromTabOrder?: boolean;

  /** Whether the field is disabled. */
  isDisabled?: boolean;

  /** Sets the open state of the field (controlled). */
  isOpen?: boolean;

  /** The content to display as the label. */
  label: string;

  onOpenChange?: SharedUseSelectStateProps<T>['onOpenChange'];

  /** The list of ComboBox items (uncontrolled). */
  defaultItems?: SharedUseSelectStateProps<T>['defaultItems'];

  innerRef?: RefObject<HTMLButtonElement | null>;

  'data-test-id'?: string;
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
};

type SharedUseSelectStateProps<T extends object> = CollectionBase<T> &
  Omit<InputBase, 'isReadOnly'> &
  Validation &
  LabelableProps &
  TextInputBase &
  FocusableProps &
  OverlayTriggerProps & {
    shouldFlip?: boolean;
    defaultItems?: Iterable<T>;
    isLoading?: boolean;
  };

type SharedSelectState = MenuTriggerState & {
  isFocused: boolean;
  setFocused(isFocused: boolean): void;
};

type SharedUseSelectProps<T extends object> = Omit<AriaSelectProps<T>, 'onSelectionChange'> & {
  disallowEmptySelection?: boolean;
};

export type {
  SharedSelectProps,
  SelectAria,
  SharedUseSelectStateProps,
  SharedSelectState,
  SharedUseSelectProps,
};
