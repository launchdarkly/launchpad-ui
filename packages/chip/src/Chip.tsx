import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Chip.css';
import { ChipKind, ChipSize } from './types';

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  kind?: ChipKind;
  size?: ChipSize;
  subtle?: boolean;
};

const Chip = ({
  kind = ChipKind.DEFAULT,
  size = ChipSize.NORMAL,
  subtle = false,
  onClick,
  onKeyDown,
  className,
  children,
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
