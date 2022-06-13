import type { Story } from '@storybook/react';

import { Radio, RadioProps } from '../src';

export default {
  component: Radio,
  title: 'Components/Form/Radio',
  description: 'A radio button allows the user to select one of a set of options."',
};

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'optionOne',
  value: 'Option One',
  checked: true,
};
