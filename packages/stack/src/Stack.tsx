import type { Space } from '@launchpad-ui/types';
import type { ComponentProps, ReactNode } from 'react';

import { cx } from 'classix';
import { Children } from 'react';

import styles from './styles/Stack.module.css';

type StackProps = ComponentProps<'div'> & {
  'data-test-id'?: string;
  gap?: Space;
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
};

const Stack = ({
  children,
  className,
  'data-test-id': testId = 'stack',
  gap = '0',
  align,
  ...props
}: StackProps) => {
  return (
    <div {...props} className={styles.stack} data-test-id={testId}>
      {Children.map(
        children,
        (child, index) =>
          child && (
            <div
              key={index}
              className={cx(
                styles.item,
                styles[`gap-${gap}`],
                !!align && styles.flex,
                !!align && styles[align]
              )}
            >
              {child}
            </div>
          )
      )}
    </div>
  );
};

export { Stack };
export type { StackProps };
