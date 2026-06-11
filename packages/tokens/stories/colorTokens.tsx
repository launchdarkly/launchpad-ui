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

export const TokenValue = ({ computed }: { computed?: ComputedValue }) => {
	if (!computed) {
		return null;
	}

	// Gradient tokens are painted via `background-image`, so `background-color`
	// resolves to the transparent default (`rgba(0, 0, 0, 0)`). Show the gradient
	// definition instead of a meaningless color value.
	if (computed.image && computed.image !== 'none') {
		return <span style={{ font: 'var(--lp-text-code-1-regular)' }}>{computed.image}</span>;
	}

	const hex = rgbToHex(computed.color);

	if (!hex) {
		return <span style={{ font: 'var(--lp-text-code-1-regular)' }}>{computed.color}</span>;
	}

	return (
		<span style={{ font: 'var(--lp-text-code-1-regular)' }}>
			<span>{hex}</span>{' '}
			{/* rgba is kept for backwards compatibility even though hex is now shown. */}
			<span style={{ color: 'var(--lp-color-text-ui-secondary)' }}>{computed.color}</span>
		</span>
	);
};
