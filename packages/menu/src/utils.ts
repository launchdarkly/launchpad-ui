import type { KeyboardEvent } from 'react';

import { isFunction } from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

const createItemId = (index: number, id: string) => `${id}-item-${index}`;

const getNodeForIndex = (index: number | null, menuId: string) =>
  index === null ? index : document.getElementById(createItemId(index, menuId));

const handleKeyboardInteractions = (
  event: React.KeyboardEvent,
  keyHandlers: Partial<
    Record<'handleUp' | 'handleDown' | 'handleEnter', (e: KeyboardEvent) => void>
  >
) => {
  const ops = {
    ArrowUp: keyHandlers.handleUp,
    ArrowDown: keyHandlers.handleDown,
    Enter: keyHandlers.handleEnter,
  } as Record<string, (e: KeyboardEvent) => void | undefined>;

  if (ops[event.key]) {
    event.preventDefault();
    ops[event.key]?.call(globalThis, event);
  }
};

const chainEventHandlers =
  (...handlers: Array<AnyFunction | undefined>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (event: any) => {
    handlers.forEach((h) => isFunction(h) && h(event));
  };

export { createItemId, getNodeForIndex, handleKeyboardInteractions, chainEventHandlers };
