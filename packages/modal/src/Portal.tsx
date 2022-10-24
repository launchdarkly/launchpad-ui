import type { HTMLAttributes } from 'react';

import { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = HTMLAttributes<HTMLDivElement> & {
  container?: HTMLElement | null;
  'data-test-id'?: string;
};

const Portal = forwardRef<HTMLDivElement, PortalProps>(
  (
    { container = globalThis?.document?.body, 'data-test-id': testId = 'portal', ...props },
    ref
  ) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return mounted && container
      ? createPortal(<div {...props} ref={ref} data-test-id={testId} />, container)
      : null;
  }
);

Portal.displayName = 'Portal';

export { Portal };
export type { PortalProps };
