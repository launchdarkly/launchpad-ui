import type { ComponentProps } from 'react';

import { cx } from 'classix';

import './styles/ButtonGroup.css';

type ButtonGroupProps = ComponentProps<'div'> & {
  spacing?: 'compact' | 'normal' | 'large';
  'data-test-id'?: string;
};

const ButtonGroup = ({
  spacing = 'normal',
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
