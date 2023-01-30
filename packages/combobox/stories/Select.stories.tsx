import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { Tooltip } from '@launchpad-ui/tooltip';
import { Item } from '@react-stately/collections';

import { Select } from '../src';

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

export const WithCustomTrigger: Story = {
  render: () => {
    return (
      <Select
        label="Favorite Animal"
        items={[
          { id: '1', value: 'Variation 1' },
          { id: '2', value: 'Variation 2' },
        ]}
        renderTrigger={(triggerProps) => {
          const { state, buttonProps, valueProps, ref } = triggerProps;
          return (
            <button {...buttonProps} ref={ref}>
              <span {...valueProps}>
                {state.selectedKey ? state.selectedItem.value.value : 'Select...'}
              </span>
            </button>
          );
        }}
      >
        {(item) => (
          <Item textValue={item.value}>
            {item.value}{' '}
            <Tooltip content={item.value}>
              <Chip>{item.id}</Chip>
            </Tooltip>
          </Item>
        )}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const WithDefaultTrigger: Story = {
  render: () => {
    return (
      <Select
        label="Flag maintainer"
        id="maintainerId"
        placeholder="Select the maintainer for this flag"
      >
        <Item>One</Item>
        <Item>Two</Item>
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};

export const WithTagListTrigger: Story = {
  render: () => {
    return (
      <Select
        label="Favorite Animal"
        items={[
          { id: '1', value: 'Variation 1' },
          { id: '2', value: 'Variation 2' },
        ]}
        renderTrigger={(triggerProps) => {
          const { state, buttonProps, valueProps, ref } = triggerProps;

          return (
            <div
              style={{
                width: '100%',
                backgroundColor: '#efefef',
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
              }}
            >
              {state.selectedKey && (
                <Chip
                  kind="info"
                  {...valueProps}
                  onClick={() => {
                    console.log(state.selectionManager.isEmpty);
                  }}
                >
                  {state.selectedItem.value.value}
                </Chip>
              )}
              <button {...buttonProps} ref={ref}>
                +
              </button>
            </div>
          );
        }}
      >
        {(item) => (
          <Item textValue={item.value}>
            {item.value}{' '}
            <Tooltip content={item.value}>
              <Chip>{item.id}</Chip>
            </Tooltip>
          </Item>
        )}
      </Select>
    );
  },
  parameters: { docs: { disable: false } },
};
