import type { EventHandler, KeyboardEvent, SyntheticEvent } from 'react';

const createItemId = (index: number, id: string) => `${id}-item-${index}`;

const getNodeForIndex = (index: number | null, menuId: string) =>
	index === null ? index : document.getElementById(createItemId(index, menuId));

const handleKeyboardInteractions = (
	event: KeyboardEvent,
	keyHandlers: Partial<
		Record<'handleUp' | 'handleDown' | 'handleEnter', (e: KeyboardEvent) => void>
	>,
) => {
	const ops = {
		ArrowUp: keyHandlers.handleUp,
		ArrowDown: keyHandlers.handleDown,
		Enter: keyHandlers.handleEnter,
		// biome-ignore lint/suspicious/noConfusingVoidType: ignore
	} as Record<string, (e: KeyboardEvent) => void | undefined>;

	if (ops[event.key]) {
		event.preventDefault();
		ops[event.key]?.call(globalThis, event);
	}
};

const chainEventHandlers =
	(...handlers: (EventHandler<SyntheticEvent> | undefined)[]) =>
	(event: SyntheticEvent) => {
		for (const h of handlers) {
			typeof h === 'function' && h(event);
		}
	};

export { createItemId, getNodeForIndex, handleKeyboardInteractions, chainEventHandlers };
