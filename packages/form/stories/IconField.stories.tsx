import type { ComponentStoryObj } from '@storybook/react';

import { Info } from '../../icons/src';
import { IconField, TextField } from '../src';

export default {
  component: IconField,
  title: 'Components/Form/IconField',
  description: 'An IconField renders an icon placed next to a passed field."',
};

type Story = ComponentStoryObj<typeof IconField>;

export const Default: Story = {
  args: {
    icon: Info,
    children: <TextField id="Date" value="12/01/2022" />,
  },
};
