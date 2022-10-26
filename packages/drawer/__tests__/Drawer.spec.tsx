import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { Drawer, DrawerHeader } from '../src';

describe('Drawer', () => {
  it('renders', async () => {
    render(
      <Drawer>
        <section>
          <DrawerHeader closeable>Drawer</DrawerHeader>
        </section>
      </Drawer>
    );
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('calls onCancel when escape key is pressed', async () => {
    const spy = vi.fn();
    const user = userEvent.setup();
    render(
      <Drawer onCancel={spy}>
        <DrawerHeader>Drawer</DrawerHeader>
      </Drawer>
    );

    await user.keyboard('{Escape}');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
