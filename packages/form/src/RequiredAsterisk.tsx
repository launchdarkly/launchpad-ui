import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/RequiredAsterisk.css';

type RequiredAsteriskProps = HTMLAttributes<HTMLSpanElement>;

const RequiredAsterisk = ({ className, ...rest }: RequiredAsteriskProps) => {
  const classes = cx('RequiredAsterisk', className);

  return (
    <span {...rest} className={classes}>
      *
    </span>
  );
};

export { RequiredAsterisk };
export type { RequiredAsteriskProps };
