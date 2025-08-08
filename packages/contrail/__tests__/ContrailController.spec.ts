import type { ComponentMetadata } from '../src/types';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ContrailController } from '../src/ContrailController';

// Mock metadata for testing
const mockMetadata: Record<string, ComponentMetadata> = {
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
};

describe('ContrailController', () => {
	let controller: ContrailController;
	const defaultConfig = {
		shortcut: 'cmd+shift+l',
		docsBaseUrl: 'https://docs.example.com',
		storybookUrl: 'https://storybook.example.com',
		metadata: mockMetadata,
		enabled: true,
	};

	beforeEach(() => {
		// Clear body classes and DOM
		document.body.className = '';
		document.body.innerHTML = `
			<div data-launchpad="Button">Test Button</div>
			<div data-launchpad="Modal">Test Modal</div>
		`;

		// Clear all mocks
		vi.clearAllMocks();
	});

	afterEach(() => {
		controller?.destroy?.();
		document.body.innerHTML = '';
		document.body.className = '';

		// Remove any lingering elements
		document
			.querySelectorAll('.contrail-tooltip, .contrail-settings, .contrail-settings-trigger')
			.forEach((el) => el.remove());
	});

	it('initializes correctly when enabled', () => {
		controller = new ContrailController(defaultConfig);
		expect(controller).toBeDefined();
	});

	it('does not initialize event listeners when disabled', () => {
		const addEventListenerSpy = vi.spyOn(document, 'addEventListener');

		controller = new ContrailController({ ...defaultConfig, enabled: false });

		// Should not add keyboard event listener
		expect(addEventListenerSpy).not.toHaveBeenCalledWith('keydown', expect.any(Function));

		addEventListenerSpy.mockRestore();
	});

	it('toggles contrail on keyboard shortcut', () => {
		controller = new ContrailController(defaultConfig);

		// Initially not active
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Simulate keyboard shortcut
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);

		// Should be active now
		expect(document.body.classList.contains('contrail-active')).toBe(true);

		// Toggle again
		document.dispatchEvent(keyEvent);
		expect(document.body.classList.contains('contrail-active')).toBe(false);
	});

	it('handles custom keyboard shortcuts', () => {
		controller = new ContrailController({
			...defaultConfig,
			shortcut: 'ctrl+h',
		});

		// Default shortcut should not work
		const defaultKeyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(defaultKeyEvent);
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Custom shortcut should work
		const customKeyEvent = new KeyboardEvent('keydown', {
			key: 'h',
			ctrlKey: true,
		});
		document.dispatchEvent(customKeyEvent);
		expect(document.body.classList.contains('contrail-active')).toBe(true);
	});

	it('shows settings trigger when active', () => {
		controller = new ContrailController(defaultConfig);

		// Activate contrail
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);

		// Settings trigger should be present
		const trigger = document.querySelector('.contrail-settings-trigger');
		expect(trigger).toBeInTheDocument();
	});

	it('hides settings trigger when deactivated', () => {
		controller = new ContrailController(defaultConfig);

		// Activate contrail
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);

		// Deactivate
		document.dispatchEvent(keyEvent);

		// Settings trigger should be removed
		const trigger = document.querySelector('.contrail-settings-trigger');
		expect(trigger).not.toBeInTheDocument();
	});

	it('cleans up properly on destroy', () => {
		controller = new ContrailController(defaultConfig);

		// Activate contrail
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);
		expect(document.body.classList.contains('contrail-active')).toBe(true);

		// Destroy should clean up
		controller.destroy();
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Settings trigger should be removed
		const trigger = document.querySelector('.contrail-settings-trigger');
		expect(trigger).not.toBeInTheDocument();
	});

	it('handles double-click activation', () => {
		controller = new ContrailController(defaultConfig);

		// Single click should not activate
		const singleClickEvent = new MouseEvent('click', { detail: 1 });
		document.dispatchEvent(singleClickEvent);
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Double click should activate
		const doubleClickEvent = new MouseEvent('click', { detail: 2 });
		document.dispatchEvent(doubleClickEvent);
		expect(document.body.classList.contains('contrail-active')).toBe(true);
	});

	it('shows tooltips when hovering over components while active', () => {
		controller = new ContrailController(defaultConfig);

		// Activate contrail
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);

		// Get a component element
		const buttonElement = document.querySelector('[data-launchpad="Button"]') as HTMLElement;
		expect(buttonElement).toBeTruthy();

		// Simulate mouseover
		const mouseOverEvent = new MouseEvent('mouseover', {
			bubbles: true,
			clientX: 100,
			clientY: 100,
		});
		Object.defineProperty(mouseOverEvent, 'target', {
			value: buttonElement,
			writable: false,
		});
		document.dispatchEvent(mouseOverEvent);

		// Tooltip should be present
		const tooltip = document.querySelector('.contrail-tooltip');
		expect(tooltip).toBeInTheDocument();
		expect(tooltip?.textContent).toContain('Button');
	});

	it('does not show tooltips when inactive', () => {
		controller = new ContrailController(defaultConfig);

		// Don't activate contrail (should be inactive by default)
		expect(document.body.classList.contains('contrail-active')).toBe(false);

		// Get a component element
		const buttonElement = document.querySelector('[data-launchpad="Button"]') as HTMLElement;

		// Simulate mouseover
		const mouseOverEvent = new MouseEvent('mouseover', {
			bubbles: true,
			clientX: 100,
			clientY: 100,
		});
		Object.defineProperty(mouseOverEvent, 'target', {
			value: buttonElement,
			writable: false,
		});
		document.dispatchEvent(mouseOverEvent);

		// Tooltip should not be present
		const tooltip = document.querySelector('.contrail-tooltip');
		expect(tooltip).not.toBeInTheDocument();
	});

	it('hides Text and Heading components by default', () => {
		// Add Text component to DOM
		document.body.innerHTML += '<div data-launchpad="Text">Some text</div>';

		controller = new ContrailController(defaultConfig);

		// Activate contrail
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);

		// Hover over Text component
		const textElement = document.querySelector('[data-launchpad="Text"]') as HTMLElement;
		const mouseOverEvent = new MouseEvent('mouseover', {
			bubbles: true,
			clientX: 100,
			clientY: 100,
		});
		Object.defineProperty(mouseOverEvent, 'target', {
			value: textElement,
			writable: false,
		});
		document.dispatchEvent(mouseOverEvent);

		// Tooltip should not appear for Text component by default
		const tooltip = document.querySelector('.contrail-tooltip');
		expect(tooltip).not.toBeInTheDocument();
	});

	it('shows Text and Heading components when enabled in settings', () => {
		// Add Text component to DOM
		document.body.innerHTML += '<div data-launchpad="Text">Some text</div>';

		controller = new ContrailController(defaultConfig);

		// Activate contrail
		const keyEvent = new KeyboardEvent('keydown', {
			key: 'l',
			metaKey: true,
			shiftKey: true,
		});
		document.dispatchEvent(keyEvent);

		// Enable text visibility
		document.body.classList.add('contrail-show-text');

		// Hover over Text component
		const textElement = document.querySelector('[data-launchpad="Text"]') as HTMLElement;
		const mouseOverEvent = new MouseEvent('mouseover', {
			bubbles: true,
			clientX: 100,
			clientY: 100,
		});
		Object.defineProperty(mouseOverEvent, 'target', {
			value: textElement,
			writable: false,
		});
		document.dispatchEvent(mouseOverEvent);

		// Tooltip should appear for Text component when enabled
		const tooltip = document.querySelector('.contrail-tooltip');
		expect(tooltip).toBeInTheDocument();
	});
});
