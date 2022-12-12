import type { CollectionBase } from '@react-types/shared';
import type { ChangeEvent } from 'react';

import { Select } from '@launchpad-ui/form';
import { useListState } from '@react-stately/list';
import { useLocation, useNavigate } from 'react-router-dom';

import { titlecase } from './utils';

type NavigationMenuDropdownProps<T extends object> = CollectionBase<T>;

const NavigationMenuDropdown = <T extends object>(props: CollectionBase<T>) => {
  const state = useListState(props);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Select
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        const { selectedIndex } = e.target;
        const selectedItem = [...state.collection][selectedIndex];

        selectedItem.props.onItemSelected?.(null, {
          isCollapsed: true,
        });
        navigate(selectedItem.props.to);
      }}
    >
      {[...state.collection].map((item) => (
        <option
          value={item.props.to}
          data-wat={item.props}
          key={item.props.name}
          //selected={pathname === item.props.to}
          selected={pathname.startsWith(item.props.to)}
        >
          {`${item.props.name}${item.props.status ? ` (${titlecase(item.props.status)})` : ''}`}
        </option>
      ))}
    </Select>
  );
};

export { NavigationMenuDropdown };
export type { NavigationMenuDropdownProps };
