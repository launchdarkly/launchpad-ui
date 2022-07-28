import { ButtonKind } from '@launchpad-ui/button';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { it, expect, describe } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { SplitButton } from '../src';

describe('SplitButton', () => {
  it('renders', () => {
    render(
      <SplitButton
        kind={ButtonKind.DEFAULT}
        onClickMainButton={() => undefined}
        onSelect={() => undefined}
        name="test"
      >
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </SplitButton>
    );
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('can render tooltips', async () => {
    render(
      <SplitButton
        kind={ButtonKind.DEFAULT}
        onClickMainButton={() => undefined}
        onSelect={() => undefined}
        name="test"
        mainButtonTooltip="main"
        dropButtonTooltip="dropdown"
      >
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      </SplitButton>
    );

    userEvent.setup();
    await userEvent.hover(screen.getByText('test'));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    await userEvent.hover(screen.getByLabelText('Explore dropdown'));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });
});
