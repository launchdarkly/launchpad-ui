import type { TabListState } from '@react-stately/tabs';
import type { ItemProps, Node } from '@react-types/shared';
import type { AriaTabListProps } from '@react-types/tabs';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { Tooltip } from '@launchpad-ui/tooltip';
import { useTab, useTabList } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import { cx } from 'classix';
import { useRef } from 'react';

import styles from './styles/Navigation.module.css';

type NavigationTabsProps<T extends object> = AriaTabListProps<T> & {
  className?: string;
  kind: 'primary' | 'secondary';
  'data-test-id'?: string;
};

const NavigationTabs = <T extends object>(props: NavigationTabsProps<T>) => {
  const { className, 'data-test-id': testId = 'navigation-tabs', kind, ...rest } = props;

  const ref = useRef<HTMLDivElement>(null);
  const state = useTabListState(rest);
  const { tabListProps } = useTabList(props, state, ref);

  return (
    <div className={cx(styles.Navigation, className)} data-test-id={testId}>
      <div className={styles['NavigationList-wrapper']}>
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
  );
};

type TabItemProps<T extends object> = {
  item: Node<T>;
  state: TabListState<T>;
};

const TabItem = <T extends object>({ item, state }: TabItemProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { tabProps } = useTab(item, state, ref);
  const isSelected = state.selectedKey === item.key;

  const classes = cx(styles.NavItem, isSelected && styles['is-active']);
  console.log(item.props);
  const { as, ...itemProps } = item.props;
  const Component = as || 'a';

  const tabItem = (
    <Component {...tabProps} {...itemProps} ref={ref} className={classes}>
      {typeof item.rendered === 'string' ? (
        <span className={styles['NavItem-name']}>{item.rendered}</span>
      ) : (
        item.rendered
      )}
    </Component>
  );

  if (item.props.tooltip) {
    const centeredContent = <div className={styles['NavItem-tooltip']}>{item.props.tooltip}</div>;

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

type NavigationTabProps<T extends object, P extends ElementType> = ItemProps<T> & {
  as?: P;
  tooltip?: string;
};

const NavigationTab = <T extends object, P extends ElementType = 'a'>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props: NavigationTabProps<T, P> &
    Omit<ComponentPropsWithoutRef<P>, keyof NavigationTabProps<T, P>>
) => {
  return null;
};

NavigationTab.getCollectionNode = function* getCollectionNode<T extends object>(
  props: ItemProps<T>,
  context: any
) {
  const rendered = props.title || props.children;
  const textValue =
    props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';

  // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
  if (!textValue && !context?.suppressTextValueWarning) {
    console.warn(
      '<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.'
    );
  }

  yield {
    type: 'item',
    props: props,
    rendered,
    textValue,
    'aria-label': props['aria-label'],
    hasChildNodes: false,
  };
};

export { NavigationTabs, NavigationTab };
export type { NavigationTabsProps, NavigationTabProps };
