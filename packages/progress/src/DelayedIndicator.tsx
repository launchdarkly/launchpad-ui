import type { ReactElement } from 'react';

import { useEffect, useState } from 'react';

import { AnimationDelay } from './types';

type DelayedIndicatorProps = {
  children: ReactElement;
  delayMs?: number;
};

const DelayedIndicator = ({
  children,
  delayMs = AnimationDelay.DEFAULT,
}: DelayedIndicatorProps) => {
  const [renderChildren, setRenderChildren] = useState(false);

  useEffect(() => {
    let delay: ReturnType<typeof setTimeout> | undefined = undefined;

    if (typeof delayMs === 'number') {
      if (delayMs === 0) {
        setRenderChildren(true);
      } else {
        delay = setTimeout(() => {
          setRenderChildren(true);
        }, delayMs);
      }
    }

    return () => {
      if (delay) {
        clearTimeout(delay);
      }
    };
  }, [delayMs]);

  return renderChildren ? children : null;
};

export { DelayedIndicator };
export type { DelayedIndicatorProps };
