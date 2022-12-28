import { useCallback, useLayoutEffect, useState } from 'react';

type Dimensions = {
  width: number;
  height: number;
};

type UseDimensionsProps = {
  defaults?: Partial<Dimensions>;
};

/* c8 ignore start */
export function useDimensions<T extends HTMLElement>({ defaults }: UseDimensionsProps = {}) {
  const [node, setNode] = useState<T | null>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
    ...defaults,
  });

  const ref = useCallback((nextNode: T | null) => setNode(nextNode), []);

  function measureDimensions(element: HTMLElement) {
    const rect = element.getBoundingClientRect();

    setDimensions({
      width: rect.width,
      height: rect.height,
    });
  }

  useLayoutEffect(() => {
    if (!node) {
      return;
    }

    const observer = new ResizeObserver(() => {
      measureDimensions(node);
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [node]);

  return {
    ref,
    dimensions,
  };
}
/* c8 ignore stop */

export type { Dimensions, UseDimensionsProps };
