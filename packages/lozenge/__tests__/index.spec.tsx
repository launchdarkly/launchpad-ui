import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Lozenge } from '../src';

it('renders in the loading state', () => {
  render(<Lozenge>hi</Lozenge>);
  expect(screen.getByText('hi')).toBeInTheDocument();
});
