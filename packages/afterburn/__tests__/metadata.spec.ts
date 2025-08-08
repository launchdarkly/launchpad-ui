import { componentMetadata } from '../src/metadata.generated';

describe('metadata.generated', () => {
	test('exports componentMetadata object', () => {
		expect(componentMetadata).toBeDefined();
		expect(typeof componentMetadata).toBe('object');
	});

	test('componentMetadata has expected structure', () => {
		const keys = Object.keys(componentMetadata);
		expect(keys.length).toBeGreaterThan(0);

		const firstComponent = componentMetadata[keys[0]];
		expect(firstComponent).toHaveProperty('name');
		expect(firstComponent).toHaveProperty('package');
		expect(firstComponent).toHaveProperty('version');
		expect(firstComponent).toHaveProperty('description');
	});

	test('includes Alert component metadata', () => {
		expect(componentMetadata.Alert).toBeDefined();
		expect(componentMetadata.Alert.name).toBe('Alert');
		expect(componentMetadata.Alert.package).toBe('@launchpad-ui/components');
	});
});
