import { Button } from '@launchpad-ui/button';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Box } from '../src';

describe('Box', () => {
  it('renders', () => {
    render(<Box backgroundColor="$black.800">I am a box</Box>);
    expect(screen.getByText('I am a box')).toBeVisible();
  });

  it('supports asChild prop', () => {
    render(
      <Box backgroundColor="$black.800" asChild>
        <Button>I am a button</Button>
      </Box>
    );
    expect(screen.getByRole('button')).toBeVisible();
  });
});
