import type { NavigationItemProps } from '../src';
import type { ComponentStoryObj, StoryFn } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { Navigation, NavigationItem, NavKind } from '../src';

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
  decorators: [
    (StoryFn: StoryFn) => (
      <MemoryRouter>
        <StoryFn />
      </MemoryRouter>
    ),
  ],
};

type Story = ComponentStoryObj<typeof Navigation<NavigationItemProps>>;

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
      },
      {
        name: 'Fourth',
        to: '/fourth',
      },
    ],
    children: (item) => <NavigationItem key={item.to} name={item.name} to={item.to} />,
  },
  parameters: {
    chromatic: { viewports: [320, 1200] },
  },
};

export const Secondary: Story = {
  args: {
    kind: NavKind.SECONDARY,
    children: [
      <NavigationItem key={1} name="First" to="/first" />,
      <NavigationItem key={2} name="Second" to="/second" />,
      <NavigationItem key={3} name="Third" to="/third" />,
      <NavigationItem key={4} name="Fourth" to="/fourth" />,
    ],
  },
};
