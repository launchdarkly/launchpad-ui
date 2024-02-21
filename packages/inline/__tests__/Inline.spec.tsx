import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Inline } from '../src';

describe('Inline', () => {
  it('renders', () => {
    render(
      <Inline>
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Inline>
    );
    expect(screen.getByTestId('inline')).toBeInTheDocument();
  });
});
