import type { NavigationTabProps } from './NavigationTab';
import type { TabListState } from '@react-stately/tabs';
import type { Node } from '@react-types/shared';
import type { AriaTabListProps } from '@react-types/tabs';
import type { ElementType } from 'react';

import { Chip } from '@launchpad-ui/chip';
import { Tooltip } from '@launchpad-ui/tooltip';
import { useTab, useTabList } from '@react-aria/tabs';
import { useResizeObserver, useValueEffect } from '@react-aria/utils';
import { useTabListState } from '@react-stately/tabs';
import { cx } from 'classix';
import { useCallback, useLayoutEffect, useRef } from 'react';

import styles from '../styles/Navigation.module.css';

import { NavigationTabsDropdown } from './NavigationTabsDropdown';

type NavigationTabsProps<T extends object> = Omit<AriaTabListProps<T>, 'selectedKey'> & {
  className?: string;
  kind?: 'primary' | 'secondary';
  'data-test-id'?: string;
  title: string;
};

const NavigationTabs = <T extends object>(props: NavigationTabsProps<T>) => {
  const {
    className,
    'data-test-id': testId = 'navigation-tabs',
    kind = 'primary',
    children,
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const state = useTabListState(props);

  const { tabListProps } = useTabList(props, state, ref);

  const [isCollapsed, setIsCollapsed] = useValueEffect(false);

  const checkShouldCollapse = useCallback(() => {
    function computeShouldCollapse() {
      if (!containerRef.current) {
        return false;
      }

      const nav = containerRef.current.querySelector('nav');

      return nav && nav.scrollWidth > nav.offsetWidth;
    }

    setIsCollapsed(function* () {
      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [containerRef, setIsCollapsed]);

  useLayoutEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse]);

  useResizeObserver({ ref: containerRef, onResize: checkShouldCollapse });

  return (
    <div className={cx(styles.Navigation, className)} data-test-id={testId}>
      <div className={styles['NavigationList-wrapper']} ref={containerRef}>
        {isCollapsed ? (
          <NavigationTabsDropdown state={state} />
        ) : (
          <nav
            {...tabListProps}
            aria-label={`${kind} navigation`}
            className={cx(styles.Nav, styles[`Nav--${kind}`])}
            data-test-id="nav"
            ref={ref}
          >
            {[...state.collection].map((item) => (
              <TabItem key={item.key} item={item} state={state} />
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

type TabItemProps<T extends object> = {
  item: Omit<Node<T>, 'props'> & {
    props?: NavigationTabProps<T, ElementType>;
  };
  state: TabListState<T>;
};

const TabItem = <T extends object>({ item, state }: TabItemProps<T>) => {
  const ref = useRef<HTMLElement>(null);

  const { as: Component = 'a', isNew, tooltip, onClick, isActive, ...itemProps } = item.props || {};

  const {
    // remove `aria-controls` since we don't render a tab panel for navigation tabs
    tabProps: { 'aria-controls': _ariaControls, 'aria-selected': _ariaSelected, ...tabProps },
  } = useTab(item, state, ref);

  const classes = cx(styles.NavItem, isActive && styles['is-active']);

  const tabItem = (
    <Component
      {...tabProps}
      {...itemProps}
      aria-selected={!!isActive}
      onClick={(e: MouseEvent) => (onClick ? onClick(e, { collapsed: false }) : null)}
      ref={ref}
      className={classes}
    >
      {isNew ? (
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <span className={styles['NavItem-name']}>
            {item.rendered}
            <Chip className={styles['NavItem-chip']} data-test-id="nav-item-chip" kind="new">
              New
            </Chip>
          </span>
        </div>
      ) : (
        <span className={styles['NavItem-name']}>{item.rendered}</span>
      )}
    </Component>
  );

  if (tooltip) {
    const centeredContent = <div className={styles['NavItem-tooltip']}>{tooltip}</div>;

    return (
      <Tooltip
        content={centeredContent}
        allowBoundaryElementOverflow
        targetClassName={styles['NavPopover-target']}
      >
        {tabItem}
      </Tooltip>
    );
  }

  return tabItem;
};

export { NavigationTabs };
export type { NavigationTabsProps, TabItemProps };
