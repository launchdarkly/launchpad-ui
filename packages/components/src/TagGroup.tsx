import type { ForwardedRef } from 'react';
import type { TagGroupProps, TagListProps, TagProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
  TagGroup as AriaTagGroup,
  TagList as AriaTagList,
  Tag as AriaTag,
  composeRenderProps,
} from 'react-aria-components';

import { IconButton } from './IconButton';
import styles from './styles/TagGroup.module.css';

const group = cva(styles.group);
const list = cva(styles.list);
const tag = cva(styles.tag);

const _TagGroup = ({ className, ...props }: TagGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <AriaTagGroup {...props} ref={ref} className={group({ className })} />;
};

/**
 * A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.
 *
 * https://react-spectrum.adobe.com/react-aria/TagGroup.html
 */
const TagGroup = forwardRef(_TagGroup);

const _TagList = <T extends object>(props: TagListProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaTagList
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        list({ ...renderProps, className })
      )}
    />
  );
};

/**
 * A tag list is a container for tags within a TagGroup.
 */
const TagList = forwardRef(_TagList);

const _Tag = ({ children, ...props }: TagProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <AriaTag
      {...props}
      ref={ref}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tag({ ...renderProps, className })
      )}
    >
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <IconButton
              aria-label="Remove"
              size="small"
              variant="minimal"
              icon="cancel-circle-outline"
              slot="remove"
            />
          )}
        </>
      )}
    </AriaTag>
  );
};

/**
 * A Tag is an individual item within a TagList.
 */
const Tag = forwardRef(_Tag);

export { TagGroup, TagList, Tag };
export type { TagGroupProps, TagListProps, TagProps };
