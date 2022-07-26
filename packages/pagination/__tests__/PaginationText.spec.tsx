import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { PaginationText } from '../src/PaginationText';

describe('PaginationText', () => {
  it('renders', () => {
    render(<PaginationText currentOffset={0} pageSize={2} isReady totalCount={4} />);
    expect(screen.getByText('1-2')).toBeInTheDocument();
  });
});
