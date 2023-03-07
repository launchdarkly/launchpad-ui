import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Tag.module.css';

type TagProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const Tag = ({ children, className, 'data-test-id': testId = 'tag' }: TagProps) => {
  return (
    <div className={cx(styles.tag, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { Tag };
export type { TagProps };
