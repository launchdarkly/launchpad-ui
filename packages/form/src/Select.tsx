import type { ChangeEvent, ReactNode } from 'react';

import { cx } from 'classix';

import './styles/FormInput.css';

type SelectProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void;
  testId?: string;
  value?: number | string;
  'aria-label'?: string;
};

const Select = ({ className, children, testId, ...rest }: SelectProps) => {
  const classes = cx('FormInput', 'FormInput-select', className);

  return (
    <select {...rest} className={classes} data-test-id={testId}>
      {children}
    </select>
  );
};

export { Select };
export type { SelectProps };
