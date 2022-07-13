import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Tooltip, TooltipBase } from '../src';

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
      <TooltipBase isOpen>
        <button>Target</button>
        <span>Content</span>
      </TooltipBase>
    );
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });
});
