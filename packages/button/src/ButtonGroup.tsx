import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/ButtonGroup.css';

type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  spacing?: 'small' | 'medium' | 'large';
  'data-test-id'?: string;
};

const ButtonGroup = ({
  spacing = 'medium',
  className,
  children,
  'data-test-id': testId = 'button-group',
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
