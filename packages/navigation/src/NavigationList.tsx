import type { NavigationProps } from './Navigation';
import type { CollectionBase } from '@react-types/shared';
import type { MouseEvent } from 'react';

import { useListState } from '@react-stately/list';
import { cx } from 'classix';

import { NavItem } from './NavItem';
import { NavItemWithTooltip } from './NavItemWithTooltip';
import { useNavigationContext } from './NavigationContext';
import { NavigationMenuDropdown } from './NavigationMenuDropdown';
import styles from './styles/Navigation.module.css';

type NavigationListProps<T extends object> = CollectionBase<T> & {
  title: string;
  kind?: NavigationProps<T>['kind'];
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
        <NavigationMenuDropdown kind={kind} title={title} {...rest} />
      ) : (
        <nav
          aria-label={`${kind} navigation`}
          className={cx(styles.Nav, styles[`Nav--${kind}`])}
          data-test-id="nav"
          ref={refs.itemListRef}
        >
          {[...state.collection].map((item) => {
            const onClick = (e: MouseEvent) => {
              item.props.onClick?.(e, {
                collapsed: false,
              });
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
        </nav>
      )}
    </div>
  );
};

export { NavigationList };
export type { NavigationListProps };
