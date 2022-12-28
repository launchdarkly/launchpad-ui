import type { EventHandler, KeyboardEvent, SyntheticEvent } from 'react';
declare const createItemId: (index: number, id: string) => string;
declare const getNodeForIndex: (index: number | null, menuId: string) => HTMLElement | null;
declare const handleKeyboardInteractions: (event: KeyboardEvent, keyHandlers: Partial<Record<"handleUp" | "handleDown" | "handleEnter", (e: KeyboardEvent) => void>>) => void;
declare const chainEventHandlers: (...handlers: Array<EventHandler<SyntheticEvent> | undefined>) => (event: SyntheticEvent) => void;
export { createItemId, getNodeForIndex, handleKeyboardInteractions, chainEventHandlers };
//# sourceMappingURL=utils.d.ts.map