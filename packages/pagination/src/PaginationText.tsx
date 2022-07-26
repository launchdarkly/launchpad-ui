import { Progress } from '@launchpad-ui/progress';
import { VisuallyHidden } from '@react-aria/visually-hidden';

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

  const screenReaderLabel = `Viewing records ${from} through ${to} of ${totalCount} total.`;

  return (
    <div className="PaginationText">
      <VisuallyHidden>{screenReaderLabel}</VisuallyHidden>
      <span aria-hidden>
        <strong>
          {from}-{to}
        </strong>{' '}
        of <strong>{totalCount}</strong>
      </span>
    </div>
  );
};

export { PaginationText };
export type { PaginationTextProps };
