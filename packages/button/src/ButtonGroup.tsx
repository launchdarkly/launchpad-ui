import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/ButtonGroup.css';
import { ButtonGroupSpacing } from './types';

type ButtonGroupProps = HTMLAttributes<HTMLElement> & {
  spacing?: ButtonGroupSpacing;
};

const ButtonGroup = ({
  spacing = ButtonGroupSpacing.NORMAL,
  className,
  children,
  ...rest
}: ButtonGroupProps) => {
  const classes = cx('ButtonGroup', `ButtonGroup--${spacing}`, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps };
