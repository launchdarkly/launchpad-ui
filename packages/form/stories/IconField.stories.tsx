import type { Story } from '@storybook/react';

import { Info } from '../../icons/src';
import { IconField, IconFieldProps, TextField } from '../src';

export default {
  component: IconField,
  title: 'Components/Form/IconField',
  description: 'An IconField renders an icon placed next to a passed field."',
};

const Template: Story<IconFieldProps> = (args) => <IconField {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: Info,
  children: <TextField id="Date" value="12/01/2022" />,
};
