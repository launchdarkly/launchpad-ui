import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Popover } from '../src';

describe('Primitives', () => {
  it('renders', () => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const state = useOverlayTriggerState({});

    render(
      <>
        <button ref={triggerRef}>test</button>
        <Popover state={state} triggerRef={triggerRef}>
          An important message
        </Popover>
      </>
    );
    expect(screen.getByText('An important message')).toBeVisible();
  });
});
