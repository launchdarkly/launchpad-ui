import type { NavigationItemProps } from '../src';
import type { ComponentStoryObj, Story } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';

import { Navigation, NavigationItem, NavKind } from '../src';

export default {
  component: Navigation,
  subcomponents: { NavigationItem },
  title: 'Components/Navigation',
  description: 'An element used to provide navigation links to help users move through an app.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__NAVIGATION,
    },
    chromatic: { viewports: [320, 1200] },
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
    (Story: Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type StoryType = ComponentStoryObj<typeof Navigation<NavigationItemProps>>;

export const Primary: StoryType = {
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
};

export const Secondary: StoryType = {
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
