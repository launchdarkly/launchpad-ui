import type { TagGroupProps } from './TagGroup';
import type { TagItemProps } from './TagItem';
import type { AriaTagProps } from '@react-aria/tag';
import type { ListState } from '@react-stately/list';
import type { Node } from '@react-types/shared';
import type { ElementType, ReactNode } from 'react';

import { Close } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTag } from '@react-aria/tag';
import { mergeProps } from '@react-aria/utils';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/Tag.module.css';

type TagProps<T extends object> = AriaTagProps<T> & {
  item: Omit<Node<T>, 'props'> & {
    props?: TagItemProps<T, ElementType>;
  };
  state: ListState<T>;
  size: TagGroupProps<T>['size'];
  onClick: TagGroupProps<T>['onTagClick'];
  children: ReactNode;
};

const Tag = <T extends object>(props: TagProps<T>) => {
  const { children, item, state, onClick, size = 'small' } = props;

  const { hoverProps, isHovered } = useHover({});
  const { isFocusVisible, focusProps } = useFocusRing({ within: true });
  const ref = useRef<HTMLDivElement>(null);

  const { as: Component = 'div', tooltip, ...itemProps } = item.props || {};

  const { rowProps, gridCellProps, removeButtonProps, allowsRemoving } = useTag(
    {
      ...props,
      item,
    },
    state,
    ref
  );

  const classes = cx(
    styles.tag,
    styles[size],
    isFocusVisible && styles.isFocusVisible,
    isHovered && styles.isHovered,
    !allowsRemoving && styles.isReadOnly,
    onClick && styles.isInteractive
  );

  const tag = (
    <Component
      {...mergeProps(rowProps, hoverProps, focusProps, itemProps)}
      className={classes}
      ref={ref}
      onClick={onClick && (() => onClick(item.key))}
      data-test-id="tag"
    >
      <div className={cx(styles.tagCell)} {...gridCellProps}>
        <span className={styles.tagContent}>{children}</span>
        {allowsRemoving && (
          <Tooltip content="Remove" allowBoundaryElementOverflow>
            <button
              className={styles.removeButton}
              tabIndex={-1}
              data-test-id="remove-tag-btn"
              onClick={(e) => {
                e.stopPropagation();
                removeButtonProps.onPress?.(undefined as any);
              }}
              {...removeButtonProps}
            >
              <Close size="small" />
            </button>
          </Tooltip>
        )}
      </div>
    </Component>
  );

  if (tooltip) {
    return (
      <Tooltip content={tooltip} allowBoundaryElementOverflow>
        {tag}
      </Tooltip>
    );
  }

  return tag;
};

export { Tag };
export type { TagProps };
