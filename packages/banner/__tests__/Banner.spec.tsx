import type { BannerProps } from '../src';

import { AlertKind } from '@launchpad-ui/alert';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Banner } from '../src';

const createComponent = (props?: BannerProps) => (
  <Banner kind={AlertKind.INFO} {...props}>
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
      <Banner kind={AlertKind.INFO} dismissible>
        An important message
      </Banner>
    );
    expect(screen.getByRole('button')).toBeVisible();
  });

  it('renders a header when passed', async () => {
    const header = 'My header';
    render(
      <Banner kind={AlertKind.INFO} header={header}>
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
      <Banner kind={AlertKind.INFO} onDismiss={onDismiss} dismissible>
        {content}
      </Banner>
    );

    const closeButton = screen.getByLabelText('Close banner');

    await user.click(closeButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
