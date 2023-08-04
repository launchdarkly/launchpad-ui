import type { SharedSelectState } from './types';
import type { ItemProps } from '@react-types/shared';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { Item } from '@react-stately/collections';

type SelectItemProps<T extends object, P extends ElementType> = ItemProps<T> & {
  as?: P;
  onClick?: (_e: MouseEvent, state: SharedSelectState) => void;
};

const SelectItem = Item as <T extends object, P extends ElementType = 'div'>(
  props: SelectItemProps<T, P> & Omit<ComponentPropsWithoutRef<P>, keyof SelectItemProps<T, P>>
) => JSX.Element;

export { SelectItem };
export type { SelectItemProps };
