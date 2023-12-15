/* eslint-disable react-hooks/rules-of-hooks */
import type { ToastRecord, ToastProps } from '../src';
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useId, useState } from 'react';

import { ToastCenter } from '../src';

export default {
  component: ToastCenter,
  title: 'Components/Toast/ToastCenter',
  description: 'A container for toasts.',
};

type Story = StoryObj<typeof ToastCenter>;

const kinds = ['info', 'success', 'warning'];
let kindIndex = 0;
const loopIndices = (i: number) => (kindIndex === kinds.length - 1 ? 0 : i + 1);

const makeToast = (id: string) => {
  const kind = kinds[kindIndex] as ToastProps['kind'];
  kindIndex = loopIndices(kindIndex);

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
    await userEvent.click(canvas.getAllByRole('button')[0]);
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          // @fixme
          'color-contrast': { enabled: false },
        },
      },
    },
  },
};
