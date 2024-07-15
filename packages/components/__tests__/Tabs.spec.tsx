import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Tab, TabList, TabPanel, Tabs } from '../src';

describe('Tabs', () => {
	it('renders', () => {
		render(
			<Tabs>
				<TabList aria-label="tabs">
					<Tab id="1">Tab 1</Tab>
					<Tab id="2">Tab 2</Tab>
					<Tab id="3">Tab 3</Tab>
				</TabList>
				<TabPanel id="1">Tab body 1</TabPanel>
				<TabPanel id="2">Tab body 2</TabPanel>
				<TabPanel id="3">Tab body 3</TabPanel>
			</Tabs>,
		);
		expect(screen.getByRole('tablist')).toBeVisible();
	});
});
