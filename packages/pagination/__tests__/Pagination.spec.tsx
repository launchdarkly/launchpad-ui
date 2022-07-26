import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Pagination } from '../src';

describe('Pagination', () => {
  it('renders', () => {
    render(
      <Pagination
        resourceName={'rocketship'}
        onChange={() => undefined}
        currentOffset={0}
        pageSize={2}
        isReady={true}
        totalCount={4}
      />
    );
    expect(screen.getByLabelText('first rocketship page')).toBeInTheDocument();
    expect(screen.getByLabelText('previous rocketship page')).toBeInTheDocument();
    expect(screen.getByLabelText('next rocketship page')).toBeInTheDocument();
    expect(screen.getByLabelText('last rocketship page')).toBeInTheDocument();
  });
});
