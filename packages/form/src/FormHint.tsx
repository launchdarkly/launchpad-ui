import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/FormHint.css';

type FormHintProps = HTMLAttributes<HTMLDivElement>;

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
