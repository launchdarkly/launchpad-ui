import { describe, expect, it } from 'vitest';

import { addLaunchPadAttribution } from '../src/utils/attribution';

describe('addLaunchPadAttribution', () => {
	it('creates data attribute with component name', () => {
		const result = addLaunchPadAttribution('Button');

		expect(result).toEqual({
			'data-launchpad': 'Button',
		});
	});

	it('works with different component names', () => {
		expect(addLaunchPadAttribution('Modal')).toEqual({
			'data-launchpad': 'Modal',
		});

		expect(addLaunchPadAttribution('IconButton')).toEqual({
			'data-launchpad': 'IconButton',
		});

		expect(addLaunchPadAttribution('DatePicker')).toEqual({
			'data-launchpad': 'DatePicker',
		});
	});

	it('handles empty component name', () => {
		const result = addLaunchPadAttribution('');

		expect(result).toEqual({
			'data-launchpad': '',
		});
	});

	it('preserves component name exactly as provided', () => {
		expect(addLaunchPadAttribution('CustomComponent')).toEqual({
			'data-launchpad': 'CustomComponent',
		});

		expect(addLaunchPadAttribution('lowercase')).toEqual({
			'data-launchpad': 'lowercase',
		});
	});
});
