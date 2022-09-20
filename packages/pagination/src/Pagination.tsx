import type { PaginationChange } from './PaginationButton';
import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import { PaginationButton } from './PaginationButton';
import { PaginationText } from './PaginationText';
import './styles/Pagination.css';

type PaginationProps = HTMLAttributes<HTMLElement> & {
  resourceName: string;
  isFirstDisabled?: boolean;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
  isLastDisabled?: boolean;
  onChange: (change: PaginationChange) => void;
  currentOffset: number;
  pageSize: number;
  isReady: boolean;
  totalCount: number;
  'data-test-id'?: string;
};

const Pagination = ({
  className,
  resourceName,
  isFirstDisabled,
  isPrevDisabled,
  isNextDisabled,
  isLastDisabled,
  onChange,
  currentOffset,
  pageSize,
  isReady,
  totalCount,
  'aria-label': ariaLabel,
  'data-test-id': testId = 'pagination',
  ...rest
}: PaginationProps) => {
  return (
    <nav
      {...rest}
      className={cx('Pagination', className)}
      aria-label={ariaLabel ?? `Pagination for ${resourceName} list.`}
      data-test-id={testId}
    >
      <PaginationButton
        resourceName={resourceName}
        kind="first"
        disabled={!!isFirstDisabled}
        onClick={onChange}
      />
      <PaginationButton
        resourceName={resourceName}
        kind="prev"
        disabled={!!isPrevDisabled}
        onClick={onChange}
      />
      <PaginationText
        currentOffset={currentOffset}
        pageSize={pageSize}
        isReady={isReady}
        totalCount={totalCount}
      />
      <PaginationButton
        resourceName={resourceName}
        kind="next"
        disabled={!!isNextDisabled}
        onClick={onChange}
      />
      <PaginationButton
        resourceName={resourceName}
        kind="last"
        disabled={!!isLastDisabled}
        onClick={onChange}
      />
    </nav>
  );
};

export { Pagination };
export type { PaginationProps };
