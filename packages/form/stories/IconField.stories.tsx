import type { StoryObj } from '@storybook/react';

import { Icon } from '../../icons/src';
import { IconField, TextField } from '../src';

export default {
  component: IconField,
  title: 'Components/Form/IconField',
  description: 'An IconField renders an icon placed next to a passed field."',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
    },
  },
};

type Story = StoryObj<typeof IconField>;

export const Default: Story = {
  args: {
    icon: <Icon name="info" />,
    children: <TextField id="Date" value="12/01/2022" />,
  },
};
