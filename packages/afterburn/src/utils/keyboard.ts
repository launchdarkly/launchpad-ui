/**
 * Keyboard shortcut utilities for Afterburn
 */

/**
 * Parse a keyboard shortcut string (e.g., "cmd+l", "ctrl+shift+h")
 */
export function parseShortcut(shortcut: string): {
	key: string;
	ctrl: boolean;
	meta: boolean;
	shift: boolean;
	alt: boolean;
} {
	const parts = shortcut.toLowerCase().split('+');
	const key = parts[parts.length - 1];

	return {
		key,
		ctrl: parts.includes('ctrl'),
		meta: parts.includes('cmd') || parts.includes('meta'),
		shift: parts.includes('shift'),
		alt: parts.includes('alt'),
	};
}

/**
 * Check if a keyboard event matches a parsed shortcut
 */
export function matchesShortcut(
	event: KeyboardEvent,
	shortcut: ReturnType<typeof parseShortcut>,
): boolean {
	return (
		event.key.toLowerCase() === shortcut.key &&
		event.ctrlKey === shortcut.ctrl &&
		event.metaKey === shortcut.meta &&
		event.shiftKey === shortcut.shift &&
		event.altKey === shortcut.alt
	);
}

/**
 * Create a keyboard event handler for a shortcut
 */
export function createShortcutHandler(
	shortcut: string,
	handler: () => void,
): (event: KeyboardEvent) => void {
	const parsedShortcut = parseShortcut(shortcut);

	return (event: KeyboardEvent) => {
		if (matchesShortcut(event, parsedShortcut)) {
			event.preventDefault();
			event.stopPropagation();
			handler();
		}
	};
}
