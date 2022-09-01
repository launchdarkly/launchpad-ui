import type { ComponentStoryObj, StoryFn } from '@storybook/react';

import { Person } from '../../icons/src';
import { Avatar, AvatarSize } from '../src';

export default {
  component: Avatar,
  title: 'Components/Avatar',
  description: 'An element that represents a user visually.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__AVATAR,
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

type Story = ComponentStoryObj<typeof Avatar>;

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
    size: AvatarSize.TINY,
    'aria-label': 'Lance Darkly',
    initials: 'LD',
  },
};

export const SmallSize: Story = {
  args: {
    size: AvatarSize.SMALL,
    'aria-label': 'Claire Bravo',
    initials: 'CB',
  },
};

export const MediumSize: Story = {
  args: {
    size: AvatarSize.MEDIUM,
    'aria-label': 'Julia Darkly',
    initials: 'JD',
  },
};

export const LargeSize: Story = {
  args: {
    size: AvatarSize.LARGE,
    'aria-label': 'Mike Rongers',
    initials: 'MR',
  },
};
