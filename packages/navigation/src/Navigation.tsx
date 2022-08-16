import type { NavItemProps } from './NavItem';
import type { NavItemWithTooltipProps } from './NavItemWithTooltip';
import type { CollectionBase } from '@react-types/shared';
import type { ReactElement, RefObject } from 'react';

import { Chip } from '@launchpad-ui/chip';
import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { useResizeObserver, useValueEffect } from '@react-aria/utils';
import { useListState } from '@react-stately/list';
import cx from 'clsx';
import { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from './Nav';
import { NavItem } from './NavItem';
import { NavItemWithTooltip } from './NavItemWithTooltip';
import './styles/Navigation.css';
import { NavKind } from './types';
import { titlecase, useMediaQuery } from './utils';

type NavigationContext = {
  shouldCollapse: boolean;
  refs: {
    wrapperRef: RefObject<HTMLDivElement>;
    itemListRef: RefObject<HTMLDivElement>;
  };
};

const NavigationContext = createContext<NavigationContext | undefined>(undefined);

const useNavigationContext = () => {
  const context = useContext(NavigationContext);

  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationContext provider');
  }

  return context;
};

type NavigationMenuButtonProps<T extends object> = CollectionBase<T> & {
  title: string;
};

const NavigationMenuButton = <T extends object>(props: NavigationMenuButtonProps<T>) => {
  const state = useListState(props);

  return (
    <Dropdown>
      <DropdownButton>{props.title}</DropdownButton>
      <Menu>
        {[...state.collection].map((item) => (
          <MenuItem
            key={item.key}
            item={item.key}
            component={NavLink}
            to={item.props.to}
            onClick={item.props.onClick}
          >
            <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
              <div>{item.props.name}</div>
              {item.props.status ? (
                <div>
                  <Chip kind={item.props.status}>{titlecase(item.props.status)}</Chip>
                </div>
              ) : undefined}
            </div>
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
};

type NavigationItemProps = NavItemProps &
  NavItemWithTooltipProps & {
    tooltip?: boolean | ReactElement;
  };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavigationItem = (_props: NavigationItemProps) => {
  return null;
};

NavigationItem.getCollectionNode = function* (props: NavigationItemProps) {
  yield {
    type: 'item',
    props,
    'aria-label': props.name,
    hasChildNodes: false,
  };
};

type NavigationListProps<T extends object> = CollectionBase<T> & {
  title: string;
  kind?: NavKind;
};

const NavigationList = <T extends object>(props: NavigationListProps<T>) => {
  const state = useListState(props);
  const { kind = NavKind.PRIMARY, title } = props;
  const { shouldCollapse, refs } = useNavigationContext();

  return (
    <div className="NavigationList-wrapper" ref={refs.wrapperRef}>
      {shouldCollapse ? (
        <NavigationMenuButton {...props} aria-label={title} />
      ) : (
        <Nav kind={kind} ref={refs.itemListRef}>
          {[...state.collection].map((item) =>
            item.props.tooltip ? (
              <NavItemWithTooltip
                key={item.key}
                to={item.props.to}
                id={item.props.id}
                name={item.props.name}
                role={item.props.role}
                aria-controls={item.props['aria-controls']}
                tooltipContent={
                  typeof item.props.tooltip === 'boolean' ? undefined : item.props.tooltip
                }
                tooltipOffset={item.props.tooltipOffset}
                tooltipPlacement={item.props.tooltipPlacement}
                onClick={item.props.onClick}
                end={item.props.end}
              />
            ) : (
              <NavItem
                key={item.key}
                to={item.props.to}
                id={item.props.id}
                name={item.props.name}
                status={item.props.status}
                role={item.props.role}
                aria-controls={item.props['aria-controls']}
                onClick={item.props.onClick}
                end={item.props.end}
              />
            )
          )}
        </Nav>
      )}
    </div>
  );
};

type NavigationProps<T extends object> = CollectionBase<T> & {
  title: string;
  kind?: NavKind;
  role?: string; // are these things even tabs? they don't actually behave like real tabs…
};

const Navigation = <T extends object>(props: NavigationProps<T>) => {
  const { children } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemListRef = useRef<HTMLDivElement>(null);
  const [shouldCollapse, setCollapse] = useValueEffect(false);

  const isWideViewport = useMediaQuery('(min-width: 740px)');

  // From react-spectrum: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/tabs/src/Tabs.tsx#L82
  const checkShouldCollapse = useCallback(() => {
    function computeShouldCollapse() {
      if (!wrapperRef.current || !itemListRef.current) {
        return false;
      }

      // This is where we're explicitly tied to NavItem
      const tabs = itemListRef.current.querySelectorAll('.NavItem');
      const lastTab = tabs[tabs.length - 1];

      const containerEdge = wrapperRef.current.getBoundingClientRect().right;
      const lastTabEdge = lastTab.getBoundingClientRect().right;

      return containerEdge < lastTabEdge;
    }

    setCollapse(function* () {
      if (isWideViewport) {
        yield false;
        return;
      }

      // Make Tabs render in non-collapsed state
      yield false;

      // Compute if Tabs should collapse and update
      yield computeShouldCollapse();
    });
  }, [wrapperRef, itemListRef, isWideViewport, setCollapse]);

  useEffect(() => {
    checkShouldCollapse();
  }, [children, checkShouldCollapse, isWideViewport]);

  useResizeObserver({ ref: wrapperRef, onResize: checkShouldCollapse });

  return (
    <div className={cx('Navigation', { 'Navigation--collapsed': shouldCollapse })}>
      <NavigationContext.Provider
        value={{
          shouldCollapse,
          refs: {
            wrapperRef,
            itemListRef,
          },
        }}
      >
        <NavigationList {...props} />
      </NavigationContext.Provider>
    </div>
  );
};

export { Navigation, NavigationItem, NavigationList, NavigationMenuButton };
export type {
  NavigationProps,
  NavigationItemProps,
  NavigationListProps,
  NavigationMenuButtonProps,
};
