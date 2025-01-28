import type { RGB, RGBA } from '@figma/rest-api-spec';

/**
 * Compares two colors for approximate equality since converting between Figma RGBA objects (from 0 -> 1) and
 * hex colors can result in slight differences.
 */
const colorApproximatelyEqual = (colorA: RGB | RGBA, colorB: RGB | RGBA) => {
	return rgbToHex(colorA) === rgbToHex(colorB);
};

const rgbToHex = ({ r, g, b, ...rest }: RGB | RGBA) => {
	const a = 'a' in rest ? rest.a : 1;

	const toHex = (value: number) => {
		const hex = Math.round(value * 255).toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	};

	const hex = [toHex(r), toHex(g), toHex(b)].join('');
	return `#${hex}${a !== 1 ? toHex(a) : ''}`;
};

export { colorApproximatelyEqual, rgbToHex };
