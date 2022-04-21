import type { ReactNode } from 'react';

const Lozenge = ({ children }: { children: ReactNode }) => (
  <>
    <span style={{ background: 'lightcyan' }}>{children}</span>
    <div style={{ background: 'pink' }}>test</div>
  </>
);

export { Lozenge };
