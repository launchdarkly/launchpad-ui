/* eslint-disable react-hooks/rules-of-hooks */
import type { ToastRecord } from '../src/types';
import type { ComponentStoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useId, useState } from 'react';

import { ToastCenter } from '../src';
import { ToastKind } from '../src/types';

export default {
  component: ToastCenter,
  title: 'Components/Toast/ToastCenter',
  description: 'A container for toasts.',
};

type Story = ComponentStoryObj<typeof ToastCenter>;

const makeToast = (id: string) => {
  const kinds = Object.values(ToastKind);
  const kind = kinds[Math.floor(Math.random() * kinds.length)];

  return {
    _id: id,
    kind,
    content: 'Try to keep your message under 70 characters',
  };
};

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<ToastRecord[]>([]);
    const [counter, setCounter] = useState(0);
    const snackId = useId();

    const removeItem = (id: string) => {
      setItems((updatingItems) => updatingItems.filter(({ _id }) => _id !== id));
    };

    const addItem = () => {
      setItems((updatingItems) => [...updatingItems, makeToast(`${snackId}-${counter}`)]);
      setCounter(counter + 1);
    };

    return (
      <>
        <Button onClick={addItem}>Add toast</Button>
        <ToastCenter toasts={items} onDismiss={removeItem} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
