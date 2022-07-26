import cx from 'clsx';

import { PaginationButton } from './PaginationButton';
import { PaginationText } from './PaginationText';
import './styles/Pagination.css';
import { PaginationChange } from './types';

type PaginationProps = {
  className?: string;
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
}: PaginationProps) => {
  return (
    <nav
      className={cx('Pagination', className)}
      aria-label={`Pagination for ${resourceName} list.`}
    >
      <PaginationButton
        resourceName={resourceName}
        kind={PaginationChange.FIRST}
        disabled={!!isFirstDisabled}
        onClick={onChange}
      />
      <PaginationButton
        resourceName={resourceName}
        kind={PaginationChange.PREV}
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
        kind={PaginationChange.NEXT}
        disabled={!!isNextDisabled}
        onClick={onChange}
      />
      <PaginationButton
        resourceName={resourceName}
        kind={PaginationChange.LAST}
        disabled={!!isLastDisabled}
        onClick={onChange}
      />
    </nav>
  );
};

export { Pagination };
export type { PaginationProps };
