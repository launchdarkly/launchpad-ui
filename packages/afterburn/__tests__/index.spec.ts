import {
	AfterburnController,
	AfterburnTooltip,
	componentMetadata,
	findLaunchPadComponents,
	generateDocsUrl,
	getComponentMetadata,
	getComponentName,
	isLaunchPadComponent,
	LaunchPadAfterburn,
} from '../src/index';

describe('index exports', () => {
	test('exports AfterburnController', () => {
		expect(AfterburnController).toBeDefined();
	});

	test('exports AfterburnTooltip', () => {
		expect(AfterburnTooltip).toBeDefined();
	});

	test('exports LaunchPadAfterburn', () => {
		expect(LaunchPadAfterburn).toBeDefined();
	});

	test('exports componentMetadata', () => {
		expect(componentMetadata).toBeDefined();
		expect(typeof componentMetadata).toBe('object');
	});

	test('exports utility functions', () => {
		expect(findLaunchPadComponents).toBeDefined();
		expect(generateDocsUrl).toBeDefined();
		expect(getComponentMetadata).toBeDefined();
		expect(getComponentName).toBeDefined();
		expect(isLaunchPadComponent).toBeDefined();
	});
});
