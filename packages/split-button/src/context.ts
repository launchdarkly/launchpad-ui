import type { ButtonProps } from '@launchpad-ui/button';

import { createContext } from 'react';

type SplitButtonContextState = {
  disabled?: boolean;
  kind?: ButtonProps['kind'];
  size?: ButtonProps['size'];
};

const SplitButtonContext = createContext<SplitButtonContextState>({
  disabled: false,
  kind: 'default',
  size: 'normal',
});

export { SplitButtonContext };
export type { SplitButtonContextState };
