import type { TagGroupProps } from '../src';
import type { MockTag } from './constants';

import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { TagGroup, TagItem } from '../src';

import { MOCK_TAGS } from './constants';

const TagGroupComponent = ({
	onRemove,
	...props
}: Omit<TagGroupProps<MockTag>, 'items' | 'children'>) => {
	const [items, setItems] = useState(MOCK_TAGS);

	return (
		<TagGroup
			items={items}
			onRemove={(keys) => {
				if (onRemove) onRemove(keys);
				setItems((prevItems) => prevItems.filter((item) => !keys.has(item.id)));
			}}
			{...props}
		>
			{(item) => <TagItem>{item.name}</TagItem>}
		</TagGroup>
	);
};

describe('Tag', () => {
	it('renders list', () => {
		render(<TagGroupComponent />);
		expect(screen.getByTestId('tag-list')).toBeInTheDocument();
	});

	it('renders correct number of tags', () => {
		render(<TagGroupComponent />);
		expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length);
	});

	it('does not allow removal by default', () => {
		render(<TagGroup items={[...MOCK_TAGS]}>{(item) => <TagItem>{item.name}</TagItem>}</TagGroup>);
		expect(screen.queryByTestId('remove-tag-btn')).not.toBeInTheDocument();
	});

	it('removes items when tag remove button is pressed', async () => {
		const user = userEvent.setup();

		render(<TagGroupComponent />);

		expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length);

		await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

		expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length - 1);
	});

	it('triggers onRemove when prop is passed', async () => {
		const user = userEvent.setup();
		const spy = vi.fn();

		render(<TagGroupComponent onRemove={spy} />);

		await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

		expect(spy).toHaveBeenCalledWith(new Set([MOCK_TAGS[0].id]));
	});

	it('removes items when tag remove button is pressed', async () => {
		const user = userEvent.setup();

		render(<TagGroupComponent />);

		expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length);

		await user.click(screen.getAllByTestId('remove-tag-btn')[0]);

		expect(screen.getAllByTestId('tag').length).toBe(MOCK_TAGS.length - 1);
	});

	it('calls onAction when action is pressed', async () => {
		const user = userEvent.setup();
		const spy = vi.fn();

		render(
			<TagGroupComponent
				action={() => (
					<button onClick={spy} data-test-id="action-btn">
						Click me
					</button>
				)}
			/>,
		);

		await user.click(screen.getByTestId('action-btn'));

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
