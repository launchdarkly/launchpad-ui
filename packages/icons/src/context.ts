import { createContext } from 'react';

type IconContextState = {
  path?: string;
  prefix?: string;
};

const IconContext = createContext<IconContextState>({ path: undefined, prefix: undefined });

export { IconContext };
export type { IconContextState };
