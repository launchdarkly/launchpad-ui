import type { IconProps } from '@launchpad-ui/icons';
import type { HTMLAttributes, ReactElement } from 'react';

import { cx } from 'classix';
import { cloneElement } from 'react';

import styles from './styles/Chip.module.css';

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  kind?: 'success' | 'warning' | 'error' | 'info' | 'new' | 'beta' | 'federal';
  size?: 'tiny' | 'small';
  icon?: Omit<ReactElement<IconProps>, 'size'>;
  'data-test-id'?: string;
};

const Chip = ({
  kind,
  onClick,
  onKeyDown,
  className,
  children,
  icon,
  size = 'small',
  'data-test-id': testId = 'chip',
  ...rest
}: ChipProps) => {
  const isInteractive = !!(onClick || onKeyDown);

  const clonedIcon =
    icon &&
    cloneElement(icon, {
      key: 'icon',
      size,
      'aria-hidden': true,
      className: cx(icon.props.className, styles.icon),
    });

  const classes = cx(
    styles.chip,
    kind && styles[kind],
    styles[size],
    className,
    isInteractive && styles.clickable
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
      {clonedIcon}
      {children}
    </span>
  );
};

export { Chip };
export type { ChipProps };
