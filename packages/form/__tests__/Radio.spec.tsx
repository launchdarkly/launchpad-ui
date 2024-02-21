import { describe, expect, it, vi } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Radio } from '../src';

describe('Radio', () => {
  it('renders', () => {
    render(
      <Radio value="one" aria-label="Test Radio" onChange={() => undefined}>
        Label
      </Radio>
    );
    expect(screen.getByLabelText('Test Radio')).toBeInTheDocument();
  });

  it('warns about a11y requirements', () => {
    console.warn = vi.fn();
    render(<Radio value="one" onChange={() => undefined} disabled />);
    expect(console.warn).toHaveBeenCalledWith(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  });
});
