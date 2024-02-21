import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FormHint } from '../src';

describe('FormHint', () => {
  it('renders', () => {
    render(<FormHint>An important hint</FormHint>);
    expect(screen.getByText('An important hint')).toBeInTheDocument();
  });
});
