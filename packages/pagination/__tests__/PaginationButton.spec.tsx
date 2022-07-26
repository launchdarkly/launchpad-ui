import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { PaginationButton } from '../src/PaginationButton';
import { PaginationChange } from '../src/types';

describe('PaginationButton', () => {
  it('renders', () => {
    render(
      <PaginationButton
        kind={PaginationChange.FIRST}
        resourceName="resource"
        disabled={false}
        onClick={() => undefined}
      />
    );
    expect(screen.getByLabelText('first resource page')).toBeInTheDocument();
  });
});
