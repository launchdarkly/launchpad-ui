import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { useListData } from '@react-stately/data';

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
    const list = useListData({
      initialItems: [{ name: 'Aardvark' }, { name: 'Kangaroo' }, { name: 'Snake' }],
      initialSelectedKeys: ['Kangaroo'],
      getKey: (item) => item.name,
    });

    return (
      <Combobox label="Favorite Animal">
        <CollectionItem textValue="Red Panda" key="red panda">
          Red Panda <Chip>hello</Chip>
        </CollectionItem>
        <CollectionItem key="cat">Cat</CollectionItem>
        <CollectionItem key="dog">Dog</CollectionItem>
        <CollectionItem key="aardvark">Aardvark</CollectionItem>
        <CollectionItem key="kangaroo">
          Kangaroo <Chip>hello</Chip>
        </CollectionItem>
        <CollectionItem key="snake">Snake</CollectionItem>
      </Combobox>
    );
  },
  parameters: { docs: { disable: false } },
};
