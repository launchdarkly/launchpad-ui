import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FieldSet } from '../src';

describe('FieldSet', () => {
  it('renders', () => {
    render(<FieldSet testId="testing" />);
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });
});
