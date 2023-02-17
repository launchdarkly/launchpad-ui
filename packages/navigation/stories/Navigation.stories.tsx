import type { NavigationItemProps } from '../src';
import type { StoryObj } from '@storybook/react';
import type { HTMLAttributes, ReactNode } from 'react';

import { forwardRef } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Navigation, NavigationItem } from '../src';
import { NavigationTab, NavigationTabs } from '../src/NavigationTabs';

export default {
  component: Navigation,
  subcomponents: { NavigationItem },
  title: 'Components/Navigation',
  description: 'An element used to provide navigation links to help users move through an app.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__NAVIGATION,
    },
  },
  argTypes: {
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
  },
  decorators: [(storyFn: () => ReactNode) => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

type Story = StoryObj<typeof Navigation<NavigationItemProps>>;

export const Primary: Story = {
  args: {
    title: 'Page menu',
    items: [
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
        tooltip: true,
      },
      {
        name: 'Fourth',
        to: '/fourth',
        status: 'new',
      },
    ],
    children: (item) => <NavigationItem key={item.to} {...item} />,
  },
  parameters: {
    chromatic: { viewports: [320, 1200] },
  },
};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    children: [
      <NavigationItem key={1} name="First" to="/first" />,
      <NavigationItem key={2} name="Second" to="/second" />,
      <NavigationItem key={3} name="Third" to="/third" />,
      <NavigationItem key={4} name="Fourth" to="/fourth" />,
    ],
  },
};

const Link = forwardRef<
  HTMLAnchorElement,
  HTMLAttributes<HTMLAnchorElement> & {
    to: string;
  }
>(({ to, children, ...rest }, ref) => {
  return (
    <a ref={ref} href={to} {...rest}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export const AsNavigationTabs: Story = {
  render: () => {
    return (
      <NavigationTabs kind="primary" selectedKey="fourth">
        <NavigationTab key="first" as={Link} to="/first">
          First
        </NavigationTab>
        <NavigationTab key="second" href="/second">
          Second
        </NavigationTab>
        <NavigationTab key="third" href="/third">
          Third
        </NavigationTab>
        <NavigationTab key="fourth" href="/fourth">
          Fourth
        </NavigationTab>
      </NavigationTabs>
    );
  },
};
