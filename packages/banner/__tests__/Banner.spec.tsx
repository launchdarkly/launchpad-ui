import type { BannerProps } from '../src';

import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Banner } from '../src';

const createComponent = (props?: BannerProps) => (
  <Banner kind="info" {...props}>
    Banner
  </Banner>
);

describe('Banner', () => {
  it('renders a banner with text', () => {
    render(createComponent());
    expect(screen.getByText('Banner')).toBeInTheDocument();
  });

  it('can be dismissible', async () => {
    render(
      <Banner kind="info" dismissible>
        An important message
      </Banner>
    );
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('renders a title when passed', async () => {
    const title = 'My title';
    render(
      <Banner kind="info" title={title}>
        An important message
      </Banner>
    );

    expect(screen.getByText(title)).toBeVisible();
  });

  it('triggers onDismiss when close button is clicked', async () => {
    const onDismiss = vi.fn();
    const user = userEvent.setup();
    const content = 'An important message';
    render(
      <Banner kind="info" onDismiss={onDismiss} dismissible>
        {content}
      </Banner>
    );

    const closeButton = screen.getByLabelText('Close banner');

    await user.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
