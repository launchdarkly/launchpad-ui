import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { PaginationText } from '../src/PaginationText';

describe('PaginationText', () => {
	it('renders', () => {
		render(<PaginationText currentOffset={0} pageSize={2} isReady totalCount={4} />);
		expect(screen.getByText('1-2')).toBeInTheDocument();
	});

	it('renders progress if not ready', () => {
		render(<PaginationText currentOffset={0} pageSize={2} isReady={false} totalCount={4} />);
		expect(screen.getByRole('progressbar')).toBeInTheDocument();
	});

	it('renders no results text when there is no total', () => {
		render(<PaginationText currentOffset={0} pageSize={2} isReady totalCount={0} />);
		expect(screen.getByText('No results')).toBeInTheDocument();
	});
});
