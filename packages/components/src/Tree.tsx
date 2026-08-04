import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import type {
	TreeItemProps as AriaTreeItemProps,
	TreeProps as AriaTreeProps,
	TreeItemContentProps,
	TreeItemContentRenderProps,
} from 'react-aria-components/Tree';
import {
	Tree as AriaTree,
	TreeItem as AriaTreeItem,
	TreeItemContent as AriaTreeItemContent,
} from 'react-aria-components/Tree';
import { cva } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { Button } from './Button';
import { CheckboxIcon, checkboxStyles } from './Checkbox';
import { useLPContextProps } from './utils';

import styles from './styles/Tree.module.css';

const treeStyles = cva(styles.tree);
const treeItemStyles = cva(styles.item);

interface TreeProps<T> extends AriaTreeProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface TreeItemProps<T> extends AriaTreeItemProps<T> {
	ref?: Ref<HTMLDivElement>;
}

// react-aria-components types this identically: `TreeContext: React.Context<ContextValue<TreeProps<any>, HTMLDivElement>>`
// (react-aria-components/dist/types/src/Tree.d.ts) — a context can't carry the open generic `T`, so RAC itself erases it to `any` here.
// oxlint-disable-next-line typescript/no-explicit-any -- mirrors react-aria-components' own TreeContext declaration (see comment above)
const TreeContext = createContext<ContextValue<TreeProps<any>, HTMLDivElement>>(null);

/**
 * A tree displays a hierarchical list of items that can be expanded and collapsed.
 */
const Tree = <T extends object>({ ref, ...props }: TreeProps<T>) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, TreeContext);
	return (
		<AriaTree
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				treeStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A TreeItemContent wrapper component that handles the chevron button and layout.
 */
function TreeItemContent(props: Omit<TreeItemContentProps, 'children'> & { children?: React.ReactNode }) {
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
