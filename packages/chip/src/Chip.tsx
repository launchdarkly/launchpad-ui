import cx from 'clsx';

import './styles/Chip.css';
import { ChipKind, ChipSize } from './types';

type ChipProps = {
  kind?: ChipKind;
  size?: ChipSize;
  subtle?: boolean;
  isClickable?: boolean;
  handleClick?(): void;
  handleKeyPress?(e: React.KeyboardEvent<HTMLSpanElement>): void;
  className?: string;
  children?: React.ReactNode;
  ariaDisabled?: boolean;
};

const Chip = ({
  kind = ChipKind.DEFAULT,
  size = ChipSize.NORMAL,
  subtle = false,
  isClickable,
  handleClick,
  handleKeyPress,
  className,
  children,
  ariaDisabled,
}: ChipProps) => {
  const classes = cx(
    'Chip',
    `Chip--${kind}`,
    `Chip--${size}`,
    className,
    {
      'Chip--subtle': subtle,
    },
    { 'Chip--clickable': isClickable }
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

export { Chip };
export type { ChipProps };
