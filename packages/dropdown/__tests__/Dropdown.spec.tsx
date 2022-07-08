import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen, userEvent } from '../../../tests/utils';
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

  it('is accessible', async () => {
    const { container } = render(
      <Dropdown>
        <DropdownButton>Target</DropdownButton>
        <div>content</div>
      </Dropdown>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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
