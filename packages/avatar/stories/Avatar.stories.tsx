import type { StoryObj, StoryFn } from '@storybook/react';

import { Person } from '../../icons/src';
import { Avatar } from '../src';

export default {
  component: Avatar,
  title: 'Components/Avatar',
  description: 'An element that represents a user visually.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__AVATAR,
    },
  },
  argTypes: {
    size: {
      table: {
        category: 'Presentation',
      },
    },
  },
  decorators: [
    (StoryFn: StoryFn) => (
      <div
        style={{
          height: '100px',
          padding: '1rem 0',
        }}
      >
        <StoryFn />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof Avatar>;

export const DefaultIcon: Story = {
  args: {
    url: '',
    defaultIcon: Person,
  },
};

export const Image: Story = {
  args: {
    url: 'https://picsum.photos/id/1025/200/200',
    alt: 'Pugsy Darkly',
    defaultIcon: Person,
  },
};

export const Initials: Story = {
  args: {
    url: '',
    'aria-label': 'Lance Darkly',
    initials: 'LD',
  },
};

export const TinySize: Story = {
  args: {
    size: 'tiny',
    'aria-label': 'Lance Darkly',
    initials: 'LD',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    'aria-label': 'Claire Bravo',
    initials: 'CB',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
    'aria-label': 'Julia Darkly',
    initials: 'JD',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    'aria-label': 'Mike Rongers',
    initials: 'MR',
  },
};
