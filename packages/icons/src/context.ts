import { createContext } from 'react';

type IconContextState = {
  path: string;
};

const IconContext = createContext<IconContextState>({ path: '' });

export { IconContext };
export type { IconContextState };
