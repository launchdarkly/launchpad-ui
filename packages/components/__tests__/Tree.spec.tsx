import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Tree, TreeItem, TreeItemContent } from '../src/Tree';

describe('a Tree', () => {
	const user = userEvent.setup();

	describe('with default configuration', () => {
		it('is visible in the document', async () => {
			render(
				<Tree aria-label="Test tree">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			expect(await screen.findByRole('treegrid')).toBeVisible();
		});
	});

	describe('with single selection mode', () => {
		it('has selected state when an item is clicked', async () => {
			render(
				<Tree aria-label="Test tree" selectionMode="single">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const item = screen.getByText('Item one');
			await user.click(item);
			expect(item.closest('[role="row"]')).toHaveAttribute('aria-selected', 'true');
		});
	});

	describe('with multiple selection mode and toggle behavior', () => {
		it('renders checkboxes for each item', () => {
			render(
				<Tree aria-label="Test tree" selectionMode="multiple">
					<TreeItem id="1" textValue="Item one">
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
					<TreeItem id="2" textValue="Item two">
						<TreeItemContent>Item two</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const items = screen.getAllByRole('row');
			items.forEach((item) => {
				expect(item.querySelector('[class*="checkbox"]')).toBeInTheDocument();
			});
		});

		it('updates selection state when checkboxes are clicked', async () => {
			render(
				<Tree aria-label="Test tree" selectionMode="multiple">
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
			const checkboxOne = itemOne.closest('[role="row"]')?.querySelector('[class*="checkbox"]');
			const checkboxTwo = itemTwo.closest('[role="row"]')?.querySelector('[class*="checkbox"]');

			await user.click(checkboxOne as HTMLElement);
			await user.click(checkboxTwo as HTMLElement);

			expect(itemOne.closest('[role="row"]')).toHaveAttribute('aria-selected', 'true');
			expect(itemTwo.closest('[role="row"]')).toHaveAttribute('aria-selected', 'true');
		});
	});

	describe('with expandable items', () => {
		it('shows child items when expanded', async () => {
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
			const chevron = parentItem.closest('[role="row"]')?.querySelector('button');

			await user.click(chevron as HTMLElement);

			expect(parentItem.closest('[role="row"]')).toHaveAttribute('aria-expanded', 'true');
			expect(screen.getByText('Item one-one')).toBeVisible();
		});
	});

	describe('with disabled items', () => {
		it('prevents selection of disabled items', async () => {
			render(
				<Tree aria-label="Test tree" selectionMode="multiple">
					<TreeItem id="1" textValue="Item one" isDisabled>
						<TreeItemContent>Item one</TreeItemContent>
					</TreeItem>
				</Tree>,
			);

			const item = screen.getByText('Item one');
			const checkbox = item.closest('[role="row"]')?.querySelector('[class*="checkbox"]');

			expect(item.closest('[role="row"]')).toHaveAttribute('aria-disabled', 'true');
			await user.click(checkbox as HTMLElement);
			expect(item.closest('[role="row"]')).not.toHaveAttribute('aria-selected', 'true');
		});
	});
});
