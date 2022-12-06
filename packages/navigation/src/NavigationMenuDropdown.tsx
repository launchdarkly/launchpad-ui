import type { CollectionBase } from '@react-types/shared';

import { Chip } from '@launchpad-ui/chip';
import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { useListState } from '@react-stately/list';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { titlecase } from './utils';

type NavigationMenuDropdownProps<T extends object> = CollectionBase<T> & {
  title: string;
};

const NavigationMenuDropdown = <T extends object>(props: NavigationMenuDropdownProps<T>) => {
  const state = useListState(props);
  const ref = useRef<HTMLDivElement>(null);
  // Track the width of the dropdown button so that we can set the menu content
  // to match: we'll apply this value as min-height to each menu item (so that
  // the menu item will be at least as wide as the dropdown button, but can
  // extend beyond it if necessary).
  const [dropdownButtonWidth, setDropdownButtonWidth] = useState<null | number>(null);

  useEffect(() => {
    const button = ref.current?.querySelector('button');

    if (!button) {
      return;
    }

    setDropdownButtonWidth(button.getBoundingClientRect().width);
  }, [setDropdownButtonWidth]);

  return (
    <div ref={ref}>
      <Dropdown placement="bottom-start">
        <DropdownButton data-test-id="navigation-menu-button">{props.title}</DropdownButton>
        <Menu>
          {[...state.collection].map((item) => (
            <MenuItem
              key={item.key}
              item={item.key}
              component={NavLink}
              to={item.props.to}
              onClick={item.props.onClick}
              style={{
                minWidth: `${dropdownButtonWidth}px`,
              }}
            >
              <div style={{ display: 'flex', gap: 'var(--lp-spacing-300)', alignItems: 'center' }}>
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
    </div>
  );
};

export { NavigationMenuDropdown };
export type { NavigationMenuDropdownProps };
