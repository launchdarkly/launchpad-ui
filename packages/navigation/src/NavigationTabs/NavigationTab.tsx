import type { TabListState } from '@react-stately/tabs';
import type { ItemProps } from '@react-types/shared';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type NavigationTabProps<T extends object, P extends ElementType> = ItemProps<T> & {
  as?: P;
  tooltip?: string;
  isNew?: boolean;
  onClick?: (_e: MouseEvent, state: TabListState<T>) => void;
  [key: string]: any;
};

const NavigationTab = <T extends object, P extends ElementType = 'a'>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: NavigationTabProps<T, P> &
    Omit<ComponentPropsWithoutRef<P>, keyof NavigationTabProps<T, P>>
) => {
  return null;
};

NavigationTab.getCollectionNode = function* getCollectionNode<T extends object>(
  props: ItemProps<T>,
  context: any
) {
  const rendered = props.title || props.children;
  const textValue =
    props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';

  // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
  if (!textValue && !context?.suppressTextValueWarning) {
    console.warn(
      '<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.'
    );
  }

  yield {
    type: 'item',
    props: props,
    rendered,
    textValue,
    'aria-label': props['aria-label'],
    hasChildNodes: false,
  };
};

export { NavigationTab };
export type { NavigationTabProps };
