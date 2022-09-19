import { it, expect, describe, vi } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { FocusTrap } from '../src';

const createComponent = () => (
  <>
    <FocusTrap autoFocus restoreFocus>
      <button data-test-id="in-trap">In</button>
    </FocusTrap>
    <button data-test-id="out-trap">Out</button>
  </>
);

describe('FocusTrap', () => {
  it('contains focus', async () => {
    const user = userEvent.setup();
    render(createComponent());

    await user.tab();
    expect(screen.getByTestId('in-trap')).toHaveFocus();
  });

  it('does not contain focus when commandbar is open', async () => {
    const subscribe = async (callback: (event: string) => void) => {
      callback('opened');
      return vi.fn();
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.CommandBar = { addEventSubscriber: vi.fn().mockImplementation(subscribe) };

    const user = userEvent.setup();
    render(createComponent());

    await user.tab();
    expect(screen.getByTestId('out-trap')).toHaveFocus();
  });

  it('contains focus when commandbar is closed', async () => {
    const subscribe = async (callback: (event: string) => void) => {
      callback('closed');
      return vi.fn();
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.CommandBar = { addEventSubscriber: vi.fn().mockImplementation(subscribe) };

    const user = userEvent.setup();
    render(createComponent());

    await user.tab();
    expect(screen.getByTestId('in-trap')).toHaveFocus();
  });
});
