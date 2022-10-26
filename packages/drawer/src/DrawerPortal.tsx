import type { HTMLAttributes } from 'react';

import { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type DrawerPortalProps = HTMLAttributes<HTMLDivElement> & {
  container?: HTMLElement | null;
  'data-test-id'?: string;
};

const DrawerPortal = forwardRef<HTMLDivElement, DrawerPortalProps>(
  (
    { container = globalThis?.document?.body, 'data-test-id': testId = 'drawer-portal', ...props },
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

DrawerPortal.displayName = 'DrawerPortal';

export { DrawerPortal };
export type { DrawerPortalProps };
