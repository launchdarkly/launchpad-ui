import type { BannerProps } from '../src';

import { describe, expect, it, vi } from 'vitest';

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
    const onDismiss = vi.fn();
    render(
      <Banner kind="info" onDismiss={onDismiss}>
        An important message
      </Banner>
    );
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('renders a header when passed', async () => {
    const header = 'My header';
    render(
      <Banner kind="info" header={header}>
        An important message
      </Banner>
    );

    expect(screen.getByText(header)).toBeVisible();
  });

  it('triggers onDismiss when close button is clicked', async () => {
    const onDismiss = vi.fn();
    const user = userEvent.setup();
    const content = 'An important message';
    render(
      <Banner kind="info" onDismiss={onDismiss}>
        {content}
      </Banner>
    );

    const closeButton = screen.getByLabelText('Close banner');

    await user.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
