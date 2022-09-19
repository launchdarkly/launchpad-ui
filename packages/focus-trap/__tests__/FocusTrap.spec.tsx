import type { ReactNode } from 'react';

import { it, expect, describe } from 'vitest';

import { render, screen, userEvent } from '../../../test/utils';
import { FocusTrap, FocusTrapContext } from '../src';

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

  it('does not contain focus when context provided is false', async () => {
    const user = userEvent.setup();
    render(createComponent(), {
      wrapper: ({ children }: { children: ReactNode }) => (
        <FocusTrapContext.Provider value={false}>{children}</FocusTrapContext.Provider>
      ),
    });

    await user.tab();
    expect(screen.getByTestId('out-trap')).toHaveFocus();
  });
});
