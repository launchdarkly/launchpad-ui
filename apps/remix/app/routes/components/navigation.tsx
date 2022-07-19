import type { NavigationItemProps } from '@launchpad-ui/core';

import { Navigation, NavigationItem } from '@launchpad-ui/core';
import { MemoryRouter } from 'react-router-dom';

export default function Index() {
  return (
    <MemoryRouter>
      <Navigation
        items={[
          {
            name: 'First',
            to: '/first',
          },
          {
            name: 'Second',
            to: '/second',
          },
        ]}
        title="nav"
      >
        {(item: NavigationItemProps) => (
          <NavigationItem
            key={item.to}
            name={item.name}
            to={item.to}
            tooltip={item.tooltip}
            tooltipContent={item.tooltipContent}
            status={item.status}
          />
        )}
      </Navigation>
    </MemoryRouter>
  );
}
