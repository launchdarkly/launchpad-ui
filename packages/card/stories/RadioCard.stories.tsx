import type { StoryObj } from '@storybook/react';

import { RadioCard } from '../src/RadioCard';

export default {
  component: RadioCard,
  title: 'Components/Card/RadioCard',
  description: 'A radio button with a label and optional image and subtext.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__RADIOCARD,
    },
  },
};

type Story = StoryObj<typeof RadioCard>;

const commonProps = {
  label: 'Label',
};

export const Simple: Story = {
  args: {
    ...commonProps,
  },
};

// export const Simple = Template.bind({});
// Simple.args = {
//   ...commonProps,
// };

// export const WithImage = Template.bind({});
// WithImage.args = {
//   ...commonProps,
//   imgSrc: 'img/swap-me.svg',
// };

// export const WithSubtext = Template.bind({});
// WithSubtext.args = {
//   ...commonProps,
//   subText:
//     'Provide a description for this feature that does not exceed the height of the adjacent graphic to maintain equal button heights.',
// };

// export const Selected = Template.bind({});
// Selected.args = {
//   ...commonProps,
//   subText:
//     'Provide a description for this feature that does not exceed the height of the adjacent graphic to maintain equal button heights.',
//   checked: true,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   ...commonProps,
//   subText:
//     'Provide a description for this feature that does not exceed the height of the adjacent graphic to maintain equal button heights.',
//   disabled: true,
// };
