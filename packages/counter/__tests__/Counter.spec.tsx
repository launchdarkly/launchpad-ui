import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Counter } from '../src';

describe('Counter', () => {
  it('renders', () => {
    render(<Counter value={12} />);
    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('renders subtle mode', () => {
    render(<Counter value={12} subtle />);
    const node = screen.getByText('12');
    expect(node).toBeInTheDocument();
    expect(node).toHaveClass('Counter--subtle');
  });
});
