import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Avatar } from '../src';

class MockImage {
	onload: () => void = () => {};
	src = '';
	constructor() {
		setTimeout(() => {
			this.onload();
		}, 300);
		// biome-ignore lint/correctness/noConstructorReturn: <explanation>
		return this;
	}
}

class ErrorImage {
	onerror: () => void = () => {};
	src = '';
	constructor() {
		setTimeout(() => {
			this.onerror();
		}, 300);
		// biome-ignore lint/correctness/noConstructorReturn: <explanation>
		return this;
	}
}

describe('Avatar', () => {
	const orignalGlobalImage = window.Image;

	beforeAll(() => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(window.Image as any) = MockImage;
	});

	afterAll(() => {
		window.Image = orignalGlobalImage;
	});

	it('renders', async () => {
		render(<Avatar src="https://avatars.githubusercontent.com/u/2147624?v=4" alt="engineer" />);
		expect(await screen.findByRole('img', { name: 'engineer' })).toBeVisible();
	});

	it('renders icon on error', async () => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(window.Image as any) = ErrorImage;
		render(<Avatar src="https://avatars.githubusercontent.com/u/00000" />);
		expect(await screen.findByRole('img', { hidden: true })).toBeVisible();
	});

	it('renders initials on error', async () => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(window.Image as any) = ErrorImage;
		render(<Avatar src="https://avatars.githubusercontent.com/u/00000">RN</Avatar>);
		expect(await screen.findByRole('img')).toHaveTextContent('RN');
	});
});
