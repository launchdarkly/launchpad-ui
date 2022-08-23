import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/FormHint.css';

type FormHintProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const FormHint = ({ className, children, ...rest }: FormHintProps) => {
  const classes = cx('Form-hint', className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export { FormHint };
export type { FormHintProps };
