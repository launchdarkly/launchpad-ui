import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Button, ButtonGroup } from '../src';

describe('ButtonGroup', () => {
  it('renders', () => {
    render(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole('button', { name: 'One' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Two' })).toBeInTheDocument();
  });

  it('renders with compact spacing', () => {
    const { container } = render(
      <ButtonGroup spacing="compact">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.ButtonGroup--compact')).not.toBeNull();
    expect(screen.getByRole('button', { name: 'One' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Two' })).toBeInTheDocument();
  });

  it('renders with large spacing', () => {
    const { container } = render(
      <ButtonGroup spacing="large">
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.ButtonGroup--large')).not.toBeNull();
    expect(screen.getByRole('button', { name: 'One' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Two' })).toBeInTheDocument();
  });

  it('handles clicks', async () => {
    const spyOne = vi.fn();
    const spyTwo = vi.fn();
    const user = userEvent.setup();
    render(
      <ButtonGroup spacing="large">
        <Button aria-label="one" onClick={spyOne}>
          One
        </Button>
        <Button aria-label="two" onClick={spyTwo}>
          Two
        </Button>
      </ButtonGroup>
    );

    await user.click(screen.getByLabelText('one'));
    await user.click(screen.getByLabelText('two'));

    expect(spyOne).toHaveBeenCalledTimes(1);
    expect(spyTwo).toHaveBeenCalledTimes(1);
  });
});
