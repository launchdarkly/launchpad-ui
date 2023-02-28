import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { Item, Section } from '@react-stately/collections';

import { SingleSelect, SingleSelectTrigger } from '../src';
import { FRUIT, SECTIONED_ITEMS } from '../src/__tests__/constants';
import { CustomSingleSelectTrigger } from '../src/__tests__/examples';

export default {
  component: SingleSelect,
  title: 'Components/Select/Single',
  description:
    'A Select combines a text input with a listbox, allowing users to filter a list of options to items matching a query.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__SELECT,
    },
  },
};

type Story = StoryObj<typeof SingleSelect>;

export const Basic: Story = {
  render: () => {
    return (
      <SingleSelect label="Fruit" items={FRUIT} onSelectionChange={(key) => console.log(key)}>
        {(item) => <Item textValue={item.name}>{item.name}</Item>}
      </SingleSelect>
    );
  },
  parameters: { docs: { disable: false } },
};

export const WithCustomSelectedRender: Story = {
  render: () => {
    return (
      <SingleSelect
        label="Fruit"
        items={FRUIT}
        onSelectionChange={(key) => console.log(key)}
        trigger={(props) => (
          <SingleSelectTrigger {...props}>
            {({ selectedItem }) => (
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {selectedItem.textValue}{' '}
                <Chip style={{ marginLeft: '5px' }}>ID: {selectedItem.key}</Chip>
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
      </SingleSelect>
    );
  },
  parameters: { docs: { disable: false } },
};

export const WithCustomTrigger: Story = {
  render: () => {
    return (
      <SingleSelect
        label="Fruit"
        items={FRUIT}
        onSelectionChange={(key) => console.log(key)}
        trigger={CustomSingleSelectTrigger}
      >
        {(item) => <Item textValue={item.name}>{item.name}</Item>}
      </SingleSelect>
    );
  },
  parameters: { docs: { disable: false } },
};

export const SingleSelectWithSections: Story = {
  render: () => {
    return (
      <SingleSelect
        label="Produce"
        items={SECTIONED_ITEMS}
        onSelectionChange={(key) => console.log(key)}
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
      </SingleSelect>
    );
  },
  parameters: { docs: { disable: false } },
};
