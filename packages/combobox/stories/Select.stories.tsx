import type { StoryObj } from '@storybook/react';

import { Chip } from '@launchpad-ui/chip';
import { Tooltip } from '@launchpad-ui/tooltip';
import { Item } from '@react-stately/collections';

import { Select } from '../src';
import { MouseEventHandler, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from '@launchpad-ui/modal';

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
      <Select
        label="Favorite Animal"
        items={[
          { id: '1', value: 'Variation 1' },
          { id: '2', value: 'Variation 2' },
        ]}
        renderSelectedItem={(state) => (
          <Tooltip content="hey">
            <span>{state.selectedItem.value.value}</span>
          </Tooltip>
        )}
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

const UserRow = ({
  title,
  id,
  onSchedule,
}: {
  title: string;
  id: string;
  onSchedule: () => void;
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: 0 }}>{id}</p>
      </div>
      <button onClick={onSchedule}>Add and schedule removal</button>
    </div>
  );
};

const AddUsersExample = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  return (
    <>
      <Select
        label="Users"
        id="maintainerId"
        onSelectionChange={(key) => {
          setName(`${key}`);
        }}
        items={[
          { id: '091328509132-0198590215-91208509125', value: 'Frank Sinatra' },
          { id: '325328509132-9025390250-912o23u5525', value: 'Paula Abdul' },
        ]}
        placeholder="Search to find or add users"
        renderSelectedItem={(state) => (
          <Tooltip content="hey">
            <span>{state.selectedItem.value.value}</span>
          </Tooltip>
        )}
      >
        {(item) => (
          <Item textValue={item.value}>
            <UserRow
              title={item.value}
              id={item.id}
              onSchedule={() => {
                console.log('hello?');
                setOpen(true);
              }}
            />
          </Item>
        )}
      </Select>
      {open && (
        <Modal onCancel={() => setOpen(false)}>
          <ModalHeader title="Title" />
          <ModalBody>
            <p>Body text: {name}</p>
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

export const AddUsers: Story = {
  render: () => {
    return <AddUsersExample />;
  },
  parameters: { docs: { disable: false } },
};

export const FlagMaintainer: Story = {
  render: () => {
    return (
      <Select
        label="Flag maintainer"
        id="maintainerId"
        onSelectionChange={(key) => {
          console.log('changing maintainer to ', key);
        }}
        items={[
          { id: '1', value: 'Variation 1' },
          { id: '2', value: 'Variation 2' },
        ]}
        placeholder="Select the maintainer for this flag"
        renderSelectedItem={(state) => (
          <Tooltip content="hey">
            <span>{state.selectedItem.value.value}</span>
          </Tooltip>
        )}
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
