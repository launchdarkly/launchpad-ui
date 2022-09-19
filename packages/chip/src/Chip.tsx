import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Chip.module.css';
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
    styles.Chip,
    styles[`Chip--${kind}`],
    styles[`Chip--${size}`],
    className,
    subtle && styles['Chip--subtle'],
    isInteractive && styles['Chip--clickable']
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
