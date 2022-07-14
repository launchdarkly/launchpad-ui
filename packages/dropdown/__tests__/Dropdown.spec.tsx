import { it, expect, describe } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Dropdown, DropdownButton } from '../src';

describe('Dropdown', () => {
  it('renders', () => {
    render(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <div>content</div>
      </Dropdown>
    );
    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
  });

  it('expands on click', async () => {
    render(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <div>content</div>
      </Dropdown>
    );

    userEvent.setup();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();
  });
});
