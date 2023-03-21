import type { TagGroupProps } from './TagGroup';
import type { TagItemProps } from './TagItem';
import type { TagGroupState } from '@react-stately/tag';
import type { Node } from '@react-types/shared';
import type { TagProps as ReactAriaTagProps } from '@react-types/tag';
import type { ElementType } from 'react';

import { Close } from '@launchpad-ui/icons';
import { Tooltip } from '@launchpad-ui/tooltip';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTag } from '@react-aria/tag';
import { mergeProps } from '@react-aria/utils';
import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Tag.module.css';

type TagProps<T extends object> = ReactAriaTagProps<T> & {
  item: Omit<Node<T>, 'props'> & {
    props?: TagItemProps<T, ElementType>;
  };
  state: TagGroupState<T>;
  size: TagGroupProps<T>['size'];
  onClick: TagGroupProps<T>['onTagClick'];
};

const Tag = <T extends object>(props: TagProps<T>) => {
  const { children, allowsRemoving, item, state, onRemove, onClick, size = 'small' } = props;

  const { hoverProps, isHovered } = useHover({});
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true });
  const ref = useRef<HTMLDivElement>(null);

  const { as: Component = 'div', tooltip, ...itemProps } = item.props || {};

  const { clearButtonProps, labelProps, tagProps, tagRowProps } = useTag(
    {
      ...props,
      isFocused,
      allowsRemoving,
      item,
      onRemove,
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
      {...mergeProps(tagRowProps, hoverProps, focusProps, itemProps)}
      className={classes}
      ref={ref}
      onClick={onClick && (() => onClick(item.key))}
      data-test-id="tag"
    >
      <div className={cx(styles.tagCell)} {...tagProps}>
        <span className={styles.tagContent} {...labelProps}>
          {children}
        </span>
        {allowsRemoving && (
          <Tooltip content="Remove" allowBoundaryElementOverflow>
            <button
              className={styles.removeButton}
              tabIndex={-1}
              data-test-id="remove-tag-btn"
              onClick={(e) => {
                e.stopPropagation();
                clearButtonProps.onPress?.(undefined as any);
              }}
              {...clearButtonProps}
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
