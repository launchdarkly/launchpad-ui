import type { Ref } from 'react';
import type {
	TreeItemProps as AriaTreeItemProps,
	TreeProps as AriaTreeProps,
	ContextValue,
	TreeItemContentProps,
	TreeItemContentRenderProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Tree as AriaTree,
	TreeItem as AriaTreeItem,
	TreeItemContent as AriaTreeItemContent,
	composeRenderProps,
} from 'react-aria-components';

import { Button } from './Button';
import { CheckboxIcon, checkboxStyles } from './Checkbox';
import styles from './styles/Tree.module.css';
import { useLPContextProps } from './utils';

const treeStyles = cva(styles.tree);
const treeItemStyles = cva(styles.item);

interface TreeProps<T> extends AriaTreeProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface TreeItemProps<T> extends AriaTreeItemProps<T> {
	ref?: Ref<HTMLDivElement>;
}

// biome-ignore lint/suspicious/noExplicitAny: ignore
const TreeContext = createContext<ContextValue<TreeProps<any>, HTMLDivElement>>(null);

/**
 * A tree displays a hierarchical list of items that can be expanded and collapsed.
 */
const Tree = <T extends object>({ ref, ...props }: TreeProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, TreeContext, 'Tree');
	return (
		<AriaTree
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				treeStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A TreeItemContent wrapper component that handles the chevron button and layout.
 */
function TreeItemContent(
	props: Omit<TreeItemContentProps, 'children'> & { children?: React.ReactNode },
) {
	return (
		<AriaTreeItemContent>
			{({
				hasChildItems,
				isExpanded,
				selectionBehavior,
				selectionMode,
				isSelected,
				isDisabled,
			}: TreeItemContentRenderProps) => (
				<>
					{hasChildItems && (
						<Button slot="chevron" variant="minimal" size="small" className={styles.chevron}>
							<Icon name={isExpanded ? 'chevron-down' : 'chevron-right'} size="small" />
						</Button>
					)}
					{selectionBehavior === 'toggle' && selectionMode === 'multiple' && (
						<div
							className={checkboxStyles()}
							data-selected={isSelected || undefined}
							data-disabled={isDisabled || undefined}
						>
							<CheckboxIcon isSelected={isSelected} />
						</div>
					)}
					<div className={styles.content}>{props.children}</div>
				</>
			)}
		</AriaTreeItemContent>
	);
}

/**
 * A TreeItem represents an individual item in a Tree.
 */
const TreeItem = <T extends object>({ ref, ...props }: TreeItemProps<T>) => {
	return (
		<AriaTreeItem
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				treeItemStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { Tree, TreeContext, TreeItem, TreeItemContent, treeStyles, treeItemStyles };
export type { TreeProps, TreeItemProps, TreeItemContentProps, TreeItemContentRenderProps };
