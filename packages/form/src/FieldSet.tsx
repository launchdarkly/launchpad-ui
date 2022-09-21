import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/FieldSet.css';

type FieldSetProps = HTMLAttributes<HTMLFieldSetElement> & {
  'data-test-id'?: string;
};

const FieldSet = ({
  children,
  className,
  'data-test-id': testId = 'field-set',
  ...rest
}: FieldSetProps) => {
  const classes = cx('FieldSet', className);

  return (
    <fieldset data-test-id={testId} className={classes} {...rest}>
      {children}
    </fieldset>
  );
};

export { FieldSet };
export type { FieldSetProps };
