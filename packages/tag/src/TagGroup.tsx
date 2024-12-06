import type { AriaTagGroupProps } from '@react-aria/tag';
import type { Key } from '@react-types/shared';
import type { JSX } from 'react';
import type { TagGroupActionProps } from './types';

import { Button } from '@launchpad-ui/button';
import { FocusScope } from '@react-aria/focus';
import { ListKeyboardDelegate } from '@react-aria/selection';
import { useTagGroup } from '@react-aria/tag';
import { useId, useLayoutEffect, useResizeObserver, useValueEffect } from '@react-aria/utils';
import { ListCollection, useListState } from '@react-stately/list';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Tag } from './Tag';
import styles from './styles/Tag.module.css';

type TagGroupProps<T extends object> = AriaTagGroupProps<T> & {
	/** render prop for passing a custom action to the tag group */
	action?: (props: TagGroupActionProps<T>) => JSX.Element;

	/** Control if action is hidden when list is empty */
	hideActionWhenEmpty?: boolean;

	'data-test-id'?: string;

	/** Handle when the tag is clicked and styles the tag as interactive.  */
	onTagClick?: (key: Key) => void;

	size?: 'tiny' | 'small';

	/** Limit the number of rows initially shown. This will render a button that allows the user to expand to show all tags. */
	maxRows?: number;
};

/**
 * @deprecated use `TagGroup` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-collections-taggroup--docs
 */
const TagGroup = <T extends object>(props: TagGroupProps<T>) => {
	const {
		onRemove,
		maxRows,
		children,
		action,
		hideActionWhenEmpty,
		onTagClick,
		'data-test-id': testId = 'tag-group',
		size = 'small',
	} = props;
	const containerRef = useRef<HTMLDivElement>(null);
	const tagsRef = useRef<HTMLDivElement>(null);
	const [isCollapsed, setIsCollapsed] = useState(maxRows != null);
	const state = useListState(props);
	const [tagState, setTagState] = useValueEffect({
		visibleTagCount: state.collection.size,
		showCollapseButton: false,
	});

	/* c8 ignore start */
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const keyboardDelegate = useMemo(() => {
		const collection = isCollapsed
			? new ListCollection([...state.collection].slice(0, tagState.visibleTagCount))
			: new ListCollection([...state.collection]);
		return new ListKeyboardDelegate({
			collection,
			ref: tagsRef,
		});
	}, [isCollapsed, state.collection, tagState.visibleTagCount, tagsRef]) as ListKeyboardDelegate<T>;

	// Remove onAction from props so it doesn't make it into useGridList.
	const { action: _action, ...useTagGroupProps } = props;
	const { gridProps } = useTagGroup({ ...useTagGroupProps, keyboardDelegate }, state, tagsRef);
	const actionsId = useId();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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
				let currY = Number.NEGATIVE_INFINITY;
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
					// biome-ignore lint/style/noParameterAssign: <explanation>
					// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
					(acc, curr) => (acc += curr.getBoundingClientRect().width),
					0,
				);

				const containerEnd = currContainerRef.getBoundingClientRect().right;
				const lastTagEnd = tags[index - 1]?.getBoundingClientRect().right;
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
	useLayoutEffect(updateVisibleTagCount, [children]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Recalculate visible tags when fonts are loaded.
		document.fonts?.ready.then(() => updateVisibleTagCount());
	}, []);

	let visibleTags = [...state.collection];
	if (maxRows != null && isCollapsed) {
		visibleTags = visibleTags.slice(0, tagState.visibleTagCount);
	}

	/* c8 ignore stop */

	const handlePressCollapse = () => {
		// Prevents button from losing focus if focusedKey got collapsed.
		state.selectionManager.setFocusedKey(null);
		setIsCollapsed((prevCollapsed) => !prevCollapsed);
	};

	const isEmpty = state.collection.size === 0;
	const showCustomAction = !(hideActionWhenEmpty && isEmpty) && !!action;
	const showActions = tagState.showCollapseButton || showCustomAction;
	const customAction = showCustomAction && action({ state, size });

	const collapseLabel = isCollapsed ? `Show all (${state.collection.size})` : 'Show less';

	return (
		<FocusScope>
			<div ref={containerRef} className={styles.tagGroupContainer} data-test-id={testId}>
				<div ref={tagsRef} {...gridProps} className={styles.tagGroup} data-test-id="tag-list">
					{visibleTags.map((item) => (
						<Tag
							{...item.props}
							key={item.key}
							item={item}
							state={state}
							onRemove={onRemove}
							size={size}
							onClick={onTagClick}
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
						aria-labelledby={`${gridProps.id} ${actionsId}`}
						className={styles.tagGroupActions}
						data-test-id="tag-actions"
					>
						<>
							{tagState.showCollapseButton && (
								<Button
									size={size}
									kind="minimal"
									data-test-id="tag-group-collapse-action-btn"
									onClick={handlePressCollapse}
									aria-label={collapseLabel}
								>
									{collapseLabel}
								</Button>
							)}
							{customAction}
						</>
					</div>
				)}
			</div>
		</FocusScope>
	);
};

export { TagGroup };
export type { TagGroupProps };
