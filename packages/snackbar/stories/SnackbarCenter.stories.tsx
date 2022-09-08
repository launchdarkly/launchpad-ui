/* eslint-disable react-hooks/rules-of-hooks */
import type { SnackbarRecord } from '../src/types';
import type { ComponentStoryObj } from '@storybook/react';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/testing-library';
import { useId, useState } from 'react';

import { SnackbarCenter } from '../src';
import { SnackbarKind } from '../src/types';

export default {
  component: SnackbarCenter,
  title: 'Components/Snackbar/SnackbarCenter',
  description: 'A container for snackbars.',
};

type Story = ComponentStoryObj<typeof SnackbarCenter>;

const makeSnackbar = (id: string) => ({
  _id: id,
  kind: SnackbarKind.INFO,
  description: 'The snackbar description.',
});

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
