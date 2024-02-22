import { describe, expect, it, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { AbsoluteModalFooter, Modal, ModalBody, ModalFooter, ModalHeader } from '../src';

globalThis.matchMedia = vi.fn().mockReturnValue({
	matches: true,
	onchange: null,
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	dispatchEvent: vi.fn(),
	addListener: vi.fn(),
	removeListener: vi.fn(),
});

describe('Modal', () => {
	it('renders', async () => {
		render(
			<Modal>
				<ModalHeader title="Title" />
				<ModalBody>Body</ModalBody>
				<ModalFooter primaryButton={<button>Click me</button>} />
			</Modal>,
		);
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
	});

	it('renders with absolute footer', async () => {
		render(
			<Modal>
				<ModalHeader title="Title" />
				<ModalBody>Body</ModalBody>
				<AbsoluteModalFooter primaryButton={<button>Click me</button>} />
			</Modal>,
		);
		expect(await screen.findByRole('dialog')).toBeInTheDocument();
	});

	it('calls onCancel when escape key is pressed', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(<Modal onCancel={spy}>Body</Modal>);

		await user.keyboard('{Escape}');

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('calls onReady when modal is rendered', async () => {
		const spy = vi.fn();

		render(<Modal onReady={spy}>Body</Modal>);

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('calls onCancel when overlay is clicked', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(<Modal onCancel={spy}>Body</Modal>);

		const overlay = screen.getByTestId('modal-overlay');
		await user.click(overlay);

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('calls onCancel when close button is clicked', async () => {
		const spy = vi.fn();
		const user = userEvent.setup();
		render(
			<Modal onCancel={spy}>
				<ModalHeader title="Title" />
				Body
			</Modal>,
		);

		const overlay = screen.getByTestId('modal-close-button');
		await user.click(overlay);

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it('renders header icon when warning status is passed', async () => {
		render(
			<Modal status="warning">
				<ModalHeader title="Title" />
				Body
			</Modal>,
		);

		const component = screen.getByTestId('modal-header-icon');

		expect(component).toBeInTheDocument();
	});

	it('renders required field when prop is passed', async () => {
		render(
			<Modal>
				<ModalHeader title="Title" hasRequiredField />
				Body
			</Modal>,
		);

		const component = screen.getByTestId('modal-required-field');

		expect(component).toBeInTheDocument();
	});

	it('renders description when passed', async () => {
		const content = 'test';

		render(
			<Modal>
				<ModalHeader title="Title" description={content} />
				Body
			</Modal>,
		);

		const component = screen.getByTestId('modal-description');

		expect(component).toHaveTextContent(content);
	});
});
