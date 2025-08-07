import type { ComponentMetadata } from '../src/types';

import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ComponentHighlighter } from '../src/ComponentHighlighter';

// Mock component metadata
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

// Mock the utils to avoid DOM manipulation complexities in tests
vi.mock('../src/utils/attribution', () => ({
	findLaunchPadComponents: vi.fn(() => []),
	getComponentName: vi.fn(() => null),
}));

describe('ComponentHighlighter', () => {
	beforeEach(() => {
		// Clear any existing DOM content
		document.body.innerHTML = '';

		// Reset all mocks
		vi.clearAllMocks();
	});

	afterEach(() => {
		document.body.innerHTML = '';
	});

	it('renders nothing when inactive', () => {
		render(
			<ComponentHighlighter
				active={false}
				metadata={mockMetadata}
				docsBaseUrl="https://docs.example.com"
				storybookUrl="https://storybook.example.com"
			/>,
		);

		expect(document.querySelector('.contrail')).not.toBeInTheDocument();
	});

	it('renders contrail container when active', () => {
		render(
			<ComponentHighlighter
				active={true}
				metadata={mockMetadata}
				docsBaseUrl="https://docs.example.com"
				storybookUrl="https://storybook.example.com"
			/>,
		);

		expect(document.querySelector('.contrail')).toBeInTheDocument();
	});

	it('calls updateComponents when active state changes', () => {
		const { rerender } = render(
			<ComponentHighlighter
				active={false}
				metadata={mockMetadata}
				docsBaseUrl="https://docs.example.com"
				storybookUrl="https://storybook.example.com"
			/>,
		);

		// Initially inactive, should not have contrail
		expect(document.querySelector('.contrail')).not.toBeInTheDocument();

		// Activate
		rerender(
			<ComponentHighlighter
				active={true}
				metadata={mockMetadata}
				docsBaseUrl="https://docs.example.com"
				storybookUrl="https://storybook.example.com"
			/>,
		);

		// Should now have contrail
		expect(document.querySelector('.contrail')).toBeInTheDocument();
	});

	it('accepts configuration props', () => {
		const props = {
			active: true,
			metadata: mockMetadata,
			docsBaseUrl: 'https://custom-docs.com',
			storybookUrl: 'https://custom-storybook.com',
		};

		render(<ComponentHighlighter {...props} />);

		// Component should render successfully with custom props
		expect(document.querySelector('.contrail')).toBeInTheDocument();
	});
});
