import { ButtonKind, ButtonSize } from '@launchpad-ui/button';
import { createContext } from 'react';

type SplitButtonContextState = {
  disabled?: boolean;
  kind?: ButtonKind;
  size?: ButtonSize;
};

const SplitButtonContext = createContext<SplitButtonContextState>({
  disabled: false,
  kind: ButtonKind.DEFAULT,
  size: ButtonSize.NORMAL,
});

export { SplitButtonContext };
export type { SplitButtonContextState };
