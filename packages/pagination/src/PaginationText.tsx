import { Progress } from '@launchpad-ui/progress';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import styles from './styles/Pagination.module.css';

type PaginationTextProps = {
	currentOffset: number;
	pageSize: number;
	isReady: boolean;
	totalCount: number;
	'data-test-id'?: string;
};

const PaginationText = ({
	currentOffset,
	pageSize,
	isReady,
	totalCount,
	'data-test-id': testId = 'pagination-text',
}: PaginationTextProps) => {
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
		<div className={styles.PaginationText} data-test-id={testId}>
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
