import type { StoryObj } from '@storybook/react';

import { Item, Section } from '@react-stately/collections';

import { GridBox } from '../src/GridBox';

export default {
  component: GridBox,
  title: 'Components/GridBox',
  description: 'tbd',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__COMBOBOX,
    },
  },
};

type Story = StoryObj<typeof GridBox>;

export const Default: Story = {
  render: () => {
    return (
      <GridBox
        onSelectionChange={(keys) => {
          console.log(keys);
        }}
        selectionMode="multiple"
        aria-label="Example List"
      >
        <Item key="lettuce">Lettuce</Item>
        <Item key="tomato">Tomato</Item>
        <Item key="onion">Onion</Item>
      </GridBox>
    );
  },
  parameters: { docs: { disable: false } },
};

export const WithSections: Story = {
  render: () => {
    return (
      <GridBox
        onSelectionChange={(keys) => {
          console.log(keys);
        }}
        aria-label="Example List"
      >
        <Section title="Veggies">
          <Item key="lettuce">Lettuce</Item>
          <Item key="tomato">Tomato</Item>
          <Item key="onion">
            {' '}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <span>Onion</span>
              </div>
              <button onClick={() => alert('add')}>Trigger action</button>
            </div>
          </Item>
        </Section>
        <Section title="Protein">
          <Item key="ham">Ham</Item>
          <Item key="tuna">Tuna</Item>
          <Item key="tofu">Tofu</Item>
        </Section>
        <Section title="Condiments">
          <Item key="mayo">Mayonnaise</Item>
          <Item key="mustard">Mustard</Item>
          <Item key="ranch">Ranch</Item>
        </Section>
      </GridBox>
    );
  },
  parameters: { docs: { disable: false } },
};
