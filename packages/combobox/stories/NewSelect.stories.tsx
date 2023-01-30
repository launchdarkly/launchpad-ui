import type { StoryObj } from '@storybook/react';

import { Select } from '../src/select/Select';

export default {
  component: Select,
  title: 'Components/NewSelect',
  description:
    'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__COMBOBOX,
    },
  },
};

type Story = StoryObj<typeof Select>;

export const WithDefaultTrigger: Story = {
  render: () => {
    return (
      <Select
        label="Multi"
        selectionMode="multiple"
        options={[
          {
            id: '1',
            name: 'Apple',
            testing: 1
          },
          {
            id: '2',
            name: 'Banana',
            testing: 1
          },
          {
            id: '3',
            name: 'Orange',
            testing: 1
          },
          {
            id: '4',
            name: 'Blueberry',
            testing: 1
          },
          {
            id: '5',
            name: 'Kiwi',
            testing: 1
          },
        ]}
        formatLabel={(items) => items.map(item => item.value.)}
        disabledKeys={['2']}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        isSelectableAll
        isClearable
      />
    );
  },
  parameters: { docs: { disable: false } },
};
