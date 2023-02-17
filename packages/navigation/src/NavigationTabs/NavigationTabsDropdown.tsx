import type { NavigationTabProps } from './NavigationTab';
import type { TabListState } from '@react-stately/tabs';
import type { FocusableElement, Node } from '@react-types/shared';
import type { ElementType } from 'react';

import { Chip } from '@launchpad-ui/chip';
import { Check } from '@launchpad-ui/icons';
import { Select, SelectItem } from '@launchpad-ui/select';
import { Tooltip } from '@launchpad-ui/tooltip';
import { useTab } from '@react-aria/tabs';
import { useObjectRef } from '@react-aria/utils';
import { forwardRef } from 'react';

import styles from '../styles/Navigation.module.css';

type NavigationTabsDropdownProps<T extends object> = {
  state: TabListState<T>;
};

const NavigationTabsDropdown = <T extends object>({ state }: NavigationTabsDropdownProps<T>) => {
  return (
    <nav aria-label="Navigation">
      <Select label="Fruit" selectionMode="single" selectedKeys={[state.selectedKey]}>
        {[...state.collection].map((item) => (
          <SelectItem
            as={TabItem}
            key={item.key}
            item={item}
            state={state}
            icon={item.key === state.selectedKey ? Check : undefined}
          >
            {item.rendered}
          </SelectItem>
        ))}
      </Select>
    </nav>
  );
};

type TabItemProps<T extends object> = {
  item: Omit<Node<T>, 'props'> & {
    props?: NavigationTabProps<T, ElementType>;
  };
  state: TabListState<T>;
};

const TabItem = forwardRef<FocusableElement | null, TabItemProps<object>>(
  ({ item, state }: TabItemProps<object>, ref) => {
    const objectRef = useObjectRef(ref);
    const {
      isSelected,
      // remove `aria-controls` since we don't render a tab panel for navigation tabs
      tabProps: { 'aria-controls': ariaControls, ...tabProps },
    } = useTab(item, state, objectRef);

    const { as: Component = 'a', isNew, tooltip, onClick, ...itemProps } = item.props || {};

    const tabItem = (
      <Component
        {...tabProps}
        {...itemProps}
        ref={objectRef}
        onClick={(e: MouseEvent) => (onClick ? onClick(e, { collapsed: true }) : null)}
      >
        <div
          style={{
            display: 'flex',
            gap: 'var(--lp-spacing-300)',
            alignItems: 'center',
          }}
        >
          {isSelected && <Check size="small" />}
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
        </div>
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
  }
);

TabItem.displayName = 'TabItem';

export { NavigationTabsDropdown };
