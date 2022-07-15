import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FieldError } from '../src';

describe('FieldError', () => {
  it('renders', () => {
    render(<FieldError name="Email" errorMessage="Email not found" />);
    expect(screen.getByText('Error - Email not found')).toBeInTheDocument();
  });

  it('does not render if no errorMessage is passed', () => {
    render(<FieldError name="Email" />);
    expect(screen.queryByText('Error - Email not found')).not.toBeInTheDocument();
  });
});
