import type { ComponentPropsWithRef } from 'react';

import cx from 'clsx';

import './styles/InputGroup.css';

type InputGroupProps = ComponentPropsWithRef<'div'>;

export const InputGroup = ({ className, children, ...other }: InputGroupProps) => {
  const classes = cx('InputGroup', className);

  return (
    <div {...other} className={classes}>
      {children}
    </div>
  );
};
