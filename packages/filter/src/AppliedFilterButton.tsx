import type { ReactNode } from 'react';

import { ExpandMore } from '@launchpad-ui/icons';
import { cx } from 'classix';
import { Children, forwardRef } from 'react';

import styles from './styles/Filter.module.css';

type AppliedFilterButtonProps = {
  name?: ReactNode;
  className?: string;
  children: ReactNode;
  onClickFilterButton?(): void;
  'data-test-id': string;
};

type Ref = HTMLButtonElement;

const AppliedFilterButton = forwardRef<Ref, AppliedFilterButtonProps>((props, ref) => {
  const { name, className, children, onClickFilterButton, 'data-test-id': testId } = props;

  const hasDescription = Children.count(children) !== 0;

  return (
    <div data-test-id={testId}>
      <button
        aria-haspopup
        className={cx(styles.appliedButton, className)}
        ref={ref}
        onClick={onClickFilterButton}
      >
        {name && (
          <span className={styles.appliedName}>
            {name}
            {hasDescription && ':'}
          </span>
        )}
        {hasDescription && <span className={styles.appliedDescription}>{children}</span>}
        <ExpandMore size="small" />
      </button>
    </div>
  );
});

AppliedFilterButton.displayName = 'AppliedFilterButton';

export type { AppliedFilterButtonProps };
export { AppliedFilterButton };
