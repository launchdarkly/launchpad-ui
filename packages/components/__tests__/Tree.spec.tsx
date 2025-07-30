import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Tree, TreeItem, TreeItemContent } from '../src/Tree';

describe('a Tree', () => {
	describe('with default configuration', () => {
		it('is visible in the document', async () => {
			render(
				<Tree aria-label="Test tree">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			expect(await screen.findByRole('tree')).toBeVisible();
		});
	});

	describe('with single selection mode', () => {
		it('has selected state when an item is clicked', async () => {
			const user = userEvent.setup();
			render(
				<Tree aria-label="Test tree" selectionMode="single">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
					<TreeItem id="2" textValue="Item two">
						<TreeItemContent>Item two</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const item = screen.getByText('Item one');
			await user.click(item);
			expect(item.closest('[role="treeitem"]')).toHaveAttribute('aria-selected', 'true');
		});
	});

	describe('with multiple selection mode and toggle behavior', () => {
		it('renders checkboxes for each item', async () => {
			render(
				<Tree aria-label="Test tree" selectionMode="multiple" selectionBehavior="toggle">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
					<TreeItem id="2" textValue="Item two">
						<TreeItemContent>Item two</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const items = screen.getAllByRole('treeitem');
			items.forEach((item) => {
				expect(item.querySelector('[class*="checkbox"]')).toBeInTheDocument();
			});
		});

		it('updates selection state when checkboxes are clicked', async () => {
			const user = userEvent.setup();
			render(
				<Tree aria-label="Test tree" selectionMode="multiple" selectionBehavior="toggle">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
					<TreeItem id="2" textValue="Item two">
						<TreeItemContent>Item two</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const itemOne = screen.getByText('Item one');
			const itemTwo = screen.getByText('Item two');
			const checkboxOne = itemOne
				.closest('[role="treeitem"]')
				?.querySelector('[class*="checkbox"]');
			const checkboxTwo = itemTwo
				.closest('[role="treeitem"]')
				?.querySelector('[class*="checkbox"]');

			await user.click(checkboxOne as HTMLElement);
			await user.click(checkboxTwo as HTMLElement);

			expect(itemOne.closest('[role="treeitem"]')).toHaveAttribute('aria-selected', 'true');
			expect(itemTwo.closest('[role="treeitem"]')).toHaveAttribute('aria-selected', 'true');
		});
	});

	describe('with expandable items', () => {
		it('shows child items when expanded', async () => {
			const user = userEvent.setup();
			render(
				<Tree aria-label="Test tree">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
						<TreeItem id="1-1" textValue="Item one-one">
							<TreeItemContent>Item one-one</TreeItemContent>
						</TreeItem>
					</TreeItem>
				</Tree>,
			);

			const parentItem = screen.getByText('Item one');
			const chevron = parentItem.closest('[role="treeitem"]')?.querySelector('[slot="chevron"]');
			await user.click(chevron as HTMLElement);

			expect(parentItem.closest('[role="treeitem"]')).toHaveAttribute('aria-expanded', 'true');
			expect(screen.getByText('Item one-one')).toBeVisible();
		});
	});

	describe('with disabled items', () => {
		it('prevents selection of disabled items', async () => {
			const user = userEvent.setup();
			render(
				<Tree aria-label="Test tree" selectionMode="multiple" selectionBehavior="toggle">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
					<TreeItem id="2" textValue="Item two" isDisabled>
						<TreeItemContent>Item two</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const disabledItem = screen.getByText('Item two');
			const checkbox = disabledItem
				.closest('[role="treeitem"]')
				?.querySelector('[class*="checkbox"]');

			expect(checkbox).toHaveAttribute('data-disabled');
			await user.click(checkbox as HTMLElement);

			expect(disabledItem.closest('[role="treeitem"]')).toHaveAttribute('aria-disabled', 'true');
			expect(disabledItem.closest('[role="treeitem"]')).not.toHaveAttribute('aria-selected');
		});
	});
});
