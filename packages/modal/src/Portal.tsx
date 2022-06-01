import type { KeyboardEvent } from 'react';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './styles.css';

type PortalProps = {
  containerRef?: (node: HTMLDivElement) => void;
  onChildrenMount?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
};

const Portal = ({ children, containerRef, onChildrenMount, ...props }: PortalProps) => {
  const [portal] = useState<HTMLDivElement>(() => document.createElement('div'));

  useEffect(() => {
    portal.classList.add('Portal');
    document.body.appendChild(portal);

    return () => {
      document.body.removeChild(portal);
    };
  }, [portal]);

  return createPortal(
    <div {...props} ref={containerRef}>
      {children}
    </div>,
    portal
  );
};

export { Portal };
export type { PortalProps };
