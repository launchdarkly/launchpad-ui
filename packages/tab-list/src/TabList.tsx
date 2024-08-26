import type { TabListState } from '@react-stately/tabs';
import type { ItemElement, Node } from '@react-types/shared';
import type { AriaTabListProps, AriaTabPanelProps } from '@react-types/tabs';
import type { ReactNode } from 'react';

import { useTab, useTabList, useTabPanel } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/TabList.module.css';

type TabListProps<T extends string | number> = AriaTabListProps<HTMLDivElement> & {
	/** The active Tab to show on render. The value passed in here should match the value of the active Tab's Item key. */
	activeTab?: T;
	/** CSS classes to pass into the TabList wrapper div. */
	className?: string;
	/** The children passed into the TabList. This is a react-stately Item with JSX children. */
	children: ItemElement<ReactNode> | ItemElement<ReactNode>[];
	/** Array of any disabled Tabs in the grouping. */
	disabledTabs?: string[];
	/** Called when the user clicks on a different tab */
	onChange?: (tab: T) => void;
	'data-test-id'?: string;
};

/**
 * @deprecated use `Tabs` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-navigation-tabs--docs
 */
const TabList = <T extends number | string>(props: TabListProps<T>) => {
	const {
		activeTab,
		className,
		disabledTabs,
		onChange,
		'data-test-id': testId = 'tab-list',
		...rest
	} = props;

	const ref = useRef<HTMLDivElement>(null);
	const state = useTabListState({
		selectedKey: activeTab,
		onSelectionChange: (val) => onChange?.(val as T),
		disabledKeys: disabledTabs,
		...rest,
	});
	const { tabListProps } = useTabList(props, state, ref);

	return (
		<div className={className} data-test-id={testId}>
			<div {...tabListProps} ref={ref} className={styles['TabList-list']}>
				{[...state.collection].map((item) => (
					<TabItem key={item.key} item={item} state={state} />
				))}
			</div>
			<TabItemPanel key={state.selectedItem?.key} state={state} />
		</div>
	);
};

type TabItemProps = {
	/** This is the react-stately data item. We use the key
	 * in the useTab hook to create tabProps to spread into
	 * the TabItem wrapper div and the rendered prop as the
	 * TabItem's children.
	 */
	item: Node<HTMLDivElement>;
	/** The state received from the useTabListState to pass
	 * into the useTab hook.
	 */
	state: TabListState<HTMLDivElement>;
	/** Is the TabItem disabled? */
	isDisabled?: boolean;
	/** classNames to pass into the TabItem wrapper div.
	 */
	className?: string;
};

const TabItem = ({ className, item: { key, rendered }, state }: TabItemProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { tabProps } = useTab({ key }, state, ref);
	const isSelected = state.selectedKey === key;

	const classes = cx(styles['TabList-item'], isSelected && styles['is-active'], className);

	return (
		<div {...tabProps} ref={ref} className={classes}>
			{rendered}
		</div>
	);
};

type TabItemPanelProps = AriaTabPanelProps & {
	/** The state received from the useTabListState to pass
	 * into the useTabPanel hook.
	 */
	state: TabListState<HTMLDivElement>;
};

const TabItemPanel = ({ state, ...props }: TabItemPanelProps) => {
	const ref = useRef(null);
	const { tabPanelProps } = useTabPanel(props, state, ref);

	return (
		<div {...tabPanelProps} ref={ref} className={styles['TabList-panel']}>
			{state.selectedItem?.props.children}
		</div>
	);
};

export { TabList };
export type { TabListProps };
