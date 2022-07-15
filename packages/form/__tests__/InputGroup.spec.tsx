import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { InputGroup } from '../src';

describe('InputGroup', () => {
  it('renders', () => {
    render(
      <InputGroup data-test-id="testing">
        <></>
      </InputGroup>
    );
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });
});
