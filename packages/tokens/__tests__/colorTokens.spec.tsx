import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { rgbToHex, TokenValue } from '../stories/colorTokens';

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
		expect(rgbToHex('linear-gradient(136deg, rgb(61, 214, 245), rgb(64, 91, 255))')).toBeNull();
	});
});

describe('TokenValue', () => {
	it('shows both hex and the original rgba for solid colors', () => {
		render(<TokenValue computed={{ color: 'rgb(61, 214, 245)', image: 'none' }} />);

		expect(screen.getByText('#3DD6F5')).toBeInTheDocument();
		// rgba is kept alongside the hex for backwards compatibility.
		expect(screen.getByText('rgb(61, 214, 245)')).toBeInTheDocument();
	});

	it('shows the gradient definition instead of the transparent fallback', () => {
		const gradient = 'linear-gradient(136deg, rgb(61, 214, 245) 22.68%, rgb(64, 91, 255) 127.6%)';
		render(<TokenValue computed={{ color: 'rgba(0, 0, 0, 0)', image: gradient }} />);

		expect(screen.getByText(gradient)).toBeInTheDocument();
		expect(screen.queryByText('rgba(0, 0, 0, 0)')).not.toBeInTheDocument();
	});

	it('renders nothing before the computed value is available', () => {
		const { container } = render(<TokenValue />);

		expect(container).toBeEmptyDOMElement();
	});
});
