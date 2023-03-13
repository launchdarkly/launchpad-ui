import type { ItemProps } from '@react-types/shared';

type TagItemProps<T extends object> = ItemProps<T>;

const TagItem = <T extends object>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: TagItemProps<T>
) => {
  return null;
};

TagItem.getCollectionNode = function* getCollectionNode<T extends object>(
  props: ItemProps<T>,
  context: any
) {
  const rendered = props.title || props.children;
  const textValue =
    props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';

  // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
  if (!textValue && !context?.suppressTextValueWarning) {
    console.warn(
      '<TagItem> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.'
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

export { TagItem };
export type { TagItemProps };
