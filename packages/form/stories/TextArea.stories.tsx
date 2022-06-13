import type { Story } from '@storybook/react';

import { TextArea, TextAreaProps } from '../src';

export default {
  component: TextArea,
  title: 'Components/Form/TextArea',
  description: 'A styled form textarea component',
};

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'This is a text area field.',
};
