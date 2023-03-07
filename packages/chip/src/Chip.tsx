import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Chip.module.css';

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  kind?: 'success' | 'warning' | 'info' | 'label' | 'new' | 'beta' | 'federal';
  subtle?: boolean;
  size?: 'normal' | 'small' | 'medium';
  'data-test-id'?: string;
};

const Chip = ({
  kind,
  subtle = false,
  onClick,
  onKeyDown,
  className,
  children,
  size = 'normal',
  'data-test-id': testId = 'chip',
  ...rest
}: ChipProps) => {
  const isInteractive = !!(onClick || onKeyDown);

  const classes = cx(
    styles.Chip,
    kind && styles[`Chip--${kind}`],
    styles[`Chip--${size}`],
    className,
    subtle && styles['Chip--subtle'],
    isInteractive && styles['Chip--clickable']
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
