import cx from 'classix';
import { mergeProps } from '@react-aria/utils';
import React, { useRef } from 'react';
import type { TagGroupState } from '@react-stately/tag';
import { TagProps } from '@react-types/tag';
import { useFocusRing } from '@react-aria/focus';
import { useHover } from '@react-aria/interactions';
import { useTag } from '@react-aria/tag';

import styles from './styles/Tag.module.css';
import { IconButton } from '@launchpad-ui/button';
import { Close } from '@launchpad-ui/icons';

export interface SpectrumTagProps<T> extends TagProps<T> {
  state: TagGroupState<T>;
}

const Tag = <T extends object>(props: SpectrumTagProps<T>) => {
  const { children, allowsRemoving, item, state, onRemove, ...otherProps } = props;

  const { hoverProps, isHovered } = useHover({});
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({ within: true });
  const ref = useRef();
  const { clearButtonProps, labelProps, gridCellProps, rowProps } = useTag(
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
      {...mergeProps(rowProps, hoverProps, focusProps)}
      className={cx(styles.tag, {
        'focus-ring': isFocusVisible,
        'is-focused': isFocused,
        'is-hovered': isHovered,
        'is-removable': allowsRemoving,
      })}
      ref={ref}
    >
      <div className={cx(styles.tagCell)} {...gridCellProps}>
        {typeof children === 'string' ? <span>{children}</span> : children}
        {allowsRemoving && (
          <IconButton
            icon={<Close />}
            kind="minimal"
            size="small"
            className={styles.removeButton}
            {...props}
          />
        )}
      </div>
    </div>
  );
};
