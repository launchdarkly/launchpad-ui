import type { SelectTriggerProps } from '../src';
import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { Item, Section } from '@react-stately/collections';

import { MultiSelectTrigger, Select, SingleSelectTrigger } from '../src';

type Item = {
  id: string;
  name: string;
  description: string;
};

const FRUIT: Item[] = [
  {
    id: '1',
    name: 'Apple',
    description: 'This is a description',
  },
  {
    id: '2',
    name: 'Banana',
    description: 'This is a description',
  },
  {
    id: '3',
    name: 'Orange',
    description: 'This is a description',
  },
  {
    id: '4',
    name: 'Blueberry',
    description: 'This is a description',
  },
  {
    id: '5',
    name: 'Kiwi',
    description: 'This is a description',
  },
];

const VEGETABLES: Item[] = [
  {
    id: '6',
    name: 'Onion',
    description: 'This is a description',
  },
  {
    id: '7',
    name: 'Potato',
    description: 'This is a description',
  },
  {
    id: '8',
    name: 'Iceberg Lettuce',
    description: 'This is a description',
  },
];

const SECTIONED_ITEMS = [
  {
    name: 'Fruit',
    items: FRUIT,
  },
  {
    name: 'Vegetables',
    items: VEGETABLES,
  },
];

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
        {(item) => <Item textValue={item.name}>{item.name}</Item>}
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
          <Item textValue={item.name}>
            {item.name} <Chip>ID: {item.id}</Chip>
          </Item>
        )}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

const CustomSingleSelectTrigger = (props: SelectTriggerProps<Item>) => {
  const { state, buttonProps, innerRef } = props;

  const getRenderedSelected = () => {
    const items = state.selectedItems;

    if (!items) return 'Select option';

    return <span>{items[0].textValue}</span>;
  };
  return (
    <button {...buttonProps} ref={innerRef}>
      {getRenderedSelected()}
    </button>
  );
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
        {(item) => <Item textValue={item.name}>{item.name}</Item>}
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
              <Item textValue={item.name}>
                {item.name} <Chip>ID: {item.id}</Chip>
              </Item>
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
        {(item) => <Item>{item.name}</Item>}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

const CustomMultiSelectTrigger = (props: SelectTriggerProps<Item>) => {
  const { state, buttonProps, innerRef } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {(state.selectedItems || []).map(({ key, textValue }) => (
        <div
          style={{
            backgroundColor: '#efefef',
            marginRight: '5px',
            fontSize: '12px',
          }}
          key={key}
        >
          {textValue}
          <button style={{ marginLeft: '5px' }} onClick={() => state.selectionManager.select(key)}>
            x
          </button>
        </div>
      ))}
      <button {...buttonProps} ref={innerRef}>
        +
      </button>
    </div>
  );
};

export const MultiSelectWithCustomTrigger: Story = {
  render: () => {
    return (
      <Select
        label="Fruit"
        selectionMode="multiple"
        items={FRUIT}
        onSelectionChange={(keys) => console.log(Array.from(keys))}
        trigger={CustomMultiSelectTrigger}
      >
        {(item) => <Item textValue={item.name}>{item.name}</Item>}
      </Select>
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
          <Item textValue={item.name}>
            {item.name} <Chip>ID: {item.id}</Chip>
          </Item>
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
        {(item) => (
          <Item textValue={item.name}>
            {item.name} <Chip>ID: {item.id}</Chip>
          </Item>
        )}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};
