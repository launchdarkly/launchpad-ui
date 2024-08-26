import type { StoryObj } from '@storybook/react';
import type { SnackbarProps, SnackbarRecord } from '../src';

import { Button } from '@launchpad-ui/button';
import { userEvent, within } from '@storybook/test';
import { useId, useState } from 'react';

import { SnackbarCenter } from '../src';

export default {
	component: SnackbarCenter,
	title: 'Legacy/Deprecated/Snackbar/SnackbarCenter',
	description: 'A container for snackbars.',
	parameters: {
		chromatic: { disableSnapshot: true },
	},
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
		description: 'This is a message.',
		cta: (
			<a href="/" target="_blank" rel="noreferrer">
				Link
			</a>
		),
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
				<SnackbarCenter snackbars={items} dismissSnackbar={removeItem} />
			</>
		);
	},
	play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getAllByRole('button')[0]);
	},
};
