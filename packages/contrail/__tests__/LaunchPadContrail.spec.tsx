import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

// Mock the ComponentHighlighter to avoid complex DOM manipulation in tests
vi.mock('../src/ComponentHighlighter', () => ({
	ComponentHighlighter: vi.fn(({ active }) =>
		active ? <div data-testid="component-highlighter">Active Highlighter</div> : null,
	),
}));

describe('LaunchPadContrail', () => {
	beforeEach(() => {
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
	});

	it('renders when enabled', () => {
		render(<LaunchPadContrail enabled={true} />);
		// Component should render but not be active initially (no highlighter visible)
		expect(screen.queryByTestId('component-highlighter')).not.toBeInTheDocument();
	});

	it('does not render when disabled', () => {
		render(<LaunchPadContrail enabled={false} />);
		// Should not render anything
		expect(screen.queryByTestId('component-highlighter')).not.toBeInTheDocument();
	});

	it('activates on keyboard shortcut', async () => {
		render(<LaunchPadContrail enabled={true} shortcut="cmd+l" />);

		// Initially not active
		expect(screen.queryByTestId('component-highlighter')).not.toBeInTheDocument();

		// Simulate Cmd+L keypress
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: false,
			altKey: false,
		});

		// Should show component highlighter
		await waitFor(() => {
			const highlighter = document.querySelector('[data-testid="component-highlighter"]');
			expect(highlighter).toBeTruthy();
		});
	});

	it('toggles on repeated keyboard shortcut', async () => {
		render(<LaunchPadContrail enabled={true} shortcut="cmd+l" />);

		const keyEvent = {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: false,
			altKey: false,
		};

		// Initially not active
		expect(screen.queryByTestId('component-highlighter')).not.toBeInTheDocument();

		// First press - activate
		fireEvent.keyDown(document, keyEvent);
		await waitFor(() => {
			const highlighter = document.querySelector('[data-testid="component-highlighter"]');
			expect(highlighter).toBeTruthy();
		});

		// Second press - deactivate
		fireEvent.keyDown(document, keyEvent);
		await waitFor(() => {
			const highlighter = document.querySelector('[data-testid="component-highlighter"]');
			expect(highlighter).toBeNull();
		});
	});

	it('uses custom keyboard shortcut', async () => {
		render(<LaunchPadContrail enabled={true} shortcut="ctrl+h" />);

		// Cmd+L should not work
		fireEvent.keyDown(document, {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: false,
			altKey: false,
		});
		expect(screen.queryByTestId('component-highlighter')).not.toBeInTheDocument();

		// Ctrl+H should work
		fireEvent.keyDown(document, {
			key: 'h',
			metaKey: false,
			ctrlKey: true,
			shiftKey: false,
			altKey: false,
		});
		await waitFor(() => {
			const highlighter = document.querySelector('[data-testid="component-highlighter"]');
			expect(highlighter).toBeTruthy();
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

		// Component should be rendered (even if not active)
		expect(screen.queryByTestId('component-highlighter')).not.toBeInTheDocument();

		// Activate with custom shortcut
		fireEvent.keyDown(document, {
			key: 'h',
			metaKey: false,
			ctrlKey: true,
			shiftKey: false,
			altKey: false,
		});

		await waitFor(() => {
			const highlighter = document.querySelector('[data-testid="component-highlighter"]');
			expect(highlighter).toBeTruthy();
		});
	});

	it('cleans up event listeners on unmount', () => {
		const addEventListenerSpy = vi.spyOn(document, 'addEventListener');
		const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

		const { unmount } = render(<LaunchPadContrail enabled={true} />);

		expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

		addEventListenerSpy.mockRestore();
		removeEventListenerSpy.mockRestore();
	});

	it('does not add event listeners when disabled', () => {
		const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

		render(<LaunchPadContrail enabled={false} />);

		expect(addEventListenerSpy).not.toHaveBeenCalled();

		addEventListenerSpy.mockRestore();
	});
});
