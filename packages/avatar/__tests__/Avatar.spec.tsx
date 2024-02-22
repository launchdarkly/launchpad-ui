import { Icon } from '@launchpad-ui/icons';
import { describe, expect, it, vi } from 'vitest';

import { fireEvent, render, screen, waitFor } from '../../../test/utils';
import { Avatar } from '../src';

import circle from './circle.png';

describe('Avatar', () => {
	it('renders', () => {
		globalThis.fetch = vi.fn().mockReturnValue(
			Promise.resolve({
				status: 200,
				blob: () => new Blob(['test'], { type: 'text/plain' }),
				headers: { get: vi.fn() },
			}),
		);
		globalThis.URL.createObjectURL = vi.fn();
		render(<Avatar url="test" defaultIcon={<Icon name="person" />} />);
		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});

	it('renders a default', () => {
		render(<Avatar url="" defaultIcon={<Icon name="person" />} />);
		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});

	it('renders a default for 404', () => {
		globalThis.fetch = vi.fn().mockReturnValue(
			Promise.resolve({
				status: 404,
			}),
		);
		render(<Avatar url="test" defaultIcon={<Icon name="person" />} />);
		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});

	it('renders an image', async () => {
		globalThis.fetch = vi.fn().mockReturnValue(
			Promise.resolve({
				status: 200,
				blob: () => new Blob([circle], { type: 'image/png' }),
				headers: { get: vi.fn() },
			}),
		);
		globalThis.URL.createObjectURL = vi.fn().mockReturnValue(circle);
		render(<Avatar url="test" defaultIcon={<Icon name="person" />} />);

		await waitFor(() => {
			expect(screen.getByRole('img')).toBeInTheDocument();
		});
	});

	it('renders default on img error', async () => {
		globalThis.fetch = vi.fn().mockReturnValue(
			Promise.resolve({
				status: 200,
				blob: () => new Blob(['test'], { type: 'text/plain' }),
				headers: { get: vi.fn() },
			}),
		);
		globalThis.URL.createObjectURL = vi.fn().mockReturnValue('fake');
		render(<Avatar url="test" defaultIcon={<Icon name="person" />} />);

		await waitFor(() => {
			expect(screen.getByRole('img')).toBeInTheDocument();
		});

		fireEvent.error(screen.getByRole('img'));

		await waitFor(() => {
			expect(screen.queryByRole('img')).not.toBeInTheDocument();
		});
	});

	it('can render initials', () => {
		render(<Avatar url="" defaultIcon={<Icon name="person" />} initials="AB" />);
		expect(screen.getByText('AB')).toBeInTheDocument();
	});
});
