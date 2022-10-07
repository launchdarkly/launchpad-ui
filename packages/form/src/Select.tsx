import type { SelectHTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Form.module.css';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  'data-test-id'?: string;
};

const Select = ({
  className,
  children,
  'data-test-id': testId = 'select',
  ...rest
}: SelectProps) => {
  const classes = cx(styles.formInput, className);

  return (
    <select {...rest} data-test-id={testId} className={classes}>
      {children}
    </select>
  );
};

export { Select };
export type { SelectProps };
