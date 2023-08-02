import type { PopoverProps } from '../src';

import { useOverlayTriggerState } from '@react-stately/overlays';
import { useRef } from 'react';
import { it, expect, describe } from 'vitest';

import { render, screen } from '../../../test/utils';
import { Popover } from '../src';

const PopoverPrimitive = ({ ...props }: Partial<PopoverProps>) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useOverlayTriggerState({});

  return (
    <>
      <button ref={triggerRef}>trigger</button>
      <Popover state={state} triggerRef={triggerRef} {...props}>
        An important message
      </Popover>
    </>
  );
};

describe('Primitives', () => {
  describe('Popover', () => {
    it('renders', () => {
      render(<PopoverPrimitive />);
      expect(screen.getByText('An important message')).toBeVisible();
    });
  });
});
