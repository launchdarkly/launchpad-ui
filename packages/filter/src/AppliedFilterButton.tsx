import type { ReactNode } from 'react';

import { ExpandMore, IconSize } from '@launchpad-ui/icons';
import cx from 'clsx';
import { Children, forwardRef } from 'react';

import './styles/Filter.css';

type AppliedFilterButtonProps = {
  name: ReactNode;
  className?: string;
  isSelected?: boolean;
  children: ReactNode;
  onClickFilterButton?(): void;
};

type Ref = HTMLButtonElement;

const AppliedFilterButton = forwardRef<Ref, AppliedFilterButtonProps>((props, ref) => {
  const { name, className, isSelected, children, onClickFilterButton } = props;
  return (
    <div className="AppliedFilter-buttonContainer">
      <button
        aria-haspopup
        className={cx(
          'AppliedFilter-button',
          {
            isSelected,
          },
          className
        )}
        ref={ref}
        onClick={onClickFilterButton}
      >
        {name && (
          <span className="AppliedFilter-name">
            {name}
            {Children.count(children) !== 0 && ':'}
          </span>
        )}
        {Children.count(children) !== 0 && (
          <span className="AppliedFilter-description">{children}</span>
        )}
        <ExpandMore size={IconSize.SMALL} />
      </button>
    </div>
  );
});

AppliedFilterButton.displayName = 'AppliedFilterButton';

export type { AppliedFilterButtonProps };
export { AppliedFilterButton };
