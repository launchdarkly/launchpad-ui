import type { Space } from '@launchpad-ui/types';
import type { ComponentProps, ReactNode } from 'react';

import { cx } from 'classix';
import { Children } from 'react';

import styles from './styles/Inline.module.css';

type InlineProps = ComponentProps<'div'> & {
  'data-test-id'?: string;
  gap?: Space;
  alignX?: 'left' | 'center' | 'right';
  alignY?: 'top' | 'center' | 'bottom';
  children?: ReactNode;
};

const Inline = ({
  children,
  'data-test-id': testId = 'inline',
  gap = '0',
  alignX = 'left',
  alignY = 'center',
  ...props
}: InlineProps) => {
  return (
    <div {...props} className={cx(styles.inline, styles[`gap-${gap}`])} data-test-id={testId}>
      <div className={cx(styles.container, styles[`alignX-${alignX}`], styles[`alignY-${alignY}`])}>
        {Children.map(
          children,
          (child, index) =>
            child && (
              <div key={index} className={styles.item}>
                {child}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export { Inline };
export type { InlineProps };
