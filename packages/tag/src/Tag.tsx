import type { TagGroupState } from '@react-stately/tag';
import type { TagProps as ReactAriaTagProps } from '@react-types/tag';

import { Close } from '@launchpad-ui/icons';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTag } from '@react-aria/tag';
import { mergeProps } from '@react-aria/utils';
import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Tag.module.css';

type TagProps<T extends object> = ReactAriaTagProps<T> & {
  state: TagGroupState<T>;
};

const Tag = <T extends object>(props: TagProps<T>) => {
  const { children, allowsRemoving, item, state, onRemove } = props;

  const { hoverProps, isHovered } = useHover({});
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true });
  const ref = useRef<HTMLDivElement>(null);
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

  return (
    <div
      {...mergeProps(tagRowProps, hoverProps, focusProps)}
      className={cx(
        styles.tag,
        isFocusVisible && styles.isFocusVisible,
        isHovered && styles.isHovered,
        !allowsRemoving && styles.isReadOnly
      )}
      ref={ref}
      data-test-id="tag"
    >
      <div className={cx(styles.tagCell)} {...tagProps}>
        <span className={styles.tagContent} {...labelProps}>
          {children}
        </span>
        {allowsRemoving && (
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
        )}
      </div>
    </div>
  );
};

export { Tag };
export type { TagProps };
