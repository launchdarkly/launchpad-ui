/* eslint-disable react-hooks/rules-of-hooks */
import type { NotificationRecord } from '../src/types';
import type { ComponentStoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';
import { v4 } from 'uuid';

import { NotificationCenter } from '../src';
import { NotificationLevel } from '../src/types';

export default {
  component: NotificationCenter,
  title: 'Components/Notification/NotificationCenter',
  description: 'A container for notifications.',
};

type Story = ComponentStoryObj<typeof NotificationCenter>;

const makeNotification = () => ({
  _id: v4(),
  level: NotificationLevel.SUCCESS,
  ttl: 5000,
  message: 'The notification message',
  details: '',
});

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<NotificationRecord[]>([]);

    const removeItem = (id: string) => {
      setItems((updatingItems) => updatingItems.filter(({ _id }) => _id !== id));
    };

    const addItem = () => {
      setItems((updatingItems) => [...updatingItems, makeNotification()]);
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
