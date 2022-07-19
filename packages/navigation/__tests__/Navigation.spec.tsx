import type { NavigationItemProps } from '../src';

import { LozengeKind } from '@launchpad-ui/lozenge';
import { MemoryRouter } from 'react-router-dom';
import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent, waitFor } from '../../../test/utils';
import { Navigation, NavigationItem, NavKind } from '../src';

globalThis.matchMedia = vi.fn().mockReturnValue({
  matches: true,
  onchange: null,
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
  addListener: vi.fn(),
  removeListener: vi.fn(),
});

const createComponent = (items: NavigationItemProps[]) => (
  <MemoryRouter>
    <Navigation items={items} title="nav" kind={NavKind.PRIMARY}>
      {(item) => (
        <NavigationItem
          key={item.to}
          name={item.name}
          to={item.to}
          tooltip={item.tooltip}
          tooltipContent={item.tooltipContent}
          status={item.status}
        />
      )}
    </Navigation>
  </MemoryRouter>
);

describe('Navigation', () => {
  it('renders', () => {
    render(
      createComponent([
        {
          name: 'First',
          to: '/first',
        },
        {
          name: 'Second',
          to: '/second',
        },
      ])
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('can render items with a tooltip', async () => {
    render(
      createComponent([
        {
          name: 'First',
          to: '/first',
          tooltip: true,
          tooltipContent: 'one',
        },
        {
          name: 'Second',
          to: '/second',
        },
      ])
    );
    userEvent.setup();
    await userEvent.hover(screen.getByText('First'));
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });

  it('can render items with a lozenge', async () => {
    const { container } = render(
      createComponent([
        {
          name: 'First',
          to: '/first',
          status: LozengeKind.NEW,
        },
        {
          name: 'Second',
          to: '/second',
        },
      ])
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('.Lozenge--navbar')).not.toBeNull();
  });
});
