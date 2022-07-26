import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Filter } from '../src';

describe('Filter', () => {
  it('renders', () => {
    render(<Filter>An important message</Filter>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
