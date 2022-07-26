import { Progress } from '@launchpad-ui/progress';

type PaginationTextProps = {
  currentOffset: number;
  pageSize: number;
  isReady: boolean;
  totalCount: number;
};

const PaginationText = ({ currentOffset, pageSize, isReady, totalCount }: PaginationTextProps) => {
  const offset = Math.max(0, currentOffset || 0);
  const from = offset + 1;
  const to = totalCount && Math.min(offset + pageSize, totalCount);

  if (!isReady) {
    return (
      <div>
        <Progress />
      </div>
    );
  }

  if (!totalCount) {
    return <strong>No results</strong>;
  }

  return (
    <div className="PaginationText">
      <strong>
        {from}-{to}
      </strong>{' '}
      of <strong>{totalCount}</strong>
    </div>
  );
};

export { PaginationText };
export type { PaginationTextProps };
