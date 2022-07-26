import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Pagination } from '../src';

describe('Pagination', () => {
  it('renders', () => {
    render(
      <Pagination
        resourceName={'flags'}
        onChange={() => undefined}
        currentOffset={0}
        pageSize={2}
        isReady={true}
        totalCount={4}
      />
    );
    expect(screen.getByLabelText('first flags page')).toBeInTheDocument();
    expect(screen.getByLabelText('previous flags page')).toBeInTheDocument();
    expect(screen.getByLabelText('next flags page')).toBeInTheDocument();
    expect(screen.getByLabelText('last flags page')).toBeInTheDocument();
  });
});
