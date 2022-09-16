import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/ButtonGroup.css';

type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  spacing?: 'compact' | 'normal' | 'large';
};

const ButtonGroup = ({ spacing = 'normal', className, children, ...rest }: ButtonGroupProps) => {
  const classes = cx('ButtonGroup', `ButtonGroup--${spacing}`, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps };
