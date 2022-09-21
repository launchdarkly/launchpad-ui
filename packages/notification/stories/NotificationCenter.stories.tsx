/* eslint-disable react-hooks/rules-of-hooks */
import type { NotificationRecord } from '../src';
import type { ComponentStoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useId, useState } from 'react';

import { NotificationCenter } from '../src';

export default {
  component: NotificationCenter,
  title: 'Components/Notification/NotificationCenter',
  description: 'A container for notifications.',
};

type Story = ComponentStoryObj<typeof NotificationCenter>;

const makeNotification = (id: string): NotificationRecord => ({
  _id: id,
  level: 'success',
  ttl: 5000,
  message: 'The notification message',
  details: '',
});

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<NotificationRecord[]>([]);
    const [counter, setCounter] = useState(0);
    const messageId = useId();

    const removeItem = (id: string) => {
      setItems((updatingItems) => updatingItems.filter(({ _id }) => _id !== id));
    };

    const addItem = () => {
      setItems((updatingItems) => [...updatingItems, makeNotification(`${messageId}-${counter}`)]);
      setCounter(counter + 1);
    };

    return (
      <>
        <Button onClick={addItem}>Add notification</Button>
        <NotificationCenter notifications={items} onDismiss={removeItem} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
