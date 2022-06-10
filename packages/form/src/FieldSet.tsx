import type { ReactNode } from 'react';

import './styles/FieldSet.css';

type FieldSetProps = {
  children?: ReactNode;
  testId?: string;
};

const FieldSet = ({ children, testId }: FieldSetProps) => {
  return (
    <fieldset className="FieldSet" data-test-id={testId}>
      {children}
    </fieldset>
  );
};

export { FieldSet };
export type { FieldSetProps };
