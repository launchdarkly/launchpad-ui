import type { KeyboardEvent } from 'react';

import { isFunction } from 'lodash-es';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => any;

const createItemId = (index: number, id: string) => `${id}-item-${index}`;

const getNodeForIndex = (index: number | null, menuId: string) =>
  index === null ? index : document.getElementById(createItemId(index, menuId));

const normalizeIndex = (index: undefined | null | number, delta: number, count: number) => {
  if (index === undefined || index === null) {
    if (delta < 0) {
      return count - 1;
    } else {
      return 0;
    }
  }

  let normalized = index + delta;
  if (normalized > count - 1) {
    normalized = 0;
  } else if (normalized < 0) {
    normalized = count - 1;
  }
  return normalized;
};

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
    ops[event.key]?.call(this, event);
  }
};

const chainEventHandlers =
  (...handlers: Array<AnyFunction | undefined>) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (event: any) => {
    handlers.forEach((h) => isFunction(h) && h(event));
  };

export {
  createItemId,
  getNodeForIndex,
  normalizeIndex,
  handleKeyboardInteractions,
  chainEventHandlers,
};
