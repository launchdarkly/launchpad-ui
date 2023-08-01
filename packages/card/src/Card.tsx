import type { ComponentProps } from 'react';

import { cx } from 'classix';

import styles from './styles/Card.module.css';

type CardProps = ComponentProps<'div'> & {
  'data-test-id'?: string;
};

const Card = ({ children, className, 'data-test-id': testId = 'card' }: CardProps) => {
  return (
    <div className={cx(styles.card, className)} data-test-id={testId}>
      <span>{children}</span>
    </div>
  );
};

export { Card };
export type { CardProps };
