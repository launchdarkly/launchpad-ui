import classNames from 'classnames';

import './styles.css';
import { LozengeKind, LozengeSize } from './types';

type LozengeProps = {
  kind?: LozengeKind;
  size?: LozengeSize;
  subtle?: boolean;
  isClickable?: boolean;
  handleClick?(): void;
  handleKeyPress?(e: React.KeyboardEvent<HTMLSpanElement>): void;
  className?: string;
  children?: React.ReactNode;
  ariaDisabled?: boolean;
};

const Lozenge = ({
  kind = LozengeKind.DEFAULT,
  size = LozengeSize.NORMAL,
  subtle = false,
  isClickable,
  handleClick,
  handleKeyPress,
  className,
  children,
  ariaDisabled,
}: LozengeProps) => {
  const classes = classNames(
    'Lozenge',
    `Lozenge--${kind}`,
    `Lozenge--${size}`,
    className,
    {
      'Lozenge--subtle': subtle,
    },
    { 'Lozenge--clickable': isClickable }
  );

  if (isClickable) {
    return (
      <span
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        className={classes}
        role="button"
        tabIndex={0}
        aria-disabled={ariaDisabled}
      >
        {children}
      </span>
    );
  }
  return (
    <span className={classes} aria-disabled={ariaDisabled}>
      {children}
    </span>
  );
};

export { Lozenge };
export type { LozengeProps };
