import type { DependencyList } from 'react';

import { useCallback, useLayoutEffect, useRef } from 'react';

const useCallbackIfMounted = <T extends Parameters<typeof useCallback>[0]>(
  callback: T,
  deps: DependencyList = []
) => {
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(
    (...params: unknown[]) => {
      if (isMounted.current) {
        callback(...params);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps, callback]
  );
};

export { useCallbackIfMounted };
