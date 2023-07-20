import { createContext } from 'react';

type IconContextState = {
  path?: string;
};

const IconContext = createContext<IconContextState>({ path: undefined });

export { IconContext };
export type { IconContextState };
