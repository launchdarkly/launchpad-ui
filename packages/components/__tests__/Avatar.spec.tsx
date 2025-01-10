import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Avatar } from '../src';

describe('Avatar', () => {
	it('renders', () => {
		render(<Avatar src="https://avatars.githubusercontent.com/u/2147624?v=4" />);
		expect(screen.getByRole('img')).toBeVisible();
	});

	it('renders icon', () => {
		render(<Avatar variant="icon" />);
		expect(screen.getByRole('img', { hidden: true })).toBeVisible();
	});

	it('renders initials', () => {
		render(<Avatar variant="initials">RN</Avatar>);
		expect(screen.getByRole('img')).toBeVisible();
	});
});
