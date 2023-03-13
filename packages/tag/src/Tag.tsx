import type { TagGroupState } from '@react-stately/tag';
import type { TagProps as ReactAriaTagProps } from '@react-types/tag';

import { IconButton } from '@launchpad-ui/button';
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
        isFocused && styles.isFocused,
        isHovered && styles.isHovered,
        allowsRemoving && styles.isRemovable
      )}
      ref={ref}
    >
      <div className={cx(styles.tagCell)} {...tagProps}>
        <span className={styles.tagContent} {...labelProps}>
          {children}
        </span>
        {allowsRemoving && (
          <IconButton
            icon={<Close />}
            kind="minimal"
            size="small"
            aria-label="Clear"
            className={styles.removeButton}
            {...clearButtonProps}
          />
        )}
      </div>
    </div>
  );
};

export { Tag };
export type { TagProps };
