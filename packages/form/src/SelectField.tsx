import type { SelectHTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  'data-test-id'?: string;
};

const SelectField = ({
  className,
  children,
  'data-test-id': testId = 'select',
  ...rest
}: SelectFieldProps) => {
  const classes = cx(styles.formInput, className);

  return (
    <select {...rest} data-test-id={testId} className={classes}>
      {children}
    </select>
  );
};

export { SelectField };
export type { SelectFieldProps };
