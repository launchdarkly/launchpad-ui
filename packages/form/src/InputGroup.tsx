import type { ComponentPropsWithRef } from 'react';

import { cx } from 'classix';

import './styles/InputGroup.css';

type InputGroupProps = ComponentPropsWithRef<'div'>;

const InputGroup = ({ className, children, ...other }: InputGroupProps) => {
  const classes = cx('InputGroup', className);

  return (
    <div {...other} className={classes}>
      {children}
    </div>
  );
};

export { InputGroup };
export type { InputGroupProps };
