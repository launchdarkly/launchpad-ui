import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Banner } from '../src';

describe('Banner', () => {
  it('renders', () => {
    render(<Banner kind="info">An important message</Banner>);
    expect(screen.getByText('An important message')).toBeInTheDocument();
  });

  it('can be dismissible', async () => {
    render(
      <Banner kind="info" dismissible>
        An important message
      </Banner>
    );
    expect(screen.getByRole('button')).toBeVisible();
  });
});
