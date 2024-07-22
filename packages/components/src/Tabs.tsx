import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { TabListProps, TabPanelProps, TabProps, TabsProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
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

const _Tabs = (props: TabsProps, ref: ForwardedRef<HTMLDivElement>) => {
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
 * Tabs organize content into multiple sections and allow users to navigate between them.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const Tabs = forwardRef(_Tabs);

const _TabList = <T extends object>(props: TabListProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
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
 * A TabList is used within Tabs to group tabs that a user can switch between.
 * The ids of the items within the `<TabList>` must match up with a corresponding item inside the `<TabPanels>`.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const TabList = (forwardRef as forwardRefType)(_TabList);

const _Tab = (props: TabProps, ref: ForwardedRef<HTMLDivElement>) => {
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
 * A Tab provides a title for an individual item within a TabList.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const Tab = forwardRef(_Tab);

const _TabPanel = (props: TabPanelProps, ref: ForwardedRef<HTMLDivElement>) => {
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

/**
 * A TabPanel provides the content for a tab.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const TabPanel = forwardRef(_TabPanel);

export { Tab, Tabs, TabList, TabPanel };
export type { TabProps, TabsProps, TabListProps, TabPanelProps };
