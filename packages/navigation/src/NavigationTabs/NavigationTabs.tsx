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

import { NavigationContext } from '../NavigationContext';
import styles from '../styles/Navigation.module.css';

type NavigationTabsProps<T extends object> = AriaTabListProps<T> & {
  className?: string;
  kind: 'primary' | 'secondary';
  'data-test-id'?: string;
};

const NavigationTabs = <T extends object>(props: NavigationTabsProps<T>) => {
  const { className, 'data-test-id': testId = 'navigation-tabs', kind, children } = props;

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const state = useTabListState(props);
  const { tabListProps } = useTabList(props, state, ref);

  const [shouldCollapse, setCollapse] = useValueEffect(false);

  const checkShouldCollapse = useCallback(() => {
    function computeShouldCollapse() {
      if (!containerRef.current) {
        return false;
      }

      const nav = containerRef.current.querySelector('nav');

      return nav && nav.scrollWidth > nav.offsetWidth;
    }

    setCollapse(function* () {
      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [containerRef, setCollapse]);

  useLayoutEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse]);

  useResizeObserver({ ref: containerRef, onResize: checkShouldCollapse });

  return (
    <NavigationContext.Provider
      value={{
        shouldCollapse,
        refs: {
          containerRef,
        },
      }}
    >
      <div className={cx(styles.Navigation, className)} data-test-id={testId}>
        <div className={styles['NavigationList-wrapper']} ref={containerRef}>
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
        </div>
      </div>
    </NavigationContext.Provider>
  );
};

type TabItemProps<T extends object> = {
  item: Omit<Node<T>, 'props'> & {
    props?: NavigationTabProps<T, ElementType>;
  };
  state: TabListState<T>;
};

const TabItem = <T extends object>({ item, state }: TabItemProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    isSelected,
    // remove `aria-controls` since we don't render a tab panel for navigation tabs
    tabProps: { 'aria-controls': ariaControls, ...tabProps },
  } = useTab(item, state, ref);

  const classes = cx(styles.NavItem, isSelected && styles['is-active']);

  const { as: Component = 'a', isNew, tooltip, ...itemProps } = item.props || {};

  const tabItem = (
    <Component {...tabProps} {...itemProps} ref={ref} className={classes}>
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
export type { NavigationTabsProps };
