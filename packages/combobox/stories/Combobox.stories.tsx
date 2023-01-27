import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { Item } from '@react-stately/collections';

import { Combobox } from '../src';

export default {
  component: Combobox,
  title: 'Components/Combobox',
  description:
    'A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__COMBOBOX,
    },
  },
};

type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: () => {
    return (
      <Combobox
        label="Favorite Animal"
        onSelectionChange={(key) => {
          console.log(key);
        }}
      >
        <Item textValue="Red Panda" key="red panda">
          Red Panda <Chip>hello</Chip>
        </Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item textValue="Kangaroo" key="kangaroo">
          Kangaroo <Chip>hello</Chip>
        </Item>
        <Item key="snake">Snake</Item>
      </Combobox>
    );
  },
  parameters: { docs: { disable: false } },
};
