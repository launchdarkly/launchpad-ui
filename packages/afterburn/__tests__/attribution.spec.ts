import type { ComponentMetadata } from '../src/types';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import {
	findLaunchPadComponents,
	generateDocsUrl,
	getComponentMetadata,
	getComponentName,
	isLaunchPadComponent,
} from '../src/utils/attribution';

describe('findLaunchPadComponents', () => {
	beforeEach(() => {
		document.body.innerHTML = '';
	});

	afterEach(() => {
		document.body.innerHTML = '';
	});

	it('finds elements with data-launchpad attribute', () => {
		document.body.innerHTML = `
      <div data-launchpad="Button">Button</div>
      <div data-launchpad="Modal">Modal</div>
      <div>Regular div</div>
    `;

		const components = findLaunchPadComponents();

		expect(components).toHaveLength(2);
		expect(components[0].textContent).toBe('Button');
		expect(components[1].textContent).toBe('Modal');
	});

	it('returns empty array when no components found', () => {
		document.body.innerHTML = `
      <div>Regular div</div>
      <span>Regular span</span>
    `;

		const components = findLaunchPadComponents();

		expect(components).toHaveLength(0);
	});

	it('finds nested components', () => {
		document.body.innerHTML = `
      <div>
        <div data-launchpad="Form">
          <div data-launchpad="TextField">Input</div>
          <div data-launchpad="Button">Submit</div>
        </div>
      </div>
    `;

		const components = findLaunchPadComponents();

		expect(components).toHaveLength(3);
	});
});

describe('getComponentName', () => {
	it('returns component name from data-launchpad attribute', () => {
		const element = document.createElement('div');
		element.setAttribute('data-launchpad', 'Button');

		const name = getComponentName(element);

		expect(name).toBe('Button');
	});

	it('returns null when no attribute present', () => {
		const element = document.createElement('div');

		const name = getComponentName(element);

		expect(name).toBeNull();
	});

	it('returns empty string when attribute is empty', () => {
		const element = document.createElement('div');
		element.setAttribute('data-launchpad', '');

		const name = getComponentName(element);

		expect(name).toBe('');
	});
});

describe('isLaunchPadComponent', () => {
	it('returns true for elements with data-launchpad attribute', () => {
		const element = document.createElement('div');
		element.setAttribute('data-launchpad', 'Button');

		const result = isLaunchPadComponent(element);

		expect(result).toBe(true);
	});

	it('returns false for elements without data-launchpad attribute', () => {
		const element = document.createElement('div');

		const result = isLaunchPadComponent(element);

		expect(result).toBe(false);
	});
});

describe('getComponentMetadata', () => {
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

	it('returns metadata for existing component', () => {
		const metadata = getComponentMetadata('Button', mockMetadata);

		expect(metadata).toEqual({
			name: 'Button',
			package: '@launchpad-ui/components',
			version: '0.12.0',
			description: 'A button component',
		});
	});

	it('returns null for non-existing component', () => {
		const metadata = getComponentMetadata('NonExistent', mockMetadata);

		expect(metadata).toBeNull();
	});
});

describe('generateDocsUrl', () => {
	it('generates correct docs URL for Button in buttons category', () => {
		const url = generateDocsUrl('Button');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-buttons-button--docs',
		);
	});

	it('generates correct docs URL with custom base', () => {
		const url = generateDocsUrl('Button', 'https://custom-docs.com');

		expect(url).toBe('https://custom-docs.com/?path=/docs/components-buttons-button--docs');
	});

	it('generates category-based URLs for form components', () => {
		const url = generateDocsUrl('TextField');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-forms-textfield--docs',
		);
	});

	it('generates category-based URLs for navigation components', () => {
		const url = generateDocsUrl('Breadcrumbs');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-navigation-breadcrumbs--docs',
		);
	});

	it('generates category-based URLs for overlay components', () => {
		const url = generateDocsUrl('Modal');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-overlays-modal--docs',
		);
	});

	it('converts camelCase to lowercase for button components', () => {
		const url = generateDocsUrl('ToggleButtonGroup');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-buttons-togglebuttongroup--docs',
		);
	});

	it('handles components without categories (fallback)', () => {
		const url = generateDocsUrl('UnknownComponent');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-unknown-component--docs',
		);
	});

	it('generates correct URL for Alert in status category', () => {
		const url = generateDocsUrl('Alert');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-status-alert--docs',
		);
	});
});
