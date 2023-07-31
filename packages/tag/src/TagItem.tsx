import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { Item } from '@react-stately/collections';

type TagItemProps<P extends ElementType> = {
  as?: P;
  tooltip?: string;
};

const TagItem = Item as <P extends ElementType = 'div'>(
  props: TagItemProps<P> & ComponentPropsWithoutRef<P>
) => JSX.Element;

export { TagItem };
export type { TagItemProps };
