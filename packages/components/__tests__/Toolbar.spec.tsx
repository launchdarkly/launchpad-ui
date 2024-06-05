import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Button, Group, IconButton, Separator, Toolbar } from '../src';

describe('Toolbar', () => {
	it('renders', () => {
		render(
			<Toolbar>
				<Group>
					<Button size="small">Cut</Button>
					<Button size="small">Copy</Button>
					<Button size="small">Paste</Button>
				</Group>
				<Separator orientation="vertical" />
				<Group>
					<IconButton icon="gear" aria-label="settings" size="small" />
					<IconButton icon="help" aria-label="help" size="small" />
				</Group>
			</Toolbar>,
		);
		expect(screen.getByRole('toolbar')).toBeVisible();
	});
});
