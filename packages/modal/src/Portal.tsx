import type { KeyboardEvent } from 'react';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './styles/Modal.css';

type PortalProps = {
  containerRef?: (node: HTMLDivElement) => void;
  onChildrenMount?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  children?: React.ReactNode;
};

const Portal = ({ children, containerRef, onChildrenMount, ...props }: PortalProps) => {
  const [portal, setPortal] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.classList.add('Portal');

    setPortal(portal);
    document.body.appendChild(portal);

    return () => {
      document.body.removeChild(portal);
    };
  }, []);

  return portal
    ? createPortal(
        <div {...props} ref={containerRef}>
          {children}
        </div>,
        portal
      )
    : null;
};

export { Portal };
export type { PortalProps };
