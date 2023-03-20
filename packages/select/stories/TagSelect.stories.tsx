import type { StoryObj } from '@storybook/react';

import { SelectItem } from '../src';
import { TagSelect } from '../src/TagSelect';
import { FRUIT } from '../src/__tests__/constants';

export default {
  component: TagSelect,
  title: 'Components/Select/Tag',
  description:
    'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__SELECT,
    },
  },
};

type Story = StoryObj<typeof TagSelect>;

export const Filterable: Story = {
  render: () => {
    return (
      <TagSelect
        label="Fruit"
        defaultItems={FRUIT}
        hasFilter
        onSelectionChange={(keys) => console.log(Array.from(keys))}
      >
        {(item) => <SelectItem>{item.name}</SelectItem>}
      </TagSelect>
    );
  },
  parameters: { docs: { disable: false } },
};
