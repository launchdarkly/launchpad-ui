import type { ReactNode } from 'react';

const Lozenge = ({ children }: { children: ReactNode }) => (
  <span style={{ background: 'lightcyan' }}>{children}</span>
);

export { Lozenge };
