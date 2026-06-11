import type { ReactNode } from 'react';

export type ComputedValue = { color: string; image: string };

// Converts a computed `rgb()`/`rgba()` string to an uppercase hex string.
// Handles both comma-separated (`rgb(61, 214, 245)`) and space/slash-separated
// (`rgb(61 214 245 / 0.5)`) syntaxes returned by `getComputedStyle`. Alpha is
// appended as an 8-digit hex only when the color is not fully opaque.
export const rgbToHex = (rgb: string): string | null => {
	const match = rgb.trim().match(/^rgba?\(([^)]+)\)$/);

	if (!match) {
		return null;
	}

	const parts = match[1]
		.split(/[\s,/]+/)
		.map((part) => part.trim())
		.filter(Boolean);
	const [r, g, b] = parts.map((part) => Number.parseFloat(part));

	if ([r, g, b].some((channel) => Number.isNaN(channel))) {
		return null;
	}

	const toHex = (channel: number) => Math.round(channel).toString(16).padStart(2, '0');
	let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

	const alpha = parts[3] !== undefined ? Number.parseFloat(parts[3]) : 1;

	if (!Number.isNaN(alpha) && alpha < 1) {
		hex += toHex(alpha * 255);
	}

	return hex.toUpperCase();
};

const isGradient = (computed: ComputedValue) =>
	Boolean(computed.image && computed.image !== 'none');

// Normalizes a computed `rgb()`/`rgba()` string to the `rgba()` form. Opaque
// colors come back from `getComputedStyle` as `rgb(...)`, so add an explicit
// alpha of `1` to keep the displayed value consistently rgba.
export const toRgba = (color: string): string => {
	const match = color.trim().match(/^rgba?\(([^)]+)\)$/);

	if (!match) {
		return color;
	}

	const parts = match[1]
		.split(/[\s,/]+/)
		.map((part) => part.trim())
		.filter(Boolean);

	if (parts.length < 3) {
		return color;
	}

	const [r, g, b] = parts;
	const alpha = parts[3] ?? '1';

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Hex value for solid color tokens. Gradient tokens have no single hex value.
export const getTokenHex = (computed?: ComputedValue): string | null => {
	if (!computed || isGradient(computed)) {
		return null;
	}

	return rgbToHex(computed.color);
};

// The raw value, kept for backwards compatibility: the gradient definition for
// gradient tokens, otherwise the computed rgba string. Gradients are painted via
// `background-image`, so their `background-color` is the meaningless transparent
// default (`rgba(0, 0, 0, 0)`), which we intentionally avoid surfacing.
export const getTokenValue = (computed?: ComputedValue): string | null => {
	if (!computed) {
		return null;
	}

	return isGradient(computed) ? computed.image : toRgba(computed.color);
};

export const TokenCode = ({ children, muted }: { children: ReactNode; muted?: boolean }) => {
	if (children == null) {
		return null;
	}

	return (
		<span
			style={{
				font: 'var(--lp-text-code-1-regular)',
				...(muted ? { color: 'var(--lp-color-text-ui-secondary)' } : {}),
			}}
		>
			{children}
		</span>
	);
};
