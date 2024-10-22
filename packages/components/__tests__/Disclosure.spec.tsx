import { Icon } from '@launchpad-ui/icons';
import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Button, Disclosure, DisclosurePanel, Heading } from '../src';

describe('Disclosure', () => {
	it('renders', () => {
		render(
			<Disclosure isExpanded>
				<Heading>
					<Button slot="trigger" variant="minimal">
						<Icon name="chevron-right" size="small" />
						Header
					</Button>
				</Heading>
				<DisclosurePanel>
					<p>Panel with content.</p>
				</DisclosurePanel>
			</Disclosure>,
		);
		expect(screen.getByRole('group')).toBeVisible();
	});
});
