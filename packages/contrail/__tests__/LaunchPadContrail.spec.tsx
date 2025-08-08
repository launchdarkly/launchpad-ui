import { fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { LaunchPadContrail } from '../src/LaunchPadContrail';

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

describe('LaunchPadContrail (CSS-only)', () => {
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
		render(<LaunchPadContrail enabled={true} />);
		// Component should render but body should not have contrail-active class initially
		expect(document.body.classList.contains('contrail-active')).toBe(false);
	});

	it('does not initialize when disabled', () => {
		render(<LaunchPadContrail enabled={false} />);
		// Should not affect body classes or add event listeners
		expect(document.body.classList.contains('contrail-active')).toBe(false);
	});

	it('activates highlighting on keyboard shortcut', async () => {
		render(<LaunchPadContrail enabled={true} shortcut="cmd+shift+l" />);

		// Initially not active
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Simulate Cmd+Shift+L keypress
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});

		// Should add contrail-active class to body
		await waitFor(() => {
			expect(document.body.classList.contains('contrail-active')).toBe(true);
		});
	});

	it('toggles highlighting on repeated keyboard shortcut', async () => {
		render(<LaunchPadContrail enabled={true} shortcut="cmd+shift+l" />);

		const keyEvent = {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		};

		// Initially not active
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// First press - activate
		fireEvent.keyDown(document, keyEvent);
		await waitFor(() => {
			expect(document.body.classList.contains('contrail-active')).toBe(true);
		});

		// Second press - deactivate
		fireEvent.keyDown(document, keyEvent);
		await waitFor(() => {
			expect(document.body.classList.contains('contrail-active')).toBe(false);
		});
	});

	it('uses custom keyboard shortcut', async () => {
		render(<LaunchPadContrail enabled={true} shortcut="ctrl+h" />);

		// Cmd+Shift+L should not work
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Ctrl+H should work
		fireEvent.keyDown(document, {
			key: 'h',
			metaKey: false,
			ctrlKey: true,
			shiftKey: false,
			altKey: false,
		});

		await waitFor(() => {
			expect(document.body.classList.contains('contrail-active')).toBe(true);
		});
	});

	it('uses custom configuration', async () => {
		const customConfig = {
			shortcut: 'ctrl+h',
			docsBaseUrl: 'https://custom-docs.com',
			storybookUrl: 'https://custom-storybook.com',
			enabled: true,
		};

		render(<LaunchPadContrail {...customConfig} />);

		// Initially not active
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Activate with custom shortcut
		fireEvent.keyDown(document, {
			key: 'h',
			metaKey: false,
			ctrlKey: true,
			shiftKey: false,
			altKey: false,
		});

		await waitFor(() => {
			expect(document.body.classList.contains('contrail-active')).toBe(true);
		});
	});

	it('cleans up on unmount', () => {
		const { unmount } = render(<LaunchPadContrail enabled={true} />);

		// Activate highlighting
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});

		expect(document.body.classList.contains('contrail-active')).toBe(true);

		// Unmount should clean up and remove the active class
		unmount();

		// The class should be cleared by the cleanup
		expect(document.body.classList.contains('contrail-active')).toBe(false);
	});

	it('does not initialize when disabled', () => {
		const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

		render(<LaunchPadContrail enabled={false} />);

		// Should not add any event listeners when disabled
		expect(addEventListenerSpy).not.toHaveBeenCalled();

		addEventListenerSpy.mockRestore();
	});

	it('highlights components with CSS when active', async () => {
		render(<LaunchPadContrail enabled={true} />);

		// Activate highlighting
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: true,
			altKey: false,
		});

		await waitFor(() => {
			expect(document.body.classList.contains('contrail-active')).toBe(true);
		});

		// CSS should make components visible with outline/pseudo-elements
		// This is tested implicitly by the CSS rules in contrail.css
		const buttonElement = document.querySelector('[data-launchpad="Button"]');
		const modalElement = document.querySelector('[data-launchpad="Modal"]');

		expect(buttonElement).toBeInTheDocument();
		expect(modalElement).toBeInTheDocument();
		expect(buttonElement?.getAttribute('data-launchpad')).toBe('Button');
		expect(modalElement?.getAttribute('data-launchpad')).toBe('Modal');
	});
});
