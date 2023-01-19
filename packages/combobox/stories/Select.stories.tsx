import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';

import { CollectionItem, Select } from '../src';

export default {
  component: Select,
  title: 'Components/Select',
  description:
    'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__COMBOBOX,
    },
  },
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    return (
      <Select label="Favorite Animal">
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
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};
