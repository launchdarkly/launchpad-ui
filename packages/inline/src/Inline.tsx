import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Inline.module.css';

type InlineProps = ComponentProps<'div'> & {
  'data-test-id'?: string;
};

const Inline = ({ children, className, 'data-test-id': testId = 'inline' }: InlineProps) => {
  return (
    <div className={cx(styles.inline, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { Inline };
export type { InlineProps };
