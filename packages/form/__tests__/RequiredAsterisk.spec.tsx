import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import { RequiredAsterisk } from '../src';

describe('RequiredAsterisk', () => {
  it('renders', () => {
    render(<RequiredAsterisk testId="test id" />);
    expect(screen.getByTestId('test id')).toBeInTheDocument();
  });
});
