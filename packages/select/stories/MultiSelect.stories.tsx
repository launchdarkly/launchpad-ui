import type { Key } from '@react-types/shared';
import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { useState } from 'react';

import { FRUIT } from '../__tests__/constants';
import { CustomMultiSelectTrigger } from '../__tests__/examples';
import { MultiSelectTrigger, MultiSelect, SelectItem } from '../src';

export default {
  component: MultiSelect,
  title: 'Components/Select/Multi',
  description:
    'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__SELECT,
    },
  },
};

type Story = StoryObj<typeof MultiSelect>;

export const Basic: Story = {
  render: () => {
    return (
      <MultiSelect
        label="Fruit"
        items={FRUIT}
        disabledKeys={['2']}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        isSelectableAll
        isClearable
      >
        {(item) => <SelectItem>{item.name}</SelectItem>}
      </MultiSelect>
    );
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

export const Filterable: Story = {
  render: () => {
    return (
      <MultiSelect
        label="Fruit"
        defaultItems={FRUIT}
        hasFilter
        onSelectionChange={(keys) => console.log(Array.from(keys))}
      >
        {(item) => <SelectItem>{item.name}</SelectItem>}
      </MultiSelect>
    );
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

export const WithCustomTrigger: Story = {
  render: () => {
    return (
      <>
        <p style={{ maxWidth: '600px' }}>
          LaunchPad&apos;s Select component accepts a custom trigger that can access/manage selected
          item state, and toggle the Select dropdown. In this example, we render each selected item
          with it&apos;s value and a button that allows you to remove the selected option. To add
          more items, we render a plus button that opens the dropdown.
        </p>
        <MultiSelect
          label="Fruit"
          defaultItems={FRUIT}
          hasFilter
          onSelectionChange={(keys) => console.log(Array.from(keys))}
          trigger={CustomMultiSelectTrigger}
        >
          {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
        </MultiSelect>
      </>
    );
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

export const MultiSelectWithCustomSelectedRender: Story = {
  render: () => {
    return (
      <MultiSelect
        label="Fruit"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        trigger={(props) => (
          <MultiSelectTrigger {...props}>
            {({ selectedItems }) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {selectedItems.map((item) => (
                  <Chip style={{ marginRight: '5px' }} key={item?.key}>
                    {item?.value?.name}
                  </Chip>
                ))}
              </span>
            )}
          </MultiSelectTrigger>
        )}
      >
        {(item) => (
          <SelectItem textValue={item.name}>
            {item.name} <Chip>ID: {item.id}</Chip>
          </SelectItem>
        )}
      </MultiSelect>
    );
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

export const MultiSelectWithSelectAll: Story = {
  render: () => {
    return (
      <MultiSelect
        label="Fruit"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        isSelectableAll
        isClearable
        trigger={(props) => (
          <MultiSelectTrigger {...props}>
            {({ selectedItems }) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {selectedItems.map((item) => (
                  <Chip style={{ marginRight: '5px' }} key={item?.key}>
                    {item?.value?.name}
                  </Chip>
                ))}
              </span>
            )}
          </MultiSelectTrigger>
        )}
      >
        {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
      </MultiSelect>
    );
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

export const WithControlledSelectedKeys: Story = {
  render: () => {
    const ControlledSelectComponent = () => {
      const [selectedKeys, setSelectedKeys] = useState<Iterable<Key>>(['3']);

      return (
        <MultiSelect
          label="Fruit"
          items={FRUIT}
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => setSelectedKeys(keys)}
        >
          {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
        </MultiSelect>
      );
    };

    return <ControlledSelectComponent />;
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};

export const WithUncontrolledItems: Story = {
  render: () => {
    return (
      <MultiSelect label="Fruit" defaultItems={FRUIT}>
        {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
      </MultiSelect>
    );
  },
  parameters: {
    docs: { disable: false },
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};
