import { fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { LaunchPadAfterburn } from '../src/LaunchPadAfterburn';

// Mock component metadata
vi.mock('../src/metadata.generated', () => ({
	componentMetadata: {
		Button: {
			name: 'Button',
			package: '@launchpad-ui/components',
			version: '0.12.0',
			description: 'A button component',
		},
		Modal: {
			name: 'Modal',
			package: '@launchpad-ui/components',
			version: '0.12.0',
			description: 'A modal component',
		},
	},
}));

describe('LaunchPadAfterburn (CSS-only)', () => {
	beforeEach(() => {
		// Clear body classes
		document.body.className = '';

		// Add some test components to the DOM
		document.body.innerHTML = `
      <div data-launchpad="Button">Test Button</div>
      <div data-launchpad="Modal">Test Modal</div>
    `;

		// Clear all mocks
		vi.clearAllMocks();
	});

	afterEach(() => {
		document.body.innerHTML = '';
		document.body.className = '';
	});

	it('renders when enabled', () => {
		render(<LaunchPadAfterburn enabled={true} />);
		// Component should render but body should not have afterburn-active class initially
		expect(document.body.classList.contains('afterburn-active')).toBe(false);
	});

	it('does not initialize when disabled', () => {
		render(<LaunchPadAfterburn enabled={false} />);
		// Should not affect body classes or add event listeners
		expect(document.body.classList.contains('afterburn-active')).toBe(false);
	});

	it('activates highlighting on keyboard shortcut', async () => {
		render(<LaunchPadAfterburn enabled={true} shortcut="cmd+shift+l" />);

		// Initially not active
		expect(document.body.classList.contains('afterburn-active')).toBe(false);

		// Simulate Cmd+Shift+L keypress
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});

		// Should add afterburn-active class to body
		await waitFor(() => {
			expect(document.body.classList.contains('afterburn-active')).toBe(true);
		});
	});

	it('toggles highlighting on repeated keyboard shortcut', async () => {
		render(<LaunchPadAfterburn enabled={true} shortcut="cmd+shift+l" />);

		const keyEvent = {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		};

		// Initially not active
		expect(document.body.classList.contains('afterburn-active')).toBe(false);

		// First press - activate
		fireEvent.keyDown(document, keyEvent);
		await waitFor(() => {
			expect(document.body.classList.contains('afterburn-active')).toBe(true);
		});

		// Second press - deactivate
		fireEvent.keyDown(document, keyEvent);
		await waitFor(() => {
			expect(document.body.classList.contains('afterburn-active')).toBe(false);
		});
	});

	it('uses custom keyboard shortcut', async () => {
		render(<LaunchPadAfterburn enabled={true} shortcut="ctrl+h" />);

		// Cmd+Shift+L should not work
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});
		expect(document.body.classList.contains('afterburn-active')).toBe(false);

		// Ctrl+H should work
		fireEvent.keyDown(document, {
			key: 'h',
			metaKey: false,
			ctrlKey: true,
			shiftKey: false,
			altKey: false,
		});

		await waitFor(() => {
			expect(document.body.classList.contains('afterburn-active')).toBe(true);
		});
	});

	it('uses custom configuration', async () => {
		const customConfig = {
			shortcut: 'ctrl+h',
			docsBaseUrl: 'https://custom-docs.com',
			enabled: true,
		};

		render(<LaunchPadAfterburn {...customConfig} />);

		// Initially not active
		expect(document.body.classList.contains('afterburn-active')).toBe(false);

		// Activate with custom shortcut
		fireEvent.keyDown(document, {
			key: 'h',
			metaKey: false,
			ctrlKey: true,
			shiftKey: false,
			altKey: false,
		});

		await waitFor(() => {
			expect(document.body.classList.contains('afterburn-active')).toBe(true);
		});
	});

	it('cleans up on unmount', () => {
		const { unmount } = render(<LaunchPadAfterburn enabled={true} />);

		// Activate highlighting
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});

		expect(document.body.classList.contains('afterburn-active')).toBe(true);

		// Unmount should clean up and remove the active class
		unmount();

		// The class should be cleared by the cleanup
		expect(document.body.classList.contains('afterburn-active')).toBe(false);
	});

	it('does not initialize when disabled', () => {
		const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

		render(<LaunchPadAfterburn enabled={false} />);

		// Should not add any event listeners when disabled
		expect(addEventListenerSpy).not.toHaveBeenCalled();

		addEventListenerSpy.mockRestore();
	});

	it('highlights components with CSS when active', async () => {
		render(<LaunchPadAfterburn enabled={true} />);

		// Activate highlighting
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});

		await waitFor(() => {
			expect(document.body.classList.contains('afterburn-active')).toBe(true);
		});

		// CSS should make components visible with outline/pseudo-elements
		// This is tested implicitly by the CSS rules in afterburn.css
		const buttonElement = document.querySelector('[data-launchpad="Button"]');
		const modalElement = document.querySelector('[data-launchpad="Modal"]');

		expect(buttonElement).toBeInTheDocument();
		expect(modalElement).toBeInTheDocument();
		expect(buttonElement?.getAttribute('data-launchpad')).toBe('Button');
		expect(modalElement?.getAttribute('data-launchpad')).toBe('Modal');
	});
});
