import type { NavProps } from './Nav';
import type { CollectionBase } from '@react-types/shared';
import type { MouseEvent } from 'react';

import { useListState } from '@react-stately/list';

import { Nav } from './Nav';
import { NavItem } from './NavItem';
import { NavItemWithTooltip } from './NavItemWithTooltip';
import { useNavigationContext } from './NavigationContext';
import { NavigationMenuDropdown } from './NavigationMenuDropdown';
import styles from './styles/Navigation.module.css';

type NavigationListProps<T extends object> = CollectionBase<T> & {
  title: string;
  kind?: NavProps['kind'];
};

const NavigationList = <T extends object>({
  kind = 'primary',
  title,
  ...rest
}: NavigationListProps<T>) => {
  const state = useListState(rest);

  const { shouldCollapse, refs } = useNavigationContext();

  return (
    <div className={styles['NavigationList-wrapper']} ref={refs.wrapperRef}>
      {shouldCollapse ? (
        <NavigationMenuDropdown aria-label={title} {...rest} />
      ) : (
        <Nav kind={kind} ref={refs.itemListRef}>
          {[...state.collection].map((item) => {
            const onClick = (e: MouseEvent) => {
              item.props.onItemSelected?.(e, {
                isCollapsed: true,
              });
              item.props.onClick?.(e);
            };

            return item.props.tooltip ? (
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
                onClick={onClick}
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
                onClick={onClick}
                end={item.props.end}
              />
            );
          })}
        </Nav>
      )}
    </div>
  );
};

export { NavigationList };
export type { NavigationListProps };
