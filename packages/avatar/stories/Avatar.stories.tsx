import type { ComponentStoryObj } from '@storybook/react';

import { Person } from '../../icons/src';
import { IconSize } from '../../icons/src/types';
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
      defaultValue: IconSize.MEDIUM,
      table: {
        category: 'Presentation',
      },
    },
  },
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
