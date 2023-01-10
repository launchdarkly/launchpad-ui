import type { CollectionBase } from '@react-types/shared';
import type { ChangeEvent } from 'react';

import { Select } from '@launchpad-ui/form';
import { useListState } from '@react-stately/list';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { titlecase } from './utils';

const NavigationMenuSelect = <T extends object>(props: CollectionBase<T>) => {
  const state = useListState(props);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { to, onClick } = [...state.collection][e.target.selectedIndex].props;

      navigate(to);
      // We need to honor the signature of the `onClick` prop for NavigationItem in a collapsed state:
      // (e: MouseEvent, state: NavigationState) => void
      onClick?.(new MouseEvent('click'), {
        collapsed: true,
      });
    },
    [state.collection, navigate]
  );

  return (
    <Select onChange={onChange} data-test-id="navigation-menu-select">
      {[...state.collection].map(({ key, props }) => (
        <option
          key={key}
          value={props.to}
          id={props.id}
          // Adapted from https://github.com/remix-run/react-router/blob/main/packages/react-router-dom/index.tsx#L506-L510
          // ...recreate the `isActive` behavior of a NavLink to map the current route to the selected option
          selected={
            pathname === props.to ||
            (pathname.startsWith(props.to) && pathname.charAt(props.to.length) === '/')
          }
        >
          {props.name}
          {props.status ? ` (${titlecase(props.status)})` : undefined}
        </option>
      ))}
    </Select>
  );
};

export { NavigationMenuSelect };
