/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import type { AriaTagGroupProps } from '@react-aria/tag';

import { Button } from '@launchpad-ui/button';
import { FocusScope } from '@react-aria/focus';
import { TagKeyboardDelegate, useTagGroup } from '@react-aria/tag';
import { useId, useLayoutEffect, useResizeObserver, useValueEffect } from '@react-aria/utils';
import { ListCollection } from '@react-stately/list';
import { useTagGroupState } from '@react-stately/tag';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Tag } from './Tag';
import styles from './styles/Tag.module.css';

type TagGroupProps<T extends object> = AriaTagGroupProps<T> & {
  /** The label to display on the action button.  */
  actionLabel?: string;
  /** Handler that is called when the action button is pressed. */
  onAction?: () => void;
};

const TagGroup = <T extends object>(props: TagGroupProps<T>) => {
  const { allowsRemoving, onRemove, maxRows, children, actionLabel, onAction } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(maxRows != null);
  const state = useTagGroupState(props);
  const [tagState, setTagState] = useValueEffect({
    visibleTagCount: state.collection.size,
    showCollapseButton: false,
  });
  const keyboardDelegate = useMemo(
    () =>
      isCollapsed
        ? new TagKeyboardDelegate(
            new ListCollection([...state.collection].slice(0, tagState.visibleTagCount)),
            'ltr'
          )
        : new TagKeyboardDelegate(new ListCollection([...state.collection]), 'ltr'),
    [isCollapsed, state.collection, tagState.visibleTagCount]
  ) as TagKeyboardDelegate<T>;

  // Remove onAction from props so it doesn't make it into useGridList.
  delete props.onAction;
  const { tagGroupProps, labelProps, descriptionProps, errorMessageProps } = useTagGroup(
    { ...props, keyboardDelegate },
    state,
    tagsRef
  );
  const actionsId = useId();

  const updateVisibleTagCount = useCallback(() => {
    if (maxRows && maxRows > 0) {
      const computeVisibleTagCount = () => {
        const currContainerRef: HTMLDivElement | null = containerRef.current;
        const currTagsRef: HTMLDivElement | null = tagsRef.current;
        if (!currContainerRef || !currTagsRef) {
          return;
        }

        const tags = [...currTagsRef.children];
        const buttons = [...currContainerRef.querySelectorAll('button')];
        let currY = -Infinity;
        let rowCount = 0;
        let index = 0;
        const tagWidths = [];
        // Count rows and show tags until we hit the maxRows.
        for (const tag of tags) {
          const { width, y } = tag.getBoundingClientRect();

          if (y !== currY) {
            currY = y;
            rowCount++;
          }

          if (rowCount > maxRows) {
            break;
          }
          tagWidths.push(width);
          index++;
        }

        // Remove tags until there is space for the collapse button and action button (if present) on the last row.
        const buttonsWidth = buttons.reduce(
          (acc, curr) => (acc += curr.getBoundingClientRect().width),
          0
        );

        const containerEnd = currContainerRef.getBoundingClientRect()['right'];
        const lastTagEnd = tags[index - 1]?.getBoundingClientRect()['right'];
        let availableWidth = containerEnd - lastTagEnd;

        for (const tagWidth of tagWidths.reverse()) {
          if (availableWidth >= buttonsWidth || index <= 1 || index >= state.collection.size) {
            break;
          }
          availableWidth += tagWidth;
          index--;
        }
        return { visibleTagCount: index, showCollapseButton: index < state.collection.size };
      };

      setTagState(function* () {
        // Update to show all items.
        yield { visibleTagCount: state.collection.size, showCollapseButton: true };

        // Measure, and update to show the items until maxRows is reached.
        yield computeVisibleTagCount();
      });
    }
  }, [maxRows, setTagState, containerRef, state.collection.size]);

  useResizeObserver({ ref: containerRef, onResize: updateVisibleTagCount });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(updateVisibleTagCount, [children]);

  useEffect(() => {
    // Recalculate visible tags when fonts are loaded.
    document.fonts?.ready.then(() => updateVisibleTagCount());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let visibleTags = [...state.collection];
  if (maxRows != null && isCollapsed) {
    visibleTags = visibleTags.slice(0, tagState.visibleTagCount);
  }

  const handlePressCollapse = () => {
    // Prevents button from losing focus if focusedKey got collapsed.
    state.selectionManager.setFocusedKey(null);
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const showActions = tagState.showCollapseButton || (actionLabel && onAction);

  return (
    <FocusScope>
      <div ref={containerRef} className={styles.tagGroupContainer}>
        <div ref={tagsRef} {...tagGroupProps} className={styles.tagGroup}>
          {visibleTags.map((item) => (
            <Tag
              {...item.props}
              key={item.key}
              item={item}
              state={state}
              allowsRemoving={allowsRemoving}
              onRemove={onRemove}
            >
              {item.rendered}
            </Tag>
          ))}
        </div>
        {showActions && (
          <div
            role="group"
            id={actionsId}
            aria-label="Actions"
            aria-labelledby={`${tagGroupProps.id} ${actionsId}`}
            className={styles.tagGroupActions}
          >
            {tagState.showCollapseButton && (
              <Button
                kind="minimal"
                size="small"
                onClick={handlePressCollapse}
                className={styles.tagGroupActionButton}
              >
                {isCollapsed ? `Show all (${state.collection.size})` : 'Show less'}
              </Button>
            )}
            {actionLabel && onAction && (
              <Button
                kind="minimal"
                size="small"
                onClick={() => onAction?.()}
                className={styles.tagGroupActionButton}
              >
                {actionLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </FocusScope>
  );
};

export { TagGroup };
export type { TagGroupProps };
