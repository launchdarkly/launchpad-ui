import { Button } from '@launchpad-ui/button';
import { useState } from 'react';
import { v4 } from 'uuid';

import { NotificationCenter } from '../src';
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

export const Default = () => {
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
