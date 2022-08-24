import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { FormGroup } from '../src';

describe('FormGroup', () => {
  it('renders', () => {
    render(
      <FormGroup testId="testing" isInvalid>
        <></>
      </FormGroup>
    );
    expect(screen.getByTestId('testing')).toBeInTheDocument();
  });
});
