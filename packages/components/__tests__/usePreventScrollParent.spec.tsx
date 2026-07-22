import { useRef, useState } from 'react';
import { describe, expect, it } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { usePreventScrollParent } from '../src/usePreventScrollParent';

const defineDimensions = (
	element: HTMLElement,
	{ scrollHeight, clientHeight, offsetWidth, clientWidth }: Record<string, number>,
) => {
	Object.defineProperty(element, 'scrollHeight', { value: scrollHeight, configurable: true });
	Object.defineProperty(element, 'clientHeight', { value: clientHeight, configurable: true });
	Object.defineProperty(element, 'offsetWidth', { value: offsetWidth, configurable: true });
	Object.defineProperty(element, 'clientWidth', { value: clientWidth, configurable: true });
};

const Harness = ({ isNonModal }: { isNonModal?: boolean }) => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	usePreventScrollParent({ triggerRef, isOpen, isDisabled: isNonModal });

	return (
		<div
			data-test-id="scroller"
			ref={(node) => {
				scrollRef.current = node;
				if (node) {
					node.style.overflow = 'auto';
					defineDimensions(node, {
						scrollHeight: 1000,
						clientHeight: 500,
						offsetWidth: 500,
						clientWidth: 485,
					});
				}
			}}
		>
			<button type="button" ref={triggerRef} onClick={() => setIsOpen((open) => !open)}>
				toggle
			</button>
		</div>
	);
};

describe('usePreventScrollParent', () => {
	it("locks the trigger's scroll parent while open and restores it on close", async () => {
		const user = userEvent.setup();
		render(<Harness />);

		const scroller = screen.getByTestId('scroller');
		expect(scroller.style.overflow).toBe('auto');

		await user.click(screen.getByRole('button'));
		expect(scroller.style.overflow).toBe('hidden');

		await user.click(screen.getByRole('button'));
		expect(scroller.style.overflow).toBe('auto');
	});

	it('does not lock when disabled (non-modal)', async () => {
		const user = userEvent.setup();
		render(<Harness isNonModal />);

		const scroller = screen.getByTestId('scroller');
		await user.click(screen.getByRole('button'));
		expect(scroller.style.overflow).toBe('auto');
	});

	it('reference counts nested overlays sharing a scroll parent', async () => {
		const user = userEvent.setup();
		render(<NestedHarness />);

		const scroller = screen.getByTestId('scroller');
		expect(scroller.style.overflow).toBe('auto');

		await user.click(screen.getByRole('button', { name: 'toggle-a' }));
		await user.click(screen.getByRole('button', { name: 'toggle-b' }));
		expect(scroller.style.overflow).toBe('hidden');

		await user.click(screen.getByRole('button', { name: 'toggle-a' }));
		expect(scroller.style.overflow).toBe('hidden');

		await user.click(screen.getByRole('button', { name: 'toggle-b' }));
		expect(scroller.style.overflow).toBe('auto');
	});
});

const NestedOverlay = ({ label }: { label: string }) => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	usePreventScrollParent({ triggerRef, isOpen });

	return (
		<button type="button" ref={triggerRef} onClick={() => setIsOpen((open) => !open)}>
			{label}
		</button>
	);
};

const NestedHarness = () => (
	<div
		data-test-id="scroller"
		ref={(node) => {
			if (node) {
				node.style.overflow = 'auto';
				defineDimensions(node, {
					scrollHeight: 1000,
					clientHeight: 500,
					offsetWidth: 500,
					clientWidth: 485,
				});
			}
		}}
	>
		<NestedOverlay label="toggle-a" />
		<NestedOverlay label="toggle-b" />
	</div>
);
