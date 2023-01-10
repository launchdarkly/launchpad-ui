import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';

import { CollectionItem, Combobox, Picker } from '../src';

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
      <Combobox label="Favorite Animal">
        <CollectionItem key="red panda">
          Red Panda <Chip>hello</Chip>
        </CollectionItem>
        <CollectionItem key="cat">Cat</CollectionItem>
        <CollectionItem key="dog">Dog</CollectionItem>
        <CollectionItem key="aardvark">Aardvark</CollectionItem>
        <CollectionItem key="kangaroo">Kangaroo</CollectionItem>
        <CollectionItem key="snake">Snake</CollectionItem>
      </Combobox>
    );
  },
  parameters: { docs: { disable: false } },
};

export const PickerExample: Story = {
  render: () => {
    return (
      <Picker label="Favorite Animal">
        <CollectionItem key="red panda">Red Panda</CollectionItem>
        <CollectionItem key="cat">Cat</CollectionItem>
        <CollectionItem key="dog">Dog</CollectionItem>
        <CollectionItem key="aardvark">Aardvark</CollectionItem>
        <CollectionItem key="kangaroo">Kangaroo</CollectionItem>
        <CollectionItem key="snake">Snake</CollectionItem>
      </Picker>
    );
  },
  parameters: { docs: { disable: false } },
};
