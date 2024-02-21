import { describe, expect, it } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Stack } from '../src';

describe('Stack', () => {
  it('renders', () => {
    render(
      <Stack gap="2" align="center">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </Stack>
    );
    expect(screen.getByTestId('stack')).toBeInTheDocument();
  });
});
