import type { ComponentMetadata } from '../src/types';

import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import {
	findLaunchPadComponents,
	generateDocsUrl,
	generateStorybookUrl,
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
	it('generates correct docs URL with default base', () => {
		const url = generateDocsUrl('Button');

		expect(url).toBe('https://launchpad.launchdarkly.com/?path=/docs/components-button--docs');
	});

	it('generates correct docs URL with custom base', () => {
		const url = generateDocsUrl('Button', 'https://custom-docs.com');

		expect(url).toBe('https://custom-docs.com/?path=/docs/components-button--docs');
	});

	it('converts camelCase to kebab-case', () => {
		const url = generateDocsUrl('IconButton');

		expect(url).toBe('https://launchpad.launchdarkly.com/?path=/docs/components-icon-button--docs');
	});

	it('handles complex component names', () => {
		const url = generateDocsUrl('ToggleButtonGroup');

		expect(url).toBe(
			'https://launchpad.launchdarkly.com/?path=/docs/components-toggle-button-group--docs',
		);
	});
});

describe('generateStorybookUrl', () => {
	it('generates correct storybook URL', () => {
		const url = generateStorybookUrl('Button', 'https://storybook.example.com');

		expect(url).toBe('https://storybook.example.com/?path=/docs/components-button--docs');
	});

	it('converts camelCase to kebab-case', () => {
		const url = generateStorybookUrl('DatePicker', 'https://storybook.example.com');

		expect(url).toBe('https://storybook.example.com/?path=/docs/components-date-picker--docs');
	});
});
