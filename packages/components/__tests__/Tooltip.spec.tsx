import { it, expect, describe } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, Tooltip, TooltipTrigger } from '../src';

describe('Tooltip', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    render(
      <TooltipTrigger>
        <Button>Trigger</Button>
        <Tooltip>Message</Tooltip>
      </TooltipTrigger>
    );
    await user.hover(document.body);
    await user.hover(screen.getByRole('button'));
    expect(await screen.findByRole('tooltip')).toBeVisible();
  });
});
