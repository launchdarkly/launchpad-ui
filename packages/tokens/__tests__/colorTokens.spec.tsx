import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getTokenHex, getTokenValue, rgbToHex, TokenCode } from '../stories/colorTokens';

const GRADIENT = 'linear-gradient(136deg, rgb(61, 214, 245) 22.68%, rgb(64, 91, 255) 127.6%)';

describe('rgbToHex', () => {
	it('converts an opaque rgb() string to 6-digit hex', () => {
		expect(rgbToHex('rgb(61, 214, 245)')).toBe('#3DD6F5');
	});

	it('converts a translucent rgba() string to 8-digit hex', () => {
		expect(rgbToHex('rgba(0, 0, 0, 0.5)')).toBe('#00000080');
	});

	it('omits the alpha channel when fully opaque', () => {
		expect(rgbToHex('rgba(255, 53, 162, 1)')).toBe('#FF35A2');
	});

	it('supports the space/slash-separated syntax', () => {
		expect(rgbToHex('rgb(61 214 245 / 0.5)')).toBe('#3DD6F580');
	});

	it('returns null for non-color values such as gradients', () => {
		expect(rgbToHex(GRADIENT)).toBeNull();
	});
});

describe('getTokenHex', () => {
	it('returns the hex for a solid color', () => {
		expect(getTokenHex({ color: 'rgb(61, 214, 245)', image: 'none' })).toBe('#3DD6F5');
	});

	it('returns null for a gradient token', () => {
		expect(getTokenHex({ color: 'rgba(0, 0, 0, 0)', image: GRADIENT })).toBeNull();
	});

	it('returns null when the value is not yet computed', () => {
		expect(getTokenHex(undefined)).toBeNull();
	});
});

describe('getTokenValue', () => {
	it('returns the rgba string for a solid color (kept for backwards compatibility)', () => {
		expect(getTokenValue({ color: 'rgb(61, 214, 245)', image: 'none' })).toBe('rgb(61, 214, 245)');
	});

	it('returns the gradient definition instead of the transparent fallback', () => {
		expect(getTokenValue({ color: 'rgba(0, 0, 0, 0)', image: GRADIENT })).toBe(GRADIENT);
	});

	it('returns null when the value is not yet computed', () => {
		expect(getTokenValue(undefined)).toBeNull();
	});
});

describe('TokenCode', () => {
	it('renders its content', () => {
		render(<TokenCode>#3DD6F5</TokenCode>);

		expect(screen.getByText('#3DD6F5')).toBeInTheDocument();
	});

	it('renders nothing when there is no content', () => {
		const { container } = render(<TokenCode>{null}</TokenCode>);

		expect(container).toBeEmptyDOMElement();
	});
});
