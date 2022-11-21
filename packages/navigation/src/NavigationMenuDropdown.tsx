import type { CollectionBase } from '@react-types/shared';

import { Chip } from '@launchpad-ui/chip';
import { Dropdown, DropdownButton } from '@launchpad-ui/dropdown';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { useListState } from '@react-stately/list';
import { NavLink } from 'react-router-dom';

import { titlecase } from './utils';

type NavigationMenuDropdownProps<T extends object> = CollectionBase<T> & {
  title: string;
};

const NavigationMenuDropdown = <T extends object>(props: NavigationMenuDropdownProps<T>) => {
  const state = useListState(props);

  return (
    <Dropdown>
      <DropdownButton data-test-id="navigation-menu-button">{props.title}</DropdownButton>
      <Menu>
        {[...state.collection].map((item) => (
          <MenuItem
            key={item.key}
            item={item.key}
            component={NavLink}
            to={item.props.to}
            onClick={item.props.onClick}
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
  );
};

export { NavigationMenuDropdown };
export type { NavigationMenuDropdownProps };
