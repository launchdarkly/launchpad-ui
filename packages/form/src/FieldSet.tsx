import type { ReactNode } from 'react';

import './styles/FieldSet.css';

type FieldSetProps = {
  children?: ReactNode;
};

const FieldSet = ({ children }: FieldSetProps) => {
  return <fieldset className="FieldSet">{children}</fieldset>;
};

export { FieldSet };
export type { FieldSetProps };
