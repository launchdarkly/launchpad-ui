import { describe, expect, it, vi } from 'vitest';

import { createShortcutHandler, matchesShortcut, parseShortcut } from '../src/utils/keyboard';

describe('parseShortcut', () => {
	it('parses simple key', () => {
		const result = parseShortcut('l');

		expect(result).toEqual({
			key: 'l',
			ctrl: false,
			meta: false,
			shift: false,
			alt: false,
		});
	});

	it('parses cmd+key', () => {
		const result = parseShortcut('cmd+l');

		expect(result).toEqual({
			key: 'l',
			ctrl: false,
			meta: true,
			shift: false,
			alt: false,
		});
	});

	it('parses ctrl+key', () => {
		const result = parseShortcut('ctrl+h');

		expect(result).toEqual({
			key: 'h',
			ctrl: true,
			meta: false,
			shift: false,
			alt: false,
		});
	});

	it('parses complex shortcuts', () => {
		const result = parseShortcut('ctrl+shift+alt+k');

		expect(result).toEqual({
			key: 'k',
			ctrl: true,
			meta: false,
			shift: true,
			alt: true,
		});
	});

	it('handles case insensitivity', () => {
		const result = parseShortcut('CMD+SHIFT+L');

		expect(result).toEqual({
			key: 'l',
			ctrl: false,
			meta: true,
			shift: true,
			alt: false,
		});
	});

	it('handles meta as alias for cmd', () => {
		const result = parseShortcut('meta+j');

		expect(result).toEqual({
			key: 'j',
			ctrl: false,
			meta: true,
			shift: false,
			alt: false,
		});
	});
});

describe('matchesShortcut', () => {
	const createMockEvent = (options: Partial<KeyboardEvent>): KeyboardEvent =>
		({
			key: 'l',
			ctrlKey: false,
			metaKey: false,
			shiftKey: false,
			altKey: false,
			preventDefault: vi.fn(),
			stopPropagation: vi.fn(),
			...options,
		}) as unknown as KeyboardEvent;

	it('matches simple key', () => {
		const shortcut = parseShortcut('l');
		const event = createMockEvent({ key: 'l' });

		expect(matchesShortcut(event, shortcut)).toBe(true);
	});

	it('matches cmd+key', () => {
		const shortcut = parseShortcut('cmd+l');
		const event = createMockEvent({ key: 'l', metaKey: true });

		expect(matchesShortcut(event, shortcut)).toBe(true);
	});

	it('matches ctrl+key', () => {
		const shortcut = parseShortcut('ctrl+h');
		const event = createMockEvent({ key: 'h', ctrlKey: true });

		expect(matchesShortcut(event, shortcut)).toBe(true);
	});

	it('does not match when modifiers are wrong', () => {
		const shortcut = parseShortcut('cmd+l');
		const event = createMockEvent({ key: 'l', ctrlKey: true }); // ctrl instead of cmd

		expect(matchesShortcut(event, shortcut)).toBe(false);
	});

	it('does not match when key is wrong', () => {
		const shortcut = parseShortcut('cmd+l');
		const event = createMockEvent({ key: 'h', metaKey: true });

		expect(matchesShortcut(event, shortcut)).toBe(false);
	});

	it('handles case insensitive key matching', () => {
		const shortcut = parseShortcut('cmd+L');
		const event = createMockEvent({ key: 'l', metaKey: true });

		expect(matchesShortcut(event, shortcut)).toBe(true);
	});
});

describe('createShortcutHandler', () => {
	it('calls handler when shortcut matches', () => {
		const handler = vi.fn();
		const shortcutHandler = createShortcutHandler('cmd+l', handler);
		const event = {
			key: 'l',
			metaKey: true,
			ctrlKey: false,
			shiftKey: false,
			altKey: false,
			preventDefault: vi.fn(),
			stopPropagation: vi.fn(),
		} as unknown as KeyboardEvent;

		shortcutHandler(event);

		expect(handler).toHaveBeenCalledTimes(1);
		expect(event.preventDefault).toHaveBeenCalled();
		expect(event.stopPropagation).toHaveBeenCalled();
	});

	it('does not call handler when shortcut does not match', () => {
		const handler = vi.fn();
		const shortcutHandler = createShortcutHandler('cmd+l', handler);
		const event = {
			key: 'h', // wrong key
			metaKey: true,
			ctrlKey: false,
			shiftKey: false,
			altKey: false,
			preventDefault: vi.fn(),
			stopPropagation: vi.fn(),
		} as unknown as KeyboardEvent;

		shortcutHandler(event);

		expect(handler).not.toHaveBeenCalled();
		expect(event.preventDefault).not.toHaveBeenCalled();
	});
});
