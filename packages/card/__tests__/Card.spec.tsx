import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Card } from '../src';

describe('Card', () => {
  it('renders', () => {
    render(<Card>An important message</Card>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });
});
