import type { Story } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';
import { v4 } from 'uuid';

import { NotificationCenter, NotificationCenterProps } from '../src';
import { NotificationLevel, NotificationRecord } from '../src/types';

export default {
  component: NotificationCenter,
  title: 'Components/Notification/NotificationCenter',
  description: 'A container for notifications.',
};

const makeNotification = () => ({
  _id: v4(),
  level: NotificationLevel.SUCCESS,
  ttl: 5000,
  message: 'The notification message',
  details: '',
});

const Template: Story<NotificationCenterProps> = () => {
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
};

export const Default = Template.bind({});
Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
