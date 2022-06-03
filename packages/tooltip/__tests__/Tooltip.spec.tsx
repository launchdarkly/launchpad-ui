import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { Tooltip } from '../src';

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
});
