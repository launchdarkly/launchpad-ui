/* eslint-disable react-hooks/rules-of-hooks */
import type { SnackbarRecord, SnackbarProps } from '../src';
import type { StoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useId, useState } from 'react';

import { SnackbarCenter } from '../src';

export default {
  component: SnackbarCenter,
  title: 'Components/Snackbar/SnackbarCenter',
  description: 'A container for snackbars.',
};

type Story = StoryObj<typeof SnackbarCenter>;

const kinds = ['info', 'error', 'warning'];
let kindIndex = 0;
const loopIndices = (i: number) => (kindIndex === kinds.length - 1 ? 0 : i + 1);

const makeSnackbar = (id: string) => {
  const kind = kinds[kindIndex] as SnackbarProps['kind'];
  kindIndex = loopIndices(kindIndex);

  return {
    _id: id,
    kind,
    description: 'The snackbar description.',
  };
};

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<SnackbarRecord[]>([]);
    const [counter, setCounter] = useState(0);
    const snackId = useId();

    const removeItem = (id: string) => {
      setItems((updatingItems) => updatingItems.filter(({ _id }) => _id !== id));
    };

    const addItem = () => {
      setItems((updatingItems) => [...updatingItems, makeSnackbar(`${snackId}-${counter}`)]);
      setCounter(counter + 1);
    };

    return (
      <>
        <Button onClick={addItem}>Add snackbar</Button>
        <SnackbarCenter snackbars={items} onDismiss={removeItem} />
      </>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
  },
};
