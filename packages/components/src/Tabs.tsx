import type { RefObject } from 'react';
import type {
	TabListProps as AriaTabListProps,
	TabPanelProps as AriaTabPanelProps,
	TabProps as AriaTabProps,
	TabsProps as AriaTabsProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	Tab as AriaTab,
	TabList as AriaTabList,
	TabPanel as AriaTabPanel,
	Tabs as AriaTabs,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Tabs.module.css';

const list = cva(styles.list);
const panel = cva(styles.panel);
const tab = cva(styles.tab);
const tabs = cva(styles.tabs);

interface TabsProps extends AriaTabsProps {
	ref?: RefObject<HTMLDivElement | null>;
}

interface TabListProps<T extends object> extends AriaTabListProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}

interface TabProps extends AriaTabProps {
	ref?: RefObject<HTMLDivElement | null>;
}

interface TabPanelProps extends AriaTabPanelProps {
	ref?: RefObject<HTMLDivElement | null>;
}

/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const Tabs = ({ ref, ...props }: TabsProps) => {
	return (
		<AriaTabs
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabs({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A TabList is used within Tabs to group tabs that a user can switch between.
 * The ids of the items within the `<TabList>` must match up with a corresponding item inside the `<TabPanels>`.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const TabList = <T extends object>({ ref, ...props }: TabListProps<T>) => {
	return (
		<AriaTabList
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				list({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A Tab provides a title for an individual item within a TabList.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const Tab = ({ ref, ...props }: TabProps) => {
	return (
		<AriaTab
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tab({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A TabPanel provides the content for a tab.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const TabPanel = ({ ref, ...props }: TabPanelProps) => {
	return (
		<AriaTabPanel
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				panel({ ...renderProps, className }),
			)}
		/>
	);
};

export { Tab, Tabs, TabList, TabPanel };
export type { TabProps, TabsProps, TabListProps, TabPanelProps };
