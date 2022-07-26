import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Pagination } from '../src';

describe('Pagination', () => {
  it('renders', () => {
    render(<Pagination>An important message</Pagination>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
