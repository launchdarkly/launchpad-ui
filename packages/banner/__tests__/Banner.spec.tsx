import { AlertKind } from '@launchpad-ui/alert';
import { axe } from 'jest-axe';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../tests/utils';
import { Banner } from '../src';

describe('Banner', () => {
  it('renders', () => {
    render(<Banner kind={AlertKind.INFO}>An important message</Banner>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });

  it('is accessible', async () => {
    const { container } = render(<Banner kind={AlertKind.INFO}>An important message</Banner>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('can be dismissible', async () => {
    render(
      <Banner kind={AlertKind.INFO} dismissible>
        An important message
      </Banner>
    );
    expect(screen.getByRole('button')).toBeVisible();
  });
});
