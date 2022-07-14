import { it, expect, describe } from 'vitest';

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
});
