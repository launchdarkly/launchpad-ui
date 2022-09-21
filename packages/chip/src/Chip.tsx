import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Chip.css';

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  kind?:
    | 'default'
    | 'success'
    | 'warning'
    | 'inactive'
    | 'flag'
    | 'info'
    | 'label'
    | 'new'
    | 'beta'
    | 'invited'
    | 'federal';
  size?: 'normal' | 'large';
  subtle?: boolean;
  'data-test-id'?: string;
};

const Chip = ({
  kind = 'default',
  size = 'normal',
  subtle = false,
  onClick,
  onKeyDown,
  className,
  children,
  'data-test-id': testId = 'chip',
  ...rest
}: ChipProps) => {
  const isInteractive = !!(onClick || onKeyDown);

  const classes = cx(
    'Chip',
    `Chip--${kind}`,
    `Chip--${size}`,
    className,
    subtle && 'Chip--subtle',
    isInteractive && 'Chip--clickable'
  );

  return (
    <span
      className={classes}
      data-test-id={testId}
      {...(isInteractive
        ? {
            onClick,
            onKeyDown,
            tabIndex: 0,
            role: 'button',
          }
        : {})}
      {...rest}
    >
      {children}
    </span>
  );
};

export { Chip };
export type { ChipProps };
