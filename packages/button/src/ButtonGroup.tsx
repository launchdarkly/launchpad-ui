import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/ButtonGroup.css';
import { ButtonGroupSpacing } from './types';

type ButtonGroupProps = {
  spacing?: ButtonGroupSpacing;
  className?: string;
  testId?: string;
  children: ReactNode;
};

const ButtonGroup = ({
  spacing = ButtonGroupSpacing.NORMAL,
  className,
  testId,
  children,
  ...rest
}: ButtonGroupProps) => {
  const classes = cx('ButtonGroup', `ButtonGroup--${spacing}`, className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      {children}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps };
