import type { FocusScopeProps } from '@react-aria/focus';

import { FocusScope } from '@react-aria/focus';
import { useEffect, useState } from 'react';

type FocusTrapProps = Omit<FocusScopeProps, 'contain'>;

const FocusTrap = (props: FocusTrapProps) => {
  const [contain, setContain] = useState(true);

  useEffect(() => {
    const unsubscribe = window.CommandBar?.addEventSubscriber((eventType) => {
      if (eventType === 'opened') {
        setContain(false);
      } else if (eventType === 'closed') {
        setContain(true);
      }
    });

    return () => {
      unsubscribe?.then((unsubscribeFn) => unsubscribeFn());
    };
  }, []);

  return <FocusScope contain={contain} {...props} />;
};

export { FocusTrap };
export type { FocusTrapProps };
