import type { NavigationItemProps } from '@launchpad-ui/core';

import { Navigation, NavigationItem } from '@launchpad-ui/core';

export default function Index() {
  return (
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
        {
          name: 'Third',
          to: '/third',
        },
        {
          name: 'Fourth',
          to: '/fourth',
        },
        {
          name: 'Fifth',
          to: '/fifth',
        },
        {
          name: 'Sixth',
          to: '/sixth',
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
  );
}
