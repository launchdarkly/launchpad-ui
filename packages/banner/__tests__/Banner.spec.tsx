import { AlertKind } from '@launchpad-ui/alert';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Banner } from '../src';

describe('Banner', () => {
  it('renders', () => {
    render(<Banner kind={AlertKind.INFO}>An important message</Banner>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
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
