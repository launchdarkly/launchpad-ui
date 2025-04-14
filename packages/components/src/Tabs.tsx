import type { Ref } from 'react';
import type {
	TabListProps as AriaTabListProps,
	TabPanelProps as AriaTabPanelProps,
	TabProps as AriaTabProps,
	TabsProps as AriaTabsProps,
	ContextValue,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Tab as AriaTab,
	TabList as AriaTabList,
	TabPanel as AriaTabPanel,
	Tabs as AriaTabs,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Tabs.module.css';
import { useLPContextProps } from './utils';

const tabListStyles = cva(styles.list);
const tabPanelStyles = cva(styles.panel);
const tabStyles = cva(styles.tab);
const tabsStyles = cva(styles.tabs);

interface TabsProps extends AriaTabsProps {
	ref?: Ref<HTMLDivElement>;
}

interface TabListProps<T extends object> extends AriaTabListProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface TabProps extends AriaTabProps {
	ref?: Ref<HTMLDivElement>;
}

interface TabPanelProps extends AriaTabPanelProps {
	ref?: Ref<HTMLDivElement>;
}

const TabsContext = createContext<ContextValue<TabsProps, HTMLDivElement>>(null);

/**
 * Tabs organize content into multiple sections and allow users to navigate between them.
 *
 * https://react-spectrum.adobe.com/react-aria/Tabs.html
 */
const Tabs = ({ ref, ...props }: TabsProps) => {
	[props, ref] = useLPContextProps(props, ref, TabsContext);
	return (
		<AriaTabs
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				tabsStyles({ ...renderProps, className }),
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
				tabListStyles({ ...renderProps, className }),
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
				tabStyles({ ...renderProps, className }),
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
				tabPanelStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export {
	Tab,
	Tabs,
	TabsContext,
	TabList,
	TabPanel,
	tabListStyles,
	tabPanelStyles,
	tabStyles,
	tabsStyles,
};
export type { TabProps, TabsProps, TabListProps, TabPanelProps };
