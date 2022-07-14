import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { CompactTextField } from '../src';

describe('CompactTextField', () => {
  it('renders', () => {
    render(<CompactTextField label="Email" aria-label="Email" onChange={() => undefined} />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });
});
