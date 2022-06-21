import { Info } from '@launchpad-ui/icons';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { IconField } from '../src';

describe('IconField', () => {
  it('renders', () => {
    render(
      <IconField icon={Info}>
        <input type="text" aria-label="Date" onChange={() => undefined} value="12/01/2022" />
      </IconField>
    );
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(
      <IconField icon={Info}>
        <input type="text" aria-label="Date" onChange={() => undefined} value="12/01/2022" />
      </IconField>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
