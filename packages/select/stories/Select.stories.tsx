import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { Section } from '@react-stately/collections';

import { MultiSelectTrigger, Select, SingleSelectTrigger } from '../src';
import { SelectItem } from '../src/SelectItem';
import { FRUIT, SECTIONED_ITEMS } from '../src/__tests__/constants';
import { CustomMultiSelectTrigger, CustomSingleSelectTrigger } from '../src/__tests__/examples';

export default {
  component: Select,
  title: 'Components/Select',
  description:
    'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__SELECT,
    },
  },
};

type Story = StoryObj<typeof Select>;

export const SingleSelect: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="single"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
      >
        {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const SingleSelectWithCustomSelectedRender: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="single"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        trigger={(props) => (
          <SingleSelectTrigger {...props}>
            {({ selectedItems }) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {selectedItems[0].textValue}{' '}
                <Chip style={{ marginLeft: '5px' }}>ID: {selectedItems[0].key}</Chip>
              </span>
            )}
          </SingleSelectTrigger>
        )}
      >
        {(item) => (
          <SelectItem textValue={item.name}>
            {item.name} <Chip>ID: {item.id}</Chip>
          </SelectItem>
        )}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const SingleSelectWithCustomTrigger: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="single"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        trigger={CustomSingleSelectTrigger}
      >
        {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const SingleSelectWithSections: Story = {
  render: () => {
    return (
      <Select
        label="Produce"
        selectionMode="single"
        items={SECTIONED_ITEMS}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
      >
        {(section) => (
          <Section key={section.name} title={section.name} items={section.items}>
            {(item) => (
              <SelectItem textValue={item.name}>
                {item.name} <Chip>ID: {item.id}</Chip>
              </SelectItem>
            )}
          </Section>
        )}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const MultiSelect: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="multiple"
        items={FRUIT}
        disabledKeys={['2']}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        isSelectableAll
        isClearable
      >
        {(item) => <SelectItem>{item.name}</SelectItem>}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const MultiSelectWithCustomTrigger: Story = {
  render: () => {
    return (
      <>
        <p style={{ maxWidth: '600px' }}>
          LaunchPad&apos;s Select component accepts a custom trigger that can access/manage selected
          item state, and toggle the Select dropdown. In this example, we render each selected item
          with it&apos;s value and a button that allows you to remove the selected option. To add
          more items, we render a plus button that opens the dropdown.
        </p>
        <Select
          label="Fruit"
          selectionMode="multiple"
          items={FRUIT}
          onSelectionChange={(keys) => console.log(Array.from(keys))}
          trigger={CustomMultiSelectTrigger}
        >
          {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
        </Select>
      </>
    );
  },
  parameters: { docs: { disable: false } },
};

export const MultiSelectWithCustomSelectedRender: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="multiple"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        trigger={(props) => (
          <MultiSelectTrigger {...props}>
            {({ selectedItems }) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {selectedItems.map((item) => (
                  <Chip style={{ marginRight: '5px' }} key={item.key}>
                    {item.value.name}
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
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const MultiSelectWithSelectAll: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="multiple"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        isSelectableAll
        isClearable
        trigger={(props) => (
          <MultiSelectTrigger {...props}>
            {({ selectedItems }) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {selectedItems.map((item) => (
                  <Chip style={{ marginRight: '5px' }} key={item.key}>
                    {item.value.name}
                  </Chip>
                ))}
              </span>
            )}
          </MultiSelectTrigger>
        )}
      >
        {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const WithSelectItemRenderedAs: Story = {
  render: () => {
    return (
      <Select label="Fruit" selectionMode="single" items={FRUIT}>
        {(item) => <SelectItem textValue={item.name}>{item.name}</SelectItem>}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};
