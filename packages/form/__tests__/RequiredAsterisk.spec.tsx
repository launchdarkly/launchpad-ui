import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { RequiredAsterisk } from '../src';

describe('RequiredAsterisk', () => {
  it('renders', () => {
    render(<RequiredAsterisk testId="test id" />);
    expect(screen.getByTestId('test id')).toBeInTheDocument();
  });
});
