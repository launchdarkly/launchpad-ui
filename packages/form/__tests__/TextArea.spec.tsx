import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { TextArea } from '../src';

describe('TextArea', () => {
  it('renders', () => {
    render(
      <TextArea
        value="my text"
        aria-label="My Text Area"
        name="mytextarea"
        onChange={() => undefined}
      />
    );
    expect(screen.getByLabelText('My Text Area')).toBeInTheDocument();
  });
});
