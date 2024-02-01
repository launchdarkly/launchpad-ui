import { it, expect, describe } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Menu, MenuItem, MenuTrigger, Button, Popover } from '../src';

describe('Menu', () => {
  it('renders', async () => {
    const user = userEvent.setup();
    render(
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu>
            <MenuItem>Item one</MenuItem>
            <MenuItem>Item two</MenuItem>
            <MenuItem>Item three</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    );

    await user.click(screen.getByRole('button'));
    expect(await screen.findByRole('menu')).toBeVisible();
  });
});
