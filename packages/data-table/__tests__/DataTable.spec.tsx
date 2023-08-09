import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { DataTable } from '../src';

describe('DataTable', () => {
  it('renders', () => {
    render(<DataTable>An important message</DataTable>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
