import { it, expect, describe } from 'vitest';

import { render } from '../../../test/utils';
import { FileTrigger, Button } from '../src';

describe('FileTrigger', () => {
  it('renders', () => {
    render(
      <FileTrigger>
        <Button>Button</Button>
      </FileTrigger>
    );
    const input = document.querySelector('input[type="file"]');
    expect(input).toBeInTheDocument();
  });
});
