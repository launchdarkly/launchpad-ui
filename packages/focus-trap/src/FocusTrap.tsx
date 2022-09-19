import type { FocusScopeProps } from '@react-aria/focus';

import { FocusScope } from '@react-aria/focus';
import { createContext, useContext } from 'react';

type FocusTrapProps = Omit<FocusScopeProps, 'contain'>;

const FocusTrapContext = createContext(true);

const FocusTrap = (props: FocusTrapProps) => {
  const context = useContext(FocusTrapContext);

  return <FocusScope contain={context} {...props} />;
};

export { FocusTrap, FocusTrapContext };
export type { FocusTrapProps };
