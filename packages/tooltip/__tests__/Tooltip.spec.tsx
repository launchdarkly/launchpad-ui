import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Tooltip, TooltipComponent } from '../src';

describe('Tooltip', () => {
  it('renders', () => {
    render(
      <Tooltip isOpen>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <Tooltip isOpen>
        <button>Target</button>
        <span>Content</span>
      </Tooltip>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('exposes the base component', () => {
    render(
      <TooltipComponent isOpen>
        <button>Target</button>
        <span>Content</span>
      </TooltipComponent>
    );
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});
