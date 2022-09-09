import type { SelectHTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/FormInput.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({ className, children, ...rest }: SelectProps) => {
  const classes = cx('FormInput', 'FormInput-select', className);

  return (
    <select {...rest} className={classes}>
      {children}
    </select>
  );
};

export { Select };
export type { SelectProps };
