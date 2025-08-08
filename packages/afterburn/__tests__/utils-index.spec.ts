import {
	createShortcutHandler,
	findLaunchPadComponents,
	generateDocsUrl,
	getComponentMetadata,
	getComponentName,
	isLaunchPadComponent,
	matchesShortcut,
	parseShortcut,
} from '../src/utils/index';

describe('utils/index exports', () => {
	test('exports attribution functions', () => {
		expect(findLaunchPadComponents).toBeDefined();
		expect(generateDocsUrl).toBeDefined();
		expect(getComponentMetadata).toBeDefined();
		expect(getComponentName).toBeDefined();
		expect(isLaunchPadComponent).toBeDefined();
	});

	test('exports keyboard functions', () => {
		expect(createShortcutHandler).toBeDefined();
		expect(matchesShortcut).toBeDefined();
		expect(parseShortcut).toBeDefined();
	});
});
